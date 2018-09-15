class Common{
    constructor()
    {
        this.formData;
    }

    set inputData(value)
    {
        if(typeof value !== undefined && value.length > 0){
            this.formData = value;
        }else {
            throw new Error('Empty array set!');
        }
    }

    get inputData()
    {
        return this.convertJson(this.formData);
    }

    convertJson(data)
    {
        let objData = {};
        data.forEach(function(value, key){
            objData[value.name] = value.value;
        });
        return objData;
    }

}



class Author extends Common{
    constructor()
    {
        super();
        this.authorKey;
        this.authors = [];
        this.renderAuthor();
    }

    set authorId(value)
    {
        let id = parseInt(value);
        if(isNaN(id) || id < 0){
            throw new Error('Book Id not valid.');
        }
        this.authorKey = value;
    }

    get authorId()
    {
        if(isNaN(this.authorKey) || this.authorKey < 0){
            return 0;
        }
        return this.authorKey;
    }

    getAuthors()
    {
        let authors2 = this.authors.slice();
        return authors2.reverse();
    }

    renderAuthor(id=0)
    {
        var html = "<select class='form-control' name='author_id'>";
        this.getAuthors().forEach((obj, key) => {
            html += `<option value="${obj.id}" ${(obj.id === id)?'selected':''}>${obj.name}</option>`;
        });
        html += "</select>";
        document.getElementById('authors').innerHTML = html;
    }

    addAuthor()
    {
        let authorData;
        authorData = this.inputData;
        this.authorId = this.authorId + 1;
        this.authors.push({
            'id' : this.authorId,
            'name' : authorData.author_name,
            'age' : authorData.author_age,
            'address' : authorData.author_address,
        });
        this.renderAuthor();
    }
}


class Book extends Author{
    constructor()
    {
        super();
        this.bookKey;
        this.books = [];
    }

    set bookId(value)
    {
        let id = parseInt(value);
        if(isNaN(id) || id < 0){
            throw new Error('Book Id not valid.');
        }
        this.bookKey = value;
    }

    get bookId()
    {
        return this.bookKey;
    }

    getBooks()
    {
        return this.books;
    }

    addBook()
    {
        let bookData = this.inputData;
        this.books.splice(0,0,{
            'name' : bookData.book_name,
            'author' : this.authors.find((obj, key) => { return obj.id == bookData.author_id}),
            'year' : bookData.publish_year,
            'description' : bookData.description,
        });
        this.renderBook();
    };

    editBook()
    {
        let book = this.books.find((obj, key) => { return key == this.bookId});
        this.renderAuthor(book.author.id);
        document.getElementById('book_name').value = book.name;
        document.getElementById('publish_year').value = book.year;
        document.getElementById('description').value = book.description;
    }

    updateBook()
    {
        let bookData = this.inputData;
        let book = {
            'name' : bookData.book_name,
            'author' : this.authors.find((obj, key) => { return obj.id == bookData.author_id}),
            'year' : bookData.publish_year,
            'description' : bookData.description,
        };
        this.books[this.bookKey] = book;
        this.renderBook();
    }

    deleteBook()
    {
        this.books.pop(this.bookId);
        this.renderBook();
    };

    renderBook()
    {
        var html = "";
        this.getBooks().forEach(function(value, key){
            html += "<tr><td>"+  value.name + "</td>"+
                "<td>"+  value.author.name + "</td>"+
                "<td>"+  value.year + "</td>"+
                "<td>"+  value.description + "</td>"+
                "<td> <a class='edit' href='javascript:void(0)' data='"+ key +"'>Edit</a> | <a class='delete' href='javascript:void(0)' data='"+ key +"'>Delete</a></td>" +
                "</tr>";
        });
        $("#books").html(html);
    }
}



const book = new Book();
console.log(book);

$(document).on('submit', '#author_add_form', function(e){
    e.preventDefault();
    var formData = $(this).serializeArray();
    $(this)[0].reset();
    book.inputData = formData;
    book.addAuthor();
    $("#addAuthorModal").modal('hide');
});

$(document).on('click', '#add_book', function(e){
    e.preventDefault();
    let formData = $("#book_form").serializeArray();
    book.inputData = formData;
    book.addBook();
    $("#book_form")[0].reset();
});

$(document).on('click', '.delete', function(){
    let dataKey = $(this).attr('data');
    book.bookId = dataKey;
    book.deleteBook();
});

$(document).on('click', '.edit', function(){
    let dataKey = $(this).attr('data');
    $(".action_btn").attr('id', 'update');
    $(".action_btn").html('Update Book To List');
    $(".form_title").html('Update Book To List');
    book.bookKey = dataKey;
    book.editBook();
});

$(document).on('click', '#update', function(e){
    e.preventDefault();
    let formData = $("#book_form").serializeArray();
    console.log(formData);
    book.inputData = formData;
    book.updateBook();
    $(".action_btn").attr('id', 'add');
    $(".action_btn").html('Add Book To List');
    $(".form_title").html('Add Book To List');
    $("#book_form")[0].reset();
});
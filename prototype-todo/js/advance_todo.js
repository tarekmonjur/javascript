function Common()
{
    console.log('common instance...');
}

Common.prototype.convertJson = function convertArrayToJson(data){
    let objData = {};
    data.forEach(function(value, key){
        objData[value.name] = value.value;
    });
    return objData;
};



function Author()
{
    Common.call(this);
    this.authors = [];
    let formData = [];
    console.log('author instance...');

    // Setter and Getter
    Object.defineProperty(this, 'formData', {
        get : function () {
            let objData = {};
            formData.forEach(function(value, key){
                let name = value.value;
                objData[value.name] = name.charAt(0).toUpperCase() + name.slice(1);
            });
            return objData;
        },
        set : function (value) {
            if(typeof value !== undefined && value.length > 0){
                formData = value;
            }else {
                throw new Error('Empty array set!');
            }
        }
    })
}

Author.prototype = Object.create(Common.prototype);
Author.prototype.constructor = Author;

Author.prototype.getAuthors = function fn1(){
    let authors2 = this.authors.slice();
    return authors2.reverse();
};

Author.prototype.addAuthor = function fn2(){
    let authorData;
    authorData = this.formData;
    this.authors.push({
        'name' : authorData.author_name,
        'age' : authorData.author_age,
        'address' : authorData.author_address,
    });
    book.renderAuthor();
};

Author.prototype.renderAuthor = function fun3(){
    var html = "<select class='form-control' name='author_id'>";
    this.getAuthors().forEach((obj, key) => {
        html += "<option value='"+key+"'>"+obj.name+"</option>";
    });
    html += "</select>";
    document.getElementById('authors').innerHTML = html;
};



function Book()
{
    Author.call(this);
    this.books = [];
    this.bookKey;
    console.log('book instance...');
    this.renderAuthor();
}

Book.prototype = Object.create(Author.prototype);
Book.prototype.constructor = Book;

Book.prototype.getBooks = function get(){
    return this.books;
};

Book.prototype.addBook = function add(formData){
    let bookData = {};
    bookData = this.convertJson(formData);

    this.books.splice(0,0,{
        'name' : bookData.book_name,
        'author' : this.authors.find((obj, key) => { return key == bookData.author_id}),
        'year' : bookData.publish_year,
        'description' : bookData.description,
    });
    this.renderBook();
};

Book.prototype.editBook = function edit(){
    let book = this.books.find((obj, key) => { return key == this.bookKey});
    document.getElementById('book_name').value = book.name;
    // document.getElementById('author_name').value = book.author;
    document.getElementById('publish_year').value = book.year;
    document.getElementById('description').value = book.description;
};

Book.prototype.updateBook  = function update(formData){
    bookData = this.convertJson(formData);
    let book = {
        'name' : bookData.book_name,
        'author' : this.authors.find((obj, key) => { return key == bookData.author_id}),
        'year' : bookData.publish_year,
        'description' : bookData.description,
    };
    this.books[this.bookKey] = book;
    this.renderBook();
};

Book.prototype.deleteBook = function deleteBook(key){
    this.books.pop(key);
    this.renderBook();
};

Book.prototype.renderBook = function renderView(){
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
};




const book = new Book();
console.log(book);

$(document).on('submit', '#author_add_form', function(e){
    e.preventDefault();
    var formData = $(this).serializeArray();
    $(this)[0].reset();
    book.formData = formData;
    book.addAuthor();
    $("#addAuthorModal").modal('hide');
});

$(document).on('click', '#add_book', function(e){
    e.preventDefault();
    let formData = $("#book_form").serializeArray();
    book.addBook(formData);
    $("#book_form")[0].reset();
});

$(document).on('click', '.delete', function(){
    let dataKey = $(this).attr('data');
    book.deleteBook(dataKey);
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
    book.updateBook(formData);
    $(".action_btn").attr('id', 'add');
    $(".action_btn").html('Add Book To List');
    $(".form_title").html('Add Book To List');
    $("#book_form")[0].reset();
});



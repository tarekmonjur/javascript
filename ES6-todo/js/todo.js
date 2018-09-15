class Todo{
    constructor(){
        this.books = [];
        this.bookKey;
        console.log('start todo...');
    }



    gets(){
        return this.books;
    }

    add(formData){
        let book = this.convertArrayToJson(formData);
        this.books.push(book);
        console.log(this.books);
        this.renderView();
    }

    convertArrayToJson(data){
        let objData = {};
        data.forEach(function(value, key){
            objData[value.name] = value.value;
        });
        return objData;
    }

    renderView(){
        var html = "";
        this.gets().forEach(function(value, key){
            html += "<tr><td>`${value.book_name}`</td>"+
                "<td>"+  value.author_name + "</td>"+
                "<td>"+  value.publish_year + "</td>"+
                "<td>"+  value.description + "</td>"+
                "<td> <a class='edit' href='javascript:void(0)' data='"+ key +"'>Edit</a> | <a class='delete' href='javascript:void(0)' data='"+ key +"'>Delete</a></td>" +
                "</tr>";
        });
        $("#books").html(html);
    }

    edit(){
        let book = this.books.find((obj, key) => { return key == this.bookKey;});

        let book_name = document.getElementById('book_name');
        let author_name = document.getElementById('author_name');
        let publish_year = document.getElementById('publish_year');
        let description = document.getElementById('description');

        book_name.value = book.book_name;
        author_name.value = book.author_name;
        publish_year.value = book.publish_year;
        description.value = book.description;
    }

    update(formData){
        let book = this.convertJson(formData);
        this.books[this.bookKey] = book;
        console.log(this.bookKey);
        this.renderView();
    }

    delete(key){
        this.books.splice(key, 1);
        this.renderView();
    }
}

const book = new Todo();

$(document).on('click', '#add', function(e){
    e.preventDefault();
    let formData = $("#formData").serializeArray();
    book.add(formData);
    $("#formData")[0].reset();
    console.log('add....');
});

$(document).on('click', '.edit', function(){
   let dataKey = $(this).attr('data');
   $(".action_btn").attr('id', 'update');
   $(".action_btn").html('Update Book To List');
   $(".form_title").html('Update Book To List');
   book.bookKey = dataKey;
   book.edit();
});

$(document).on('click', '#update', function(e){
    e.preventDefault();
    let formData = $("#formData").serializeArray();
    book.update(formData);
    $(".action_btn").attr('id', 'add');
    $(".action_btn").html('Add Book To List');
    $(".form_title").html('Add Book To List');
    $("#formData")[0].reset();
    console.log('update....');
});

$(document).on('click', '.delete', function(){
    let dataKey = $(this).attr('data');
    book.delete(dataKey);
});
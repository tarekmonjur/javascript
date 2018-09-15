function Author(name){
	this.author = name;
}

Author.prototype.getAuthor = function(){
	console.log('Author Name : '+ this.author);
}

function Book(name, author){
	Author.call(this, author);
	this.name = name;
}

Book.prototype = Object.create(Author.prototype);
Book.prototype.constructor = Book;

Book.prototype.getBook = function(){
	console.log('Book Name : '+ this.name);
}

var book1 = new Book('book1', 'tarek');
book1.getAuthor();
book1.getBook();
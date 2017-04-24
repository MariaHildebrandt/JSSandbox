function Book(title, pages, author){
    this.title = title;
    this.pages = pages;
    this.author = author;
}

var book = new Book('alice in wonderland', 200, 'carol');

console.log(book.title);

Book.prototype.printTitle = function(){
    console.log(this.title);
};

book.printTitle();

function Movie(title, duration, director){
    this.title = title;
    this.duration = duration;
    this.director = director;
    this.printDirector = function(){
        console.log(this.director);
    }
}

var movie = new Movie('Inception', 120, 'Nolan');
movie.printDirector();

/* ARROW FUNCTIONS */

/*
var circleArea = function circleArea(r) {
 var PI = 3.14;
 var area = PI * r * r;
 return area;
};
*/

let circleArea = (r) => { 
 const PI = 3.14;
 let area = PI * r * r;
 return area;
}
console.log(circleArea(2));


/*Objec properties*/
var hello = {
 name : 'abcdef',
 printHello(){
    console.log('Hello');
    }
}
console.log(hello.printHello());
     
     
/*or: */
var hello = {
 name: 'abcdef',
 printHello: function printHello() {
    console.log('Hello');
 }
};

/*Classes*/
//instead of
function Book(title, pages, isbn){ //{1}
 this.title = title;
 this.pages = pages;
 this.isbn = isbn;
}
Book.prototype.printTitle = function(){
 console.log(this.title);
};
//write:

class Magazine{
    constructor(title, company, issue){
        this.title = title;
        this.company = company;
        this.issue = issue;
    }
    printIssue(){
        console.log(this.issue)
    }
}
    
let magazine = new Magazine('Vanity Fair', 'Vanity', 5);
console.log(magazine.title); //outputs the book title
magazine.title = 'new title'; //update the value of the book title
console.log(magazine.title); //outputs the book title


     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     

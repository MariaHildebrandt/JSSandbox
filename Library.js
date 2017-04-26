// make a library class
//library contains a list of book objets
//every book class has a title, author, genre, year and a bool status if lend out
//library has a function lendOut that will change the bool status
//function turn in will change bool status again
//both functions will also chnage if the book is already borrowed or not

// ***Problem** : app creates twice as many Book Objects. 
//Client better should not acces own Book Object but references to books in the Library Class



class Library
{
    constructor( location, name, books){
        this._location = location;
        this._name = name;
        this._books = books; //Array of Book Objects
    }
    
    get location(){
        return "Location of Library: " + this._location;
    }
    
    get name(){
        return "Name of Library: " + this._name;
    }
    addBook(value){
        if(Array.isArray(value)){
            console.log( "is array");
            for(var i = 0; i < value.length; i++){
                this._books.push(value[i]);
            }
            
        }else{
            this._books.push(value);
        } 
    }
    borrowBook(book, client){
        var bookFound = false
        var bookIndex;
        for( var i = 0; i < this._books.length; i++){
            if(this._books[i].title == book.title){
                console.log("Comparing: " + this._books[i].title + " with " + book.title );
                bookFound = true;
                bookIndex = i;
            }
        }
        if(bookFound)
        {
            if(this._books[bookIndex].status == true){
                console.log("Book has already been borrowed.");
            }else{
                this._books[bookIndex].status = true;
                client.addBook(book);
                console.log("Book: " + book.title + " is no borrowed by " + client.name);
            }
            
        }else{
            console.log("No such book in this library.");
        }
    }
    showBooks(){
        for(var i = 0; i < this._books.length ; i++){
            this._books[i].printInformation();
        }
    }
}


class Book
{
    constructor( libraryName, title, author, genre, year, status)
    {
        this._libraryName = libraryName;
        this._title = title;
        this._author = author;
        this._genre = genre;
        this._year = year;
        this._status = status; //bool: true then book is borrowed 
    }
    get libraryName(){
        return this._libraryName;
    }
    get title(){
        return this._title;
    }
    get author(){
        return this._author;
    }
    get genre(){
        return this._genre;
    }
    get year(){
        return this._year;
    }
    printStatus(){
        if(this._status){
            return "Borrowed: yes";
        }else{
            return "Borrowed: no";
        }
        
    }
    get status(){
        return this._status;
    }
    
    set status(value){
        this._status = value;
    }
    
    printInformation(){
        console.log("Bookinformation:");
        console.log("Located in Library: " + this._libraryName);
        console.log("Title: " + this._title);
        console.log("Author: " + this._author);
        console.log("Genre: " + this._genre);
        console.log("Year: " + this._year);
        console.log("Borrowed: " + this._status);
        console.log(" ");
    }
}

class Client
{
    constructor( name, adress, borrowedBooks)
    {
        this._name = name;
        this._adress = adress;
        this._borrowedBooks = borrowedBooks; //array of BookObjects
    }
    get name(){
        return this._name;
    }
    getBooks(){
        if(this._borrowedBooks.length == 0){
            console.log( this._name + " has borrowed no books");
        }else{
            console.log( this._name + " has borrowed these books:");
            for(var i = 0; i < this._borrowedBooks.length; i++){
                return this._borrowedBooks[i].printInformation();
            }
        }
    }
    addBook(book){
        this._borrowedBooks.push(book);
    }
    returnBook(){
        //...
    }
}

/*********************/
/*******Tests********/
/*******************/

//create books for Libraries
let HarryPotter5 = new Book("Dortmund Mitte", "Harry Potter and the Order of the Phoenix", "Joanne K. Rowling", "Fantasy", 2003, false);
let HungerGames1 = new Book("Dortmund Mitte", "The Tributes of Panem: Hunger Games", "JSuzanne Collins", "Fantasy", 2010, false);
let HowWorldWorks = new Book("Dortmund Mitte", "How the World Works", "Noam Chomsky", "Politics", 2010, false);
let Industriesoziologie = new Book("Dortmund Mengede", "Industriesoziologie", "Hartmut Hirsch-Kreisen", "Soziologie", 2009, true);


//Create Book Lists for Libraries
var DoMitteBookList = [];
DoMitteBookList.push(HarryPotter5);
DoMitteBookList.push(HungerGames1);
DoMitteBookList.push(HowWorldWorks);

//Test if books were added to list
DoMitteBookList[1].printInformation();

var MengedeBookList = [];
MengedeBookList.push(Industriesoziologie);


//Add books to Libraries
let BibDortmundMitte = new Library("Dortmund Mitte", "Bibliothek Dortmund Mitte", DoMitteBookList);
let BibMengede = new Library("Mengede", "Bibliothek Dortmund Mengede", MengedeBookList);

//create new LibraryClient
var bookList = [];
let Max = new Client("Max Mustermann", "Osterburgstraße 18", bookList);
Max.getBooks();
console.log(" ");

//Test Lirbrary Object
console.log(BibDortmundMitte.name);
BibDortmundMitte.showBooks();
console.log(" ");


//Test Borrow Function
BibDortmundMitte.borrowBook(HungerGames1, Max)
Max.getBooks();


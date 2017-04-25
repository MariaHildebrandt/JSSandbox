class Kitchen{
    constructor(retailer, length, width, fridge){
        this._retailer  = retailer;
        this._length = length;
        this._width = width;
        this._fridge = fridge;
    }
    get retailer(){
        return "Retailer: " + this._retailer;
    }
    set retailer(value){
        this._retailer = value;
    }
    returnSquareMeters(){
        var SquareMeters = this._length*this._width;
        return "Kitchen space: " + SquareMeters.toFixed(2) + " m^2";
    }
}


class Fridge{
    constructor(manufacturer, supply=[]){
        this._manufacturer = manufacturer;
        this._supply = supply;
    }
    get supply(){
        return this._supply;
    }
    printSupply(){
        console.log("Supply: ");
        for(var i = 0; i < this._supply.length; i++){
            //console.log("Product: " + this._supply[i].name + " With Quantity of: " + this._supply[i].quantity);
            console.log( this._supply[i].quantity + " " + this._supply[i].name + " from " + this._supply[i].market);

        }
    }
    addSupply(value){
        this._supply.push(value);
    }
    search(product){
        
    }
}


class Product{
    constructor(name, quantity, cost, market,type){
        this._name = name;
        this._quantity = quantity;
        this._cost = cost;
        this._market = market;
        this._type = type;
    }
    get name(){
        return this._name;
    }
    get quantity(){
        return this._quantity;
    }
    get market(){
        return this._market;
    }
    set quantity(value){
        this._quantity = value;
    }
}

class Fruit extends Product{
    constructor (name, quantity, cost, market, type, color) {
        super(name, quantity, cost, market, type); 
        this._color = color;
    }
    get color(){
        return this._color;
    }
}

class Drink extends Product{
    constructor (name, quantity, cost, market, type, lactose) {
        super(name, quantity, cost, market, type); 
        this._lactose = lactose; //bool
    }
    get lactose(){
        return this._lactose;
    }
}








//Supply Objects for Fridge
let apple = new Fruit('Apples', 4, 1.50, 'Rewe', "Lebensmittel", "red");
let banana = new Fruit('Bananas', 5, 3.00, 'Aldi', "Lebensmittel", "yellow");
let milk = new Drink('Milk', 2, 2.00, 'Kaufland', "Lebensmittel", "yes");

var supply = [ apple, banana, milk];
let myFridge = new Fridge('Bosch', supply);

//New Kitchen Object
let myKitchen = new Kitchen('Ikea', 4.5, 5.3, myFridge);
console.log(myKitchen.returnSquareMeters());
console.log(myKitchen.retailer);

//change retailer name
myKitchen.retailer = 'Trends Ostermann';
console.log(myKitchen.retailer);
myFridge.printSupply();

// add to supply
let butter = new Product('Butter', 4, 1.50, 'Rewe', "Lebensmittel");
myFridge.addSupply(butter);
myFridge.printSupply();

//Search for Product with Binary Search
myFridge.search('Apples');

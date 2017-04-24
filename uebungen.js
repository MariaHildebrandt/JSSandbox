/****************/
/*Eigene Übugen*/
/**************/

class Modul { 
    constructor (name, CP, raum) {
        //Atrribute mit ES6 Syntax sowie Getter und Setter
        this._name = name;
        this.CP = CP;
        this.raum = raum;
    }
    get name(){
       return this._name;
    }
    set name(value){
        this._name = value;
    }
    printRaum(){
       return this.raum;
    }
    printCP(){
       return this.CP;
    }
}

class Kerninformatik extends Modul { 
    constructor (name, CP, raum, programmiersprache, professor, uebungen) {
        super(name, CP, raum); 
        this.programmiersprache = programmiersprache;
        this.professor = professor;
        this.uebungen = uebungen;
    }
    printProgrammiersprache(){
        return this.programmiersprache;
    }
    printProfessor(){
        return this.professor;
    }
    printUebungen(){
        for (var i=0; i < this.uebungen.length; i++){
            console.log(this.uebungen[i]+", ");
        }
    }
    addUebung(day){
        this.uebungen.push(day);
    }
}

class Elektrotechnik extends Modul { 
    constructor (name, CP, raum, programmiersprache, professor, uebungen) {
        super(name, CP, raum); 
        this.programmiersprache = programmiersprache;
        this.professor = professor;
        this.uebungen = uebungen;
    }
    printProgrammiersprache(){
        return this.programmiersprache;
    }
    printProfessor(){
        return this.professor;
    }
    printUebungen(){
        for (var i=0; i < this.uebungen.length; i++){
            console.log(this.uebungen[i]+", ");
        }
    }
    addUebung(day){
        this.uebungen.push(day);
    }
}

var ISuebungen =  ['Montag', 'Dienstag', 'Mittwoch'];
let Informationssysteme = new Kerninformatik('Informationssysteme', 4, 'Seminargebäude', 'SQL', 'Marwedell', ISuebungen);
console.log(Informationssysteme.printProgrammiersprache());
console.log(Informationssysteme.printProfessor());
console.log(Informationssysteme.printRaum());
console.log(Informationssysteme.name);
Informationssysteme.printUebungen();
Informationssysteme.addUebung('Freitag');
Informationssysteme.printUebungen();

var SigSysAuebungen =  ['Mittwoch'];
let SigSysA = new Elektrotechnik('Signale und Systeme A', 4.5, 'Audimax', 'keine', 'Chen',SigSysAuebungen);

var SigSysBuebungen =  ['Mittwoch'];
let SigSysB = new Elektrotechnik('Signale und Systeme B', 4.5, 'OH14', 'keine', 'Schramm',SigSysBuebungen);

class Semester{
    constructor(module,jahr){
        this._module = module;
        this._jahr = jahr;
    }
    get module(){
        return this._module;
    }
    set module(value){
        this._module = value;
    }
    get jahr(){
        return this.jahr;
    }
    set jahr(value){
        this.jahr = value;
    }
    printAllCP(){
        for (var i=0; i < this._module.length; i++){
            console.log(this._module[i].printCP());
        }
    }
}

var alleModule = [SigSysA, SigSysB, Informationssysteme];
let SS17 = new Semester(alleModule, 2017);
console.log('Alle CP:');
SS17.printAllCP();



























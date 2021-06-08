function Employee(givenName, givenExperience, givenDivision){
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
}

Employee.prototype.slogan=function(){
    return `I am ${this.name} and this company is the best`;
}

Employee.prototype.joiningYear=function(){
    return 2020 - this.experience;
}

function Programmer(givenName, givenExperience, givenDivision, language, github){
    Employee.call(this,givenName, givenExperience, givenDivision);
    this.language = language;
    this.github = github;
}

Programmer.prototype = Object.create(Employee.prototype);
Programmer.prototype.constructor = Programmer;

Programmer.prototype.favoriteLanguage = function(){
    if (this.language == 'python'){
        return 'Python';
    }
    else{
        return 'JavaScript';
    }
}

//Object.setPrototypeOf(Programmer.prototype, Employee.prototype);

let arju = new Programmer("Arju Aman",0,"Developer","javaScript","arjuaman");

console.log(arju);
// console.log(arju.joiningYear());
// console.log(arju.slogan());

console.log(arju.favoriteLanguage());

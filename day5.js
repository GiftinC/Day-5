//1.
//ans:
class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    }
var CasinoRoyale = new Movie("Casino Royale","Eon Productions","PG - 13”);
console.log(CasinoRoyale.title);
//2.
//ans:
class Circle {
    constructor(radius,color) {
this,radius = radius;
this.color = color
    }
}
var c1 = new Circle (1.0,"red");

//3.
//ans:
class person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
}
var person1 = new person("Giftin C", 22, "Student");
console.log("Name:", person1.name);
console.log("Age:", person1.age);
console.log("Occupation:", person1.occupation);
//4.
//ans:
class UberPrice {
    constructor(Car, Distance, Time ,base ,perkm ) {
        this.Car = Car;
        this.Distance = Distance;
        this.Time = Time;
        this.base = base;
        this.perkm = perkm; 
    }
}
var Ride1 = new UberPrice("Maruti",12,30,10,10);

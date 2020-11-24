// classes
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _name;
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");
// Inheritance
class Animal {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
let sam = new Snake("Sammy the Python");
let tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
// Public, private, and protected modifiers
// Public by default
class Car {
    constructor(theName) {
        this.modelName = theName;
    }
    move(distanceInMeters) {
        console.log(`${this.modelName} moved ${distanceInMeters}m.`);
    }
}
// ECMAScript Private Fields
class Animals {
    constructor(theName) {
        _name.set(this, void 0);
        __classPrivateFieldSet(this, _name, theName);
    }
}
_name = new WeakMap();
// new Animal("Cat").#name;
// Property '#name' is not accessible outside class 'Animal' because it has a private identifier.
// TypeScript’s private
// a member as being marked private, it cannot be accessed from outside of its containing class.
class Man {
    constructor(theName) {
        this.name = theName;
    }
}
// protected
// The protected modifier acts much like the private modifier with the exception that members declared protected can also be accessed within deriving classes.
// A constructor may also be marked protected. This means that the class cannot be instantiated outside of its containing class, but can be extended.
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Employee extends Person {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
//err:Property 'name' is protected and only accessible within class 'Person' and its subclasses.
// console.log(howard.name);
// You can make properties readonly by using the readonly keyword. Readonly properties must be initialized at their declaration or in the constructor.
class Octopus {
    constructor(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
//err
// dad.name = "Man with the 3-piece suit";
// Cannot assign to 'name' because it is a read-only property.
//Accessors
const fullNameMaxLength = 10;
class Empl {
    constructor() {
        this._fullName = "";
    }
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error("fullName has a max length of " + fullNameMaxLength);
        }
        this._fullName = newName;
    }
}
let empl = new Empl();
empl.fullName = "Bob Smith is Here isnt he?";
if (empl.fullName) {
    console.log(empl.fullName);
}
// Static Properties
// static members of a class, those that are visible on the class itself rather than on the instances.
class Grid {
    constructor(scale) {
        this.scale = scale;
    }
    calculateDistanceFromOrigin(point) {
        let xDist = point.x - Grid.origin.x;
        let yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}
Grid.origin = { x: 0, y: 0 };
let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// Abstract Classes
// Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly. Unlike an interface, an abstract class may contain implementation details for its members.
class Bird {
    move() {
        console.log("roaming the earth...");
    }
}
// Methods within an abstract class that are marked as abstract do not contain an implementation and must be implemented in derived classes
class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log("Department name: " + this.name);
    }
}
class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }
    printMeeting() {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports() {
        console.log("Generating accounting reports...");
    }
}
let department; // ok to create a reference to an abstract type
// department = new Department(); // error: cannot create an instance of an abstract class
// Cannot create an instance of an abstract class.
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
//err
// department.generateReports();
// Property 'generateReports' does not exist on type 'Department'.
//Using a class as an interface
class Point {
}
let point3d = { x: 1, y: 2, z: 3 };
//# sourceMappingURL=oopConcepts.js.map
// classes

class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");

// Inheritance
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

// Public, private, and protected modifiers
// Public by default
class Car {
  public modelName: string;

  public constructor(theName: string) {
    this.modelName = theName;
  }

  public move(distanceInMeters: number) {
    console.log(`${this.modelName} moved ${distanceInMeters}m.`);
  }
}
// ECMAScript Private Fields

class Animals {
  #name: string;
  constructor(theName: string) {
    this.#name = theName;
  }
}

// new Animal("Cat").#name;
// Property '#name' is not accessible outside class 'Animal' because it has a private identifier.

// TypeScript’s private
// a member as being marked private, it cannot be accessed from outside of its containing class.
class Man {
  private name: string;

  private constructor(theName: string) {
    this.name = theName;
  }
}
// protected
// The protected modifier acts much like the private modifier with the exception that members declared protected can also be accessed within deriving classes.
// A constructor may also be marked protected. This means that the class cannot be instantiated outside of its containing class, but can be extended.

class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}
let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
//err:Property 'name' is protected and only accessible within class 'Person' and its subclasses.

// console.log(howard.name);

// You can make properties readonly by using the readonly keyword. Readonly properties must be initialized at their declaration or in the constructor.
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;

  constructor(theName: string) {
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
  private _fullName: string = "";

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
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
  static origin = { x: 0, y: 0 };

  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }

  constructor(public scale: number) {}
}

let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

// Abstract Classes
// Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly. Unlike an interface, an abstract class may contain implementation details for its members.
abstract class Bird {
  abstract makeSound(): void;

  move(): void {
    console.log("roaming the earth...");
  }
}

// Methods within an abstract class that are marked as abstract do not contain an implementation and must be implemented in derived classes

abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing"); // constructors in derived classes must call super()
  }

  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }

  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

let department: Department; // ok to create a reference to an abstract type
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
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };




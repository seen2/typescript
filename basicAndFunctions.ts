//defining types by interface
const h: string = "hello";
console.log(h);

//defining types

//==>
interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Steve",
  id: 0,
};

//==>
class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const userA: User = new UserAccount("Steve", 12);

function getAddminUser(): User {
  //code
  return new UserAccount("Shintu", 09);
}

function deleteUser(user: User) {
  //code
}

//composing types

//unions

type mybool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function greetUser(name: String | number) {
  console.log("Hello,", name);
}

greetUser(1);
greetUser("Steve");

function greet(person: string | number): string | { name: string; id: number } {
  return typeof person === "string" ? person : { name: "Jhon Doe", id: person };
}

console.log("Hello", greet("Sam"));
console.log("Hello", greet(123));

//Generics

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

//You can declare your own types that use generics:

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

//a is string here
const a = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
// backpack.add(23);

//“duck typing” or “structural typing”.
interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// prints "12, 26"
const point = { x: 12, y: 26 };
printPoint(point);

// The point variable is never declared to be a Point type. However, TypeScript compares the shape of point to the shape of Point in the type-check. They have the same shape, so the code passes.

// The shape-matching only requires a subset of the object’s fields to match.

const point3 = { x: 12, y: 26, z: 89 };
printPoint(point3); // prints "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
printPoint(rect); // prints "33, 3"

//error
// const color = { hex: "#187ABF" };
// printPoint(color);

//Array
//1
let list: number[] = [1, 2, 3];
//2
let numList: Array<number> = [1, 2, 3];

//Tupple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK

// When accessing an element with a known index, the correct type is retrieved:

console.log(x[0].substring(1));
//Accessing an element outside the set of known indices fails with an error.

//enum
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c);

//By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members. For example, we can start the previous example at 1 instead of 0:

enum Clr {
  Red = 1,
  Green,
  Blue,
}
let col: Clr = Clr.Green;
//Or, even manually set all the values in the enum:

enum Colr {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let cl: Colr = Colr.Green;

//Unknown types

let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = false;

//Any
//Unlike unknown, variables of type any allow you to access arbitrary properties, even ones that don’t exist.
let looselyTyped: any = 4;
// OK, ifItExists might exist at runtime
let strictlyTyped: unknown = 4;
//error
// strictlyTyped.toFixed();
// Object is of type 'unknown'.
declare function getValue(key: string): any;
// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");

// Void
// void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:

function warnUser(): void {
  console.log("This is my warning message");
}

// Declaring variables of type void is not useful because you can only assign null (only if --strictNullChecks is not specified, see next section) or undefined to them:

let unusable: void = undefined;
// OK if `--strictNullChecks` is not given
unusable = null;

// Null and Undefined
// In TypeScript, both undefined and null actually have their types named undefined and null respectively. Much like void, they’re not extremely useful on their own:

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

// By default null and undefined are subtypes of all other types. That means you can assign null and undefined to something like number.

// Never
// The never type represents the type of values that never occur.

// The never type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to, never (except never itself). Even any isn’t assignable to never.

// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}

// Object
// object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined.

// Type assertions
// Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does.

// Type assertions have two forms.

// One is the as-syntax:

let someValue: unknown = "this is a string";

let strLength: number = (someValue as string).length;

// The other version is the “angle-bracket” syntax:

let someVal: unknown = "this is a string";

let strLen: number = (<string>someVal).length;

// About Number, String, Boolean, Symbol and Object
// It can be tempting to think that the types Number, String, Boolean, Symbol, or Object are the same as the lowercase versions recommended above. These types do not refer to the language primitives however, and almost never should be used as a type.
//Instead, use the types number, string, boolean, object and symbol.

// Optional Properties
// Some exist under certain conditions or may not be there at all.

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });

//Readonly properties
interface Coordinate {
  readonly x: number;
  readonly y: number;
}

// You can construct a Coordinates by assigning an object literal. After the assignment, x and y can’t be changed.

let p1: Coordinate = { x: 10, y: 20 };
// p1.x = 5; // error!

let arr: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = arr;

// readonly vs const
// The easiest way to remember whether to use readonly or const is to ask whether you’re using it on a variable or a property.

//Excess Property Checks

function createSqr(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}
//error
//let mySqr = createSqr({ colour: "red", width: 100 });

// Getting around these checks is actually really simple. The easiest method is to just use a type assertion:
//1
let mySqr = createSqr({ width: 100, opacity: 0.5 } as SquareConfig);

//2 However, a better approach might be to add a string index signature if you’re sure that the object can have some extra properties that are used in some special way.

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

mySqr = createSqr({ colour: "red", width: 100 });

// The above workaround will work as long as you have a common property between squareOptions and SquareConfig. In this example, it was the property width. It will however, fail if the variable does not have any common object property.

//Function Types

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

mySearch = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};

// Had the function expression returned numbers or strings, the type checker would have made an error that indicates return type doesn’t match the return type described in the SearchFunc interface.
mySearch = function (src, sub) {
  let result = src.search(sub);
  return result > -1;
};

//Indexable Types(“index into” like a[10], or ageMap["daniel"]. )

interface StrArray {
  [index: number]: string;
}

let myArray: StrArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
  error; // [x: number]: Animal;
  // Numeric index type 'Animal' is not assignable to string index type 'Dog'.
  [x: string]: Dog;
}

// While string index signatures are a powerful way to describe the “dictionary” pattern, they also enforce that all properties match their return type. This is because a string index declares that obj.property is also available as obj["property"].
interface NumberDictionary {
  [index: string]: number;
  length: number; // ok, length is a number
  //name: string; // error, the type of 'name' is not a subtype of the indexer
}

// Finally, you can make index signatures readonly in order to prevent assignment to their indices:

interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArr: ReadonlyStringArray = ["Alice", "Bob"];
// myArr[2] = "Mallory"; // error!

//Class Types

// You can also describe methods in an interface that are implemented in the class, as we do with setTime in the below example:

interface ClkInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clk implements ClkInterface {
  currentTime: Date = new Date();
  constructor(h: number, m: number) {}

  setTime(d: Date) {
    this.currentTime = d;
  }
}

//Difference between the static and instance sides of classes

interface ClockConstructor {
  new (hour: number, minute: number);
}

interface ClockInterface {
  tick(): void;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;

// Interfaces Extending Classes

class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}
//error Class 'ImageControl' incorrectly implements interface 'SelectableControl'.
// class ImageControl implements SelectableControl {

//   Types have separate declarations of a private property 'state'.
//   private state: any;
//   select() {}
// }

//Funtions

//HOF
let myAdd: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
// myAdd has the full function type
let myAdd2: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y;
};

//Optional and Default Parameters
//We can get this functionality in TypeScript by adding a ? to the end of parameters

function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

//default initialized parameters
// we can also set a value that a parameter will be assigned if the user does not provide one, or if the user passes undefined in its place

function buildsName(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

let result1 = buildsName("Bob"); // works correctly now, returns "Bob Smith"
let result2 = buildsName("Bob", undefined); // still works, also returns "Bob Smith"

//Default-initialized parameters that come after all required parameters are treated as optional, and just like optional parameters, can be omitted when calling their respective function.

// Unlike plain optional parameters, default-initialized parameters don’t need to occur after required parameters.

//Rest Parameters
function buildNames(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

// employeeName will be "Joseph Samuel Lucas MacKinzie"
let employeeName = buildNames("Joseph", "Samuel", "Lucas", "MacKinzie");

//this
interface Card {
  suit: string;
  card: number;
}

interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // NOTE: The function now explicitly specifies that its callee must be of type Deck
  createCardPicker: function (this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);

//this parameters in callbacks
interface Events {
  message: string;
}
interface UIElement {
  addClickListener(onclick: (this: void, e: Events) => void): void;
}

class Handler {
  info: string;
  onClickBad(this: Handler, e: Events) {
    // oops, used `this` here. using this callback would crash at runtime
    this.info = e.message;
  }
  onClickGood(this: void, e: Events) {
    // can't use `this` here because it's of type void!
    console.log("clicked!");
  }
}

let handler = new Handler();
let uiElement: UIElement;
// uiElement.addClickListener(handler.onClickBad); // error!
uiElement.addClickListener(handler.onClickGood); //fixed

//Overloads
//supply multiple function types for the same function as a list of overloads. This list is what the compiler will use to resolve function calls.

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x: any): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  // Otherwise just let them pick the card
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
  { suit: "hearts", card: 4 },
];

let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

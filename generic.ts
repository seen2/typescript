function identity<T>(arg: T): T {
  return arg;
}
//1
let output = identity<string>("myString");
//2
output = identity("myString");
// Working with Generic Type Variables

/*
function loggingIdentity<T>(arg: T): T {
  // console.log(arg.length);
// Property 'length' does not exist on type 'T'.
  return arg;
}

*/
function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  // Array has a .length, so no more error
  return arg;
}

// Generic Types

function id<T>(arg: T): T {
  return arg;
}
//<T>(arg:T)=>T// is a type
//1st way
let myId: <T>(arg: T) => T = id;
//2nd way
let my: <U>(arg: U) => U = id;
//3d way
let myIdentity: { <T>(arg: T): T } = identity;
//4th way
interface GenericIdentityFn {
  <T>(arg: T): T;
}
let myIdentity2: GenericIdentityFn = identity;

//generic parameter to be a parameter of the whole interface
interface GenericIdentityFunc<T> {
  (arg: T): T;
}

let myIdentity3: GenericIdentityFunc<number> = identity;

//Generic Classes
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

//Generic Constraints

/*
==>problem
function loggingIdentity<T>(arg: T): T {
  console.log(arg.length);
Property 'length' does not exist on type 'T'.
  return arg;
}
*/

//solution

interface Lengthwise {
  length: number;
}

function logginIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

//Using Type Parameters in Generic Constraints (idk)
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let b = { a: 1, b: 2, c: 3, d: 4 };
getProperty(b, "a");

//Using Class Types in Generics

function create<T>(c: { new (): T }): T {
  return new c();
}

class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animall {
  numLegs: number;
}

class Bee extends Animall {
  keeper: BeeKeeper;
}

class Lion extends Animall {
  keeper: ZooKeeper;
}

function createInstance<A extends Animall>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;

function identity(arg) {
    return arg;
}
//1
let output = identity("myString");
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
function loggingIdentity(arg) {
    console.log(arg.length);
    // Array has a .length, so no more error
    return arg;
}
// Generic Types
function id(arg) {
    return arg;
}
//<T>(arg:T)=>T// is a type
//1st way
let myId = id;
//2nd way
let my = id;
//3d way
let myIdentity = identity;
let myIdentity2 = identity;
let myIdentity3 = identity;
//Generic Classes
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
function logginIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
//Using Type Parameters in Generic Constraints (idk)
function getProperty(obj, key) {
    return obj[key];
}
let b = { a: 1, b: 2, c: 3, d: 4 };
getProperty(b, "a");
//Using Class Types in Generics
function create(c) {
    return new c();
}
class BeeKeeper {
}
class ZooKeeper {
}
class Animall {
}
class Bee extends Animall {
}
class Lion extends Animall {
}
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
//# sourceMappingURL=generic.js.map
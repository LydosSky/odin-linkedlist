import assert from "assert";
import LinkedList from "./linkedList.js";

const list = new LinkedList();

//------------- Assertions -----------------
assert.equal(list.size(), 0);

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("squirrel");

assert.equal(list.size(), 7);

assert.equal(list.head().value, "squirrel");
assert.equal(list.tail().value, "turtle");
assert.equal(list.at(0).value, "squirrel");
assert.equal(list.at(2).value, "cat");
assert.equal(list.at(6).value, "turtle");
assert.equal(list.at(7), null);
list.pop();
assert.equal(list.size(), 6);

assert.equal(list.contains("snake"), true);
assert.equal(list.contains(1), false);
assert.equal(list.find("cat"), 2);
assert.equal(list.find("snake"), 5);
assert.equal(list.find("squirrel"), 0);

list.insertAt("eagle", 3);
list.removeAt(5);
console.log(list.toString());

console.log("=================");
console.log("=All Test Passed=");
console.log("=================");

// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
    console.log (cats.push("Ralph"));
}
function destructivelyPrependCat() {
    console.log (cats.unshift("Bob"));
}
function destructivelyRemoveLastCat() {
    console.log (cats.pop());
}
function destructivelyRemoveFirstCat() {
    console.log (cats.shift());
}
function appendCat() {
    console.log (cats[0] = "Arnold");
}
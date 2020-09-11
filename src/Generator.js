console.log("Generator function Trong Generator function");

function* printName() {
  yield "Redux-saga";
}
function* hello() {
  yield "xin Chào";
  yield* printName();
  yield "Kết thúc";
}
let interator = hello();
console.log("result 1 : ", interator.next());
console.log("result 2 : ", interator.next());
console.log("result 3 : ", interator.next());

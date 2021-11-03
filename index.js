const spy = word => word;

function receivesAFunction() {
   return spy("hello");
}

// function returnsANamedFunction() {
//     console.log("Name");
// }

// function returnsAnAnonymousFunction() {
//     console.log("IDK");
// }
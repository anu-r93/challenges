/* Create a file named logType.js.
Declare a variable named data.
Write a switch statement that takes the typeof data and logs a different string depending on the type/value of data.
The string it logs should be one of the following:

"undefined!"
"null!"
"number!"
"not a number!"
"string!"
"boolean!"
"bigint!"
"function!"
"object!"
"array!"
"I have no idea!"
💡 you will need to google for object and array.*/

let data = { firstname: "Anushka" };

switch (typeof data) {
  case "undefined":
    console.log("undefined!");
    break;
  case "number":
    if (isNaN(data)) {
      console.log("not a number!");
    } else {
      console.log("number!");
    }
    break;
  case "string":
    console.log("string!");
    break;
  case "boolean":
    console.log("boolean!");
    break;
  case "bigint":
    console.log("bigint!");
    break;
  case "function":
    console.log("function!");
    break;
  case "object":
    if (data === null) {
      console.log("null!");
    } else if (Array.isArray(data)) {
      console.log("array!");
    } else {
      console.log("object!");
    }
    break;
  default:
    console.log("I have no idea!");
}

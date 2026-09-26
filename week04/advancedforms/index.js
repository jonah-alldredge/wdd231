// EXAMPLE:  https://example.com/?name=John&age=30
const params = new URLSearchParams(window.location.search);
const name = params.get('name'); // 'John'
const age = params.get('age');  // '30'
const queryString = params.toString(); // 'age=31';


if (params.has('name')) {
    console.log("name parameter exists!");
}

params.set('age', 31); // Update age to 31
params.delete('name'); // Remove name parameter


// Question No 1
// answer

let futureStudentNames = [];
console.log(futureStudentNames);

// Question No 2
// answer

let futureStudentName = new Array();
console.log(futureStudentName);

// Question No 3
// answer

let stringsArray = ["apple", "banana", "orange", "grape"];
console.log(stringsArray);

// Question No 4
// answer

let numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray);

// Question No 5
// answer

let booleanArray = [true, false, true, false];
console.log(booleanArray);

// Question No 6
// answer

let mixedArray = ["apple", 42, true, "banana", false, 7];
console.log(mixedArray);

// Question No 7
// answer

let mobileNetworksInPakistan = ["Mobilink", "Telenor", "Zong", "Ufone", "Warid"];
console.log(mobileNetworksInPakistan);

// Question No 8
// answer

let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h2>Educational Qualifications in Pakistan:</h2>");
document.write("<ul>");

for (let i = 0; i < educationQualifications.length; i++) {
    document.write("<li>" + educationQualifications[i] + "</li>");
}

document.write("</ul>");

// Question No 9
// answer

// Declare and initialize an empty array
let topMovies2015 = [];

// Add movies to the array
topMovies2015.push("Avengers: Age of Ultron");
topMovies2015.push("Spectre");
topMovies2015.push("Jurassic World");
topMovies2015.push("Inside Out");

// Display the elements and length of the array in the browser
document.write("<h2>Top Movies of 2015:</h2>");
document.write("<ul>");

// Loop through the array to display each movie
for (let i = 0; i < topMovies2015.length; i++) {
    document.write("<li>" + topMovies2015[i] + "</li>");
}

document.write("</ul>");

// Display the length of the array
document.write("<p>Lenght of the Array: " + topMovies2015.length + "</p>");

// Question No 10
// answer

// Declare and initialize an array with favorite cars
let favoriteCars = ["Audi", "Volvo", "Ford", "Lamborghini"];
console.log(favoriteCars);
// Display the first index of the array
document.write("<p>First index of the array: " + 0 + "</p>");

// Display the car at the first index of the array
document.write("<p>Car at first index of the array: " + favoriteCars[0] + "</p>");

// Display the last index of the array
document.write("<p>Last index of the array: " + (favoriteCars.length - 1) + "</p>");

// Display the car at the last index of the array
document.write("<p>Car at last index of the array: " + favoriteCars[favoriteCars.length - 1] + "</p>");

// Question No 11
// answer

// Array to store student names
let studentNames = ["Michael", "John", "Tony"];

// Array to store scores of students
let studentScores = [320, 230, 480];

// Display scores and percentages
document.write("<h2>Student Scores and Percentages:</h2>");
document.write("<ul>");

for (let i = 0; i < studentNames.length; i++) {
    let percentage = (studentScores[i] / 500) * 100;
    document.write("<li>" + studentNames[i] + " scored " + studentScores[i] + " which is " + percentage.toFixed(2) + "%</li>");
}

document.write("</ul>");

// Question No.12
// Answer

// Initialize an array with color names
let colors = ["red", "green", "blue"];

// Display the original array elements
document.write("<h2>Original Array:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// a. Add a color to the beginning of the array
let colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddAtBeginning);

// Display the updated array after adding color to the beginning
document.write("<h2>Array after adding color to the beginning:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// b. Add a color to the end of the array
let colorToAddAtEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddAtEnd);

// Display the updated array after adding color to the end
document.write("<h2>Array after adding color to the end:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// c. Add two more colors to the beginning of the array
colors.unshift("yellow", "orange");

// Display the updated array after adding two colors to the beginning
document.write("<h2>Array after adding two colors to the beginning:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// d. Delete the first color in the array
colors.shift();

// Display the updated array after deleting the first color
document.write("<h2>Array after deleting the first color:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// e. Delete the last color in the array
colors.pop();

// Display the updated array after deleting the last color
document.write("<h2>Array after deleting the last color:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// f. Add a color at a user-defined index
let indexToAddColor = parseInt(prompt("Enter the index where you want to add a color:"));
let colorToAdd = prompt("Enter the color you want to add:");
colors.splice(indexToAddColor, 0, colorToAdd);

// Display the updated array after adding color at the specified index
document.write("<h2>Array after adding color at a user-defined index:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// g. Delete color(s) from a user-defined index
let indexToDeleteColor = parseInt(prompt("Enter the index from where you want to delete color(s):"));
let numberOfColorsToDelete = parseInt(prompt("Enter the number of colors you want to delete:"));
colors.splice(indexToDeleteColor, numberOfColorsToDelete);

// Display the updated array after deleting color(s) from the specified index
document.write("<h2>Array after deleting color(s) from a user-defined index:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");


// Question No 13
// Answer

// Array to store student scores
let studentScore = [320, 230, 480, 120];

// Display original array
document.write("<h2>Scores of Students:</h2>");
document.write("<p>" + studentScore.join(", ") + "</p>");

// Sort the array in ascending order
studentScore.sort(function(a, b) {
    return a - b;
});

// Display sorted array
document.write("<h2>Ordered Scores of Students:</h2>");
document.write("<p>" + studentScore.join(", ") + "</p>");

// Question No 14
// Answer

var fruits = ["strawberry", "apple", "orange", "banana"];

// Display original array
document.write("<h2>Fruits list:</h2>");
document.write("<p>" + fruits.join(", ") + "</p>");

// Sort the array alphabetically
fruits.sort();

// Display sorted array
document.write("<h2>Ordered fruits list:</h2>");
document.write("<p>" + fruits.join(", ") + "</p>");

// Question No 15
//Answer

// Initialize an array with city names
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<h2>Cities List:</h2>");
document.write("<p>" + cities.join(", ") + "</p>");


// Initialize an empty array to store selected cities
let selectedCities = [];

// Copy 2 array elements from cities array to selectedCities array
selectedCities = cities.slice(2, 4);

// Display the selected cities array
document.write("<h2>Selected Cities:</h2>");
document.write("<p>" + selectedCities.join(", ") + "</p>");

// Question No 16
//Answer

var arr = ["This", "is", "my", "cat"];
document.write("<p>" + arr.join(", ")  + "</p>");
// Create a single string using the join method
var singleString = arr.join(" ");

// Display the single string
document.write("<p>" + singleString + "</p>");

// Question No 17
//Answer

// Initialize an empty array for FIFO storage
let fifoArray = [];

// Store values one by one
fifoArray.push("keyboard");
fifoArray.push("mouse");
fifoArray.push("printer");
fifoArray.push("monitor");
document.write("<h2>Devices:</h2>");
document.write("<p>" + fifoArray.join(", ") + "</p>");

// Access values in FIFO order
let firstValue = fifoArray.shift(); // Removes and returns the first value
let secondValue = fifoArray.shift(); // Removes and returns the second value
let thirdValue = fifoArray.shift(); // Removes and returns the third value
let forthValue = fifoArray.shift(); // Removes and returns the third value

// Display the values in the order they were stored
document.write("<p>Out: " + firstValue + "</p>");
document.write("<p>Out: " + secondValue + "</p>");
document.write("<p>Out: " + thirdValue + "</p>");
document.write("<p>Out: " + forthValue + "</p>");

// Question No 18
//Answer

// Initialize an empty array for LIFO storage
let lifoArray = [];

// Store values one by one
lifoArray.push("keyboard");
lifoArray.push("mouse");
lifoArray.push("printer");
lifoArray.push("monitor");
document.write("<h2>Devices:</h2>");
document.write("<p>" + lifoArray.join(", ") + "</p>");

// Access values in LIFO order
let firstValue1 = lifoArray.shift(); // Removes and returns the first value
let secondValue1 = lifoArray.shift(); // Removes and returns the second value
let thirdValue1 = lifoArray.shift(); // Removes and returns the third value
let forthValue1 = lifoArray.shift(); // Removes and returns the third value

// Display the values in the order they were stored
document.write("<p>Out: " + forthValue1 + "</p>");
document.write("<p>Out: " + thirdValue1 + "</p>");
document.write("<p>Out: " + secondValue1 + "</p>");
document.write("<p>Out: " + firstValue1 + "</p>");

// Question No 19
// Answer

// Array of phone manufacturers
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Start building the select element
let selectHTML = "<select>";

// Iterate over the array to create options for the select element
for (let i = 0; i < phoneManufacturers.length; i++) {
    selectHTML += "<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>";
}

// Close the select element
selectHTML += "</select>";

// Display the select menu in the browser
document.write("<h2>Select Phone Manufacturer:</h2>");
document.write(selectHTML);


// Question No 20
// Answer

// Declare and initialize an empty multidimensional array
let multiArray = [];

// Example: Adding empty arrays as elements to create a 2D array
multiArray.push([]);
multiArray.push([]);
multiArray.push([]);
console.log(multiArray);

// Now 'multiArray' is a 2D array with three empty arrays as its elements


// Question No 21
// Answer

// Declare and initialize a multidimensional array representing the matrix
// let matrix = [
//     [0,1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// // Display the matrix in the console
// console.log(matrix);
// document.write("<p>" +matrix + "</p>");


// Declare and initialize a multidimensional array representing a matrix
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

// Generate HTML table markup for the matrix
let tableHTML = "<table border='1'>";

// Loop through the rows of the matrix
for (let i = 0; i < matrix.length; i++) {
    tableHTML += "<tr>";
    
    // Loop through the columns of each row
    for (let j = 0; j < matrix[i].length; j++) {
        tableHTML += "<td>" + matrix[i][j] + "</td>";
    }
    
    tableHTML += "</tr>";
}

tableHTML += "</table>";

// Display the matrix using inner HTML
document.getElementById("matrix-container").innerHTML = tableHTML;


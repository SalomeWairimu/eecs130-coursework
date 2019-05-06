const names = [
    "Jane", "Brenda", "Wanda", "Maria", "Jasper",
    "John", "Malik", "Arjun", "Larry", "Curly", "Moe"
];


// use a for / of loop to loop through each element
// of the names array and output a message to the screen:
// document.write("Welcome, " + names[0] + "! Make yourself comfortable.<br>");
// document.write("Welcome, " + names[1] + "! Make yourself comfortable.<br>");
// document.write("Welcome, " + names[2] + "! Make yourself comfortable.<br>");
for(var i = 0; i<names.length; i++)
{
    document.write("Welcome, " + names[i] + "! Make yourself comfortable.<br>");
}
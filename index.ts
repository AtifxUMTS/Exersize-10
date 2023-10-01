// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

let personName:  String = "Atif Ali Shah";

let lowercaseName: String = personName.toLowerCase();
let uppercaseName: String = personName.toUpperCase();

let words: String[] = personName.split(" ");

let titlecaseName: String = "Atif Ali"

for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words
};

console.log(lowercaseName)
console.log(uppercaseName)
console.log(titlecaseName)


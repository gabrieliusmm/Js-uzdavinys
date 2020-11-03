let name;
let subjects = [];
let marks = [];

name = prompt("Mokinio vardas: ")
for (let i = 0; i < 3; i++)
{
	subjects[i] = prompt("Mokomasis Dalykas: ")
	marks[i] = prompt("Pažymys: ")
}
console.log("Mokinys: " + name)
console.log("Dalykai:")
for (let i = 0; i < 3; i++)
{
	if (marks[i] == 10)
	{
		console.log(subjects[i] + ": " + marks[i] + " (puikiai)");
	}
	else if (marks[i] == 9) {
		console.log(subjects[i] + ": " + marks[i] + " (labai gerai)");
	}
	else if (marks[i] == 8) {
		console.log(subjects[i] + ": " + marks[i] + " (gerai)");
	}
	else if (marks[i] == 7) {
		console.log(subjects[i] + ": " + marks[i] + " (vidutiniškai)");
	}
	else if (marks[i] == 6) {
		console.log(subjects[i] + ": " + marks[i] + " (patenkinamai)");
	}
	else if (marks[i] == 5) {
		console.log(subjects[i] + ": " + marks[i] + " (silpnai)");
	}
	else if (marks[i] <= 4) {
		console.log(subjects[i] + ": " + marks[i] + " (nepatenkinamai)");
	}
}
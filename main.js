// Bai 1
let a = [
	[1, 2, 1, 24],
	[8, 11, 9, 4],
	[7, 0, 7, 27],
	[7, 4, 28, 14],
	[3, 10, 26, 7],
];
for (let i = 0; i < a.length; i++) {
	console.log("row " + i);
	for (let j = 0; j < a[i].length; j++) {
		console.log(a[i][j]);
	}
}
// Bai 2
let b = ["c", "s", "c", 2, 6, 1, "-"];

for (let i = 0; i < b.length / 2; i++) {
	let temp = b[i];
	b[i] = b[b.length - i - 1];
	b[b.length - i - 1] = temp;
}
console.log(b.join("")); //162csc

// Bai 3
console.log(b); // ['-', 1, 6, 2, 'c', 's', 'c']
console.log(b.length); // 7
let countNum = 0;
let countChar = "";
let replace = "_";
for (let i = 0; i < b.length; i++) {
	if (typeof b[i] === "number") {
		countNum++;
	}
	if (typeof b[i] === "string") {
		countChar += b[i];
	}
	if (b[i] == "-") {
		b[i] = replace;
	}
}
console.log(countNum); // 3
// Bai 4
console.log(countChar.length); // 4
// Bai 6
console.log(b); // ['_', 1, 6, 2, 'c', 's', 'c']
// Bai 5
// let arr1 = prompt("Enter first string:").split("");
// let arr2 = prompt("Enter second string:").split("");

// let same = true;

// if (arr1.length != arr2.length) {
// 	same = false;
// } else {
// 	for (let i = 0; i < arr1.length; i++) {
// 		if (arr1[i] != arr2[i]) same = false;
// 		break;
// 	}
// }

// if (same) {
// 	alert("Two strings are the same");
// } else {
// 	alert("Two strings are different");
// }

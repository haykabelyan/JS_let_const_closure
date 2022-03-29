

var a = 99;
function foo() {
	console.log(a++);
}
foo(); // 99
foo(); // 100
a = 0;
foo(); // 0



var arr = [];
for(var i=0; i<5; i++){
	arr[i] = function(){
		console.log(i++);
	}
}
console.log(i);	// 5
arr[0](); // 5
arr[0](); // 6
arr[4](); // 7
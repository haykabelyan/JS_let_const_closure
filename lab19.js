



var arr = [];
for(let i=0; i<5; i++){
	arr[i] = function(){
		console.log(i++);
	}
}

arr[0](); // 0
arr[0](); // 1
arr[0](); // 2
arr[1](); // 1
arr[1](); // 2
arr[1](); // 3
arr[1](); // 4
arr[0](); // 3

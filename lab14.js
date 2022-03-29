// Javascript closure

function foo(a) {
	return function(){
		console.log(a);
	}
}

var foo2 = foo(5);

foo2();

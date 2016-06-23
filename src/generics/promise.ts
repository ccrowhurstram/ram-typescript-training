// make sure not to pollute global scope
export {};

/*
let futureStr = Q.when("Hello");
futureStr.then(str => {
	console.log(str.length);
});

let futureNum = Q.when(10);
futureNum
	.then(num => {
		if (num > 10) {
			console.log("_");
		}
		return num;
	})
	.then(num => num.toString())
	.then(str => Array.from(str))
	.then(strArray => {
		console.log(strArray[0]);
	});

let futureFuture = Q.when("World");
futureFuture
	.then(str => new Promise(str.length))
	.then(num => {
		if (num > 10) {
			console.log("_");
		}
	});
*/
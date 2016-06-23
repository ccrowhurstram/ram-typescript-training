// make sure not to pollute global scope
export {};

class Q {
	static when<T>(val: T) {
		return new Promise(val);
	}
}

class Promise<T> {
	constructor(private val: T) { }
	then<R>(success: (val: T) => R | Promise<R>): Promise<R> {
		const result = success(this.val);
		if (this.isPromiseLike(result)) {
			return result;
		}
		else {
			return new Promise<R>(result);
		}
	}
	private isPromiseLike<R>(val: any): val is Promise<R> {
		return val && Reflect.has(val, "then");
	}
}


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
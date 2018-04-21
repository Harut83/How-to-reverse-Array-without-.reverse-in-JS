const foo = function reverse (arr){
	var lentgh = arr.lentgh-1;
	var newArr = [];
	for (var i = 0; i<= lentgh;i++){
		newArr[i] = arr[lentgh-i]
	}
	console.log(newArr);
}
var arr1 = [10,5, false,"John"]
foo(arr1);
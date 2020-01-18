//array definition
var array1 = [];
var a = 1;
while (a<=123){
	array1.push(a);
	a++;
};

// func. binary search
function binary (item, arr){

	var start = arr[0];
	var last = arr[arr.length-1];

	var mid = Math.floor((last - start)/2);
	console.log("first mideum element find - " +mid);	

	while (item!=mid){
		if (item < mid){
			last = mid;
			mid = Math.floor(start+ (last - start)/2);
			console.log("new last = " + last);
			console.log(mid);
		}
		else {
			start = mid;
			mid = Math.floor(start + (last - start)/2);
			console.log("new start = " + start);
			console.log(mid);
		}
	}
	
	console.log("otvet " +mid);
}

//test your search
binary(122,array1);







/////
while (arr[n] <= arr[arr.length-1]){
		console.log(n);
		if (arr[n]>big){
			big = arr[n];
			indexbig = n;
			n=0;
			console.log("new big " + big);
		}
		else {n++}
	}


//static array definition 
//var array1 = [35,39,66,88,25,91,77,28,28,100];

//random array
var array1 = [];
for (i=0; i<10; i++){
	array1.push(Math.round(Math.random()*100));
	console.log(array1);
}


//func. sort
function sort(arr){
	
	var indexbig = 0;
	var newarray = [];

	while (arr.length>0){
	var big = 0;
		//find max element
		for (n = 0; n < arr.length; n++){
			console.log("- " + n);
			if (arr[n]>big){
				big = arr[n];
				indexbig = n;
				console.log(">>> (new biggest - " + big + ")___(index of big - " + indexbig + ") <<<");
			}					
		}

		// xuyarim v new massiv
		newarray.push(big);
		arr.splice(indexbig,1);
		console.log("\n old array without MAX element " + "[ "+ arr +" ]");
		console.log("<------------> elements left - " + arr.length + " <------------>" + "\n")
	}

	console.log("<<< FINAL SORTED ARRAY: [ " + newarray + " ] >>>");
	return newarray;
}

sort(array1);

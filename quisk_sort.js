var x = 0;
var array = [35,39,66,88,25,91,77,28,28,100];

function qsort (arr, x){

	if (arr.length<2){
		return (arr);
	}
	else{
		
		for (x in arr){
			if (arr[0] >= arr[x]){
				var arrl = [];
				arrl.push(arr[x]);
			}
			else{
				var arrb = [];
				arrb.push(arr[x]);
			}
		}
		return (qsort(arrl)+arr[0]+qsort(arrb))

	}
}

console.log(qsort(array, x))

//change for the commit
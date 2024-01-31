function merge(array, array1, array2) {
	array = []
	let i = 0;
	let j = 0;
	while (i < array1.length && j < array2.length) {
		if (array1[i] < array2[j]) {
			array.push(array1[i])
			i++;
		}
		else {
			array.push(array2[j])
			j++;
		}
	}
	while (i < array1.length) {
		array.push(array1[i])
		i++;
	}
	while (j < array2.length) {
		array.push(array2[j])
		j++;
	}

	return array;
}


function merge_sort(array) {
	if (array.length > 1) {
		let mid = Math.floor(array.length / 2)
		let left = array.slice(0, mid)
		let right = array.slice(mid, array.length)
		merge_sort(left);
		merge_sort(right);
		merge(array, left, right);
	}
	return array;
}

// [1,4,2,45,123,3]
// 

console.log(merge_sort([1, 4, 2, 45, 123, 3]));



function sort_partition(array, start_index, end_index) {
	let pivot_index = Math.floor((start_index + end_index) / 2);
	let pivot = array[pivot_index];
	array[pivot_index] = array[end_index];
	array[end_index] = pivot;
	let i = start_index;
	let j = end_index - 1;
	while (i < j) {
		while (array[i] <= pivot) {
			i++;
		}
		while (array[j] > pivot) {
			j--;
		}
		if (i < j) {
			let temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}
	array[end_index] = array[j + 1];
	array[j + 1] = pivot;
	return j + 1;

}


function quick_sort(array, low, high) {

	if (low < high) {
		let pivot_index = sort_partition(array, low, high);
		quick_sort(array, pivot_index + 1, high);
		quick_sort(array, low, pivot_index - 1);
	}
}


array = [0, 5, 3];
array = [2, 6, 3, 5, 3, 8, 7, 1, 0]
quick_sort(array, 0, array.length - 1);
console.log(array)

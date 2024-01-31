let numbers = [1, 5, 123, 4];

// move through the list of numbers, start at 1
// assume the first element is sorted
// check if there are any numbers previous to the number you are in which is lesser
// if so insert the current element and move all the other numbers to accomodate the inserted element
// do this for the length of the array and it will be sorted

for (let i = 1; i < numbers.length; i++) {
	let insert_index = i;
	for (let j = i - 1; j >= 0; j--) {
		if (numbers[j] < numbers[i]) {
			insert_index = j + 1;
			break;
		}
	}
	const temp = numbers[i];
	for (let j = i; j > insert_index; j--) {
		numbers[j] = numbers[j - 1];
	}
	numbers[insert_index] = temp;

}

// [1,5,123,4]
// i = 2, insert_index = 2, j = 1 .. 0
// i = 3, insert_index = 3, j = 2 .. 0, insert_index = 1; temp = 4, j = 3..1, [1,5,123,123], [1,5,5,123], [1,4,5,123]


console.log(numbers);

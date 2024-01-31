let numbers = [1, 23, 4, 2];


// select the min number and swap it with i


for (let i = 0; i < numbers.length; i++) {
	let min_elem_index = i;
	for (j = i + 1; j < numbers.length; j++) {
		if (numbers[min_elem_index] > numbers[j]) {
			min_elem_index = j;
		}
	}
	let temp = numbers[i];
	numbers[i] = numbers[min_elem_index];
	numbers[min_elem_index] = temp;
}


console.log(numbers);

// 1. Write a js program to read and print elements of array.
{
  var array = ["Hadi", "Hasnain", "Hassan", "Usman", "Ali"];
  for (i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// 2. Write a js program to print all negative elements in an array.
{
  var array = [1, 5, -5, 4, -6, -9, -4, 8, 3, 1];
  for (i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      console.log(array[i]);
    }
  }
}

// 3. Write a js program to find sum of all array elements.
{
  var array = [100, 250, 300, 150, 354, 124];
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  console.log(sum);
}

// 4. Write a js program to find maximum and minimum element in an array.
{
  {
    var array = [100, 250, 300, 150, 354, 124];
    console.log(Math.min(...array));
    console.log(Math.max(...array));
  }
}

// Write a js program to find second largest element in an array.
{
  var array = [100, 250, 300, 150, 354, 124];
  var sorted_arr = array.sort();
  console.log(array[array.length - 2]);
}

// 6. Write a js program to count total number of even and odd elements in an array.
{
  var array = [100, 250, 300, 150, 354, 124, 355];
  var even_no = (odd_no = 0);
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      even_no++;
    } else {
      odd_no++;
    }
  }
  console.log(
    `Total even Numbers are ${even_no} and odd numbers are ${odd_no}`
  );
}

// 7. Write a js program to count total number of negative elements in an array.
{
  var array = [100, 250, 300, 150, 354, 124, 355];
  var neg_no = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      neg_no++;
    }
  }
  console.log(`Total negative Numbers are ${neg_no}`);
}

// 8. Write a js program to copy all elements from an array to another array.
{
  var array = [100, 250, 300, 150, 354, 124, 355];
  var new_array = [];
  for (i = 0; i < array.length; i++) {
    new_array[i] = array[i];
  }
  console.log(new_array);
  console.log(array);
}

// 9. Write a js program to insert an element in an array.
{
  var array = [100, 250, 300, 150, 354, 124, 355];
  array.push(87);
  console.log(array);
}

// 10. Write a js program to delete an element from an array at specified position.
{
  var array = [100, 250, 300, 150, 354, 124, 355];
  array.splice(2, 1);
  console.log(array);
}

// 11. Write a js program to count frequency of each element in an array.
{
  var array = [100, 200, 300, 100, 300, 200, 100, 700, 350, 200, 100, 200];
  array = array.sort();
  var ferq_50 = (ferq_100 = ferq_200 = ferq_300 = ferq_350 = 1);
  for (i = 0; i < array.length; i++) {
    if (array[i] == 100) {
      if (array[i] == array[i + 1]) {
        ferq_100++;
      }
    }
    if (array[i] == 200) {
      if (array[i] == array[i + 1]) {
        ferq_200++;
      }
    }
    if (array[i] == 300) {
      if (array[i] == array[i + 1]) {
        ferq_300++;
      }
    }
    if (array[i] == 350) {
      if (array[i] == array[i + 1]) {
        ferq_350++;
      }
    }
  }
  console.log("Array is =", array);
  console.log("Frequency of 100 is", ferq_100);
  console.log("Frequency of 200 is", ferq_200);
  console.log("Frequency of 300 is", ferq_300);
  console.log("Frequency of 350 is", ferq_350);
}

// 12. Write a js program to print all unique elements in the array.
{
  var array = [100, 250, 100, 200, 250, 150, 354, 124];
  var arr = [...new Set(array)];
  console.log(arr);
}


























//13. Write a js program to count total number of duplicate elements in an array.

var array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4,5,5];

var duplicateCount = array.length - [...new Set(array)].length;

console.log(duplicateCount); 

//14. Write a js program to delete all duplicate elements from an array.

var array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4,];
var newUniquearray =[...new Set(array)];
console.log(newUniquearray);

//15. Write a js program to merge two array to third array.

var array1 =[1,2,3];
var array2 =[4,5,6];
var mergeArray =[...array1,...array2];
console.log(mergeArray);


//16. Write a js program to find reverse of an array.

var array = [1, 2, 3, 4, 5];

var reversedArray = array.reverse();

console.log(reversedArray);


//17. Write a js program to put even and odd elements of array in two separate array.

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evenArray = [];
var oddArray = [];

for(var element of array) {
  if(element % 2 === 0) {
    evenArray.push(element);
  } else {
    oddArray.push(element);
  }
}

console.log(evenArray);
console.log(oddArray);

//18. Write a js program to search an element in an array.
  
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function searchElement(array, searchElement) {
  var index = array.indexOf(searchElement);
  if (index !== -1) {
    return `Element found at index ${index}`;
  } else {
    return `Element not found in array`;
  }
}

console.log(searchElement(array, 5));  
console.log(searchElement(array, 15)); 


//19. Write a js program to sort array elements in ascending or descending order.

var myarray = [5, 2, 8, 1, 9, 3, 7, 4, 6];


//ascending order

myarray.sort((a, b) => a - b);
console.log(myarray);

//descending order

myarray.sort((a, b) => b - a);
console.log(myarray);

//20. Write a js program to sort even and odd elements of array separately.

var array = [5, 2, 8, 1, 9, 3, 7, 4, 6];

var evenArray = [];
var oddArray = [];

for(var element of array) {
  if(element % 2 === 0) {
    evenArray.push(element);
  } else {
    oddArray.push(element);
  }
}

evenArray.sort((a, b) => a - b);
oddArray.sort((a, b) => a - b);

console.log(evenArray);  
console.log(oddArray); 


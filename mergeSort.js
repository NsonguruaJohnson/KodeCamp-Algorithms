function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let results = [];
    while(i < arr1.length && j < arr2.length) {

     if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;  
     } else {
      results.push(arr2[j])
      j++
     }
    }

    while(i < arr1.length) {
     results.push(arr1[i]);
     i++;
    }

    while(j < arr2.length){
     results.push(arr2[j]);
     j++;
    }

    console.log(results);
    return results
}

// let arr = [243, 45, 55, 63, 5, 6, 235, 547];
// let arr = [1, 4, 2, 5, -2, 3];
let arr = [52, 37, 63, 14, 17, 8, 6, 25];

// calling the mergeSort Function
mergeSort(arr);

/**
 * The merge sort algorithm has the time complexity of O(logN), 
 * meaning that the time required to execute N number of elements will rise in logarithmic proportion.
 *  If sorting an array of 10 elements requires 1ms, sorting an array of 100 elements will take 2ms.
 * 
 * Merge sort is much more efficient in time complexity than the insertion sort, 
 * but merge sort also consumes more space because the sorting is not in-place and the recursive call will be threaded. 
 * The merge sort will take O(N) space to perform the sorting.
 */
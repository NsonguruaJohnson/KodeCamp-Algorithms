function bubbleSort(arr) {
	
    let i, j;
    let len = arr.length;
        
    let isSwapped = false;
        
    for(i = 0; i < len; i++){
        
        isSwapped = false;
        
        for(j = 0; j < len; j++){
            if(arr[j] > arr[j + 1]){
            let temp = arr[j]
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            isSwapped = true;
            }
        }
        
        // IF no two elements were swapped by inner loop, then break
        
        if(!isSwapped){
        break;
        }
    }
        
    // Print the array
    console.log(arr)
    }
    
    
// let arr = [243, 45, 55, 63, 5, 6, 235, 547,];
// let arr = [1, 4, 2, 5, -2, 3];
let arr = [52, 37, 63, 14, 17, 8, 6, 25];
    
// calling the bubbleSort Function
bubbleSort(arr)

/**
 * The worst case scenario: quadratic O(n²): this is the case when every element of the input array is exactly opposite of the sorted order.

    Best case scenario: linear O(n): when the input array is already sorted. Even in this case, we have to iterate through each set of numbers once.

    The space complexity of Bubble Sort is O(1).
 */
    
// Merge Sort

/**
 * The merge sort algorithm is a divide and conquer algorithm that works as follows:
 * 1. Divide the array into two halves
 * 2. Recursively sort the two halves
 * 3. Merge the two halves
 * 
 * Time complexity: O(nlogn)
 * Space complexity: O(n)
 */

function mergeSort(arr, low, high) {
    if (low >= high) {
        return;
    }
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
}

function merge(arr, low, mid, high) {
    let temp = [];
    let i = low, j = mid + 1;
    while (i <= mid && j <= high) {
        if (arr[i] < arr[j]) {
            temp.push(arr[i]);
            i++;
        } else {
            temp.push(arr[j]);
            j++;
        }
    }
    while (i <= mid) {
        temp.push(arr[i]);
        i++;
    }
    while (j <= high) {
        temp.push(arr[j]);
        j++;
    }
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}


console.log(mergeSort([5, 2, 3, 1, 4], 0, 4)); // [1, 2, 3, 4, 5]
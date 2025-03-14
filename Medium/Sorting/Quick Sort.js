// Quick Sort

/**
 * The quick sort algorithm is a divide and conquer algorithm that works as follows:
 * 1. Choose a pivot element
 * 2. Partition the array such that all elements less than the pivot are on the left and all elements greater than the pivot are on the right
 * 3. Recursively sort the two partitions
 *
 * Time complexity: O(nlogn)    
 * Space complexity: O(1)
 */

function quickSort(arr, low, high) {
    if (low > high) {
        return;
    }
    let partitionIndex = partition(arr, low, high);
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
    return arr;
}

function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low, j = high;
    while (i < j) {
        while (arr[i] <= pivot && i <= high) {
            i++;
        }
        while (arr[j] > pivot && j >= low) {
            j--;
        }
        if (i < j) {
            swap(arr, i, j);
        }
    }
    swap(arr, low, j);
    return j;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(quickSort([5, 2, 3, 1, 4], 0, 4)); // [1, 2, 3, 4, 5]
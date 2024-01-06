// Generating Data Sets
let smallDataSet = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
let mediumDataSet = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
let largeDataSet = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));

// Bubble Sorting Algorithm
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        // Reducing the array length since the largest element is bubbled to the end of the array
        n--;
    } while (swapped);

    return arr;
}

// Quick Sort Algorithm
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = arr.filter(x => x < pivot);
    let middle = arr.filter(x => x === pivot);
    let right = arr.filter(x => x > pivot);
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Optimized Quick Sort with Insertion Sort for small sub-arrays
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

function optimizedQuickSort(arr) {
    if (arr.length < 10) {
        return insertionSort(arr);
    }
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = arr.filter(x => x < pivot);
    let middle = arr.filter(x => x === pivot);
    let right = arr.filter(x => x > pivot);
    return [...optimizedQuickSort(left), ...middle, ...optimizedQuickSort(right)];
}

// Test Sorting with Bubble Sorting Algorithm
function testBubbleSorting(dataSet) {
    let startTime = performance.now();
    let sortedData = bubbleSort(dataSet);
    let endTime = performance.now();
    return (endTime - startTime).toFixed(2);
}

// Test Sorting with Original QuickSort Algorithm
function testSorting(dataSet) {
    let startTime = performance.now();
    let sortedData = quickSort(dataSet);
    let endTime = performance.now();
    return (endTime - startTime).toFixed(2);
}

// Test Sorting with Optimized QuickSort Algorithm
function testOptimizedSorting(dataSet) {
    let startTime = performance.now();
    let sortedData = optimizedQuickSort(dataSet);
    let endTime = performance.now();
    return (endTime - startTime).toFixed(2);

}

//Execution Times for Bubble Sorting
let executionTimeSmallBubble = testBubbleSorting(smallDataSet);
let executionTimeMediumBubble = testBubbleSorting(mediumDataSet);
let executionTimeLargeBubble = testBubbleSorting(largeDataSet);

// Execution Times for Original QuickSort
let executionTimeSmallQS = testSorting(smallDataSet);
let executionTimeMediumQS = testSorting(mediumDataSet);
let executionTimeLargeQS = testSorting(largeDataSet);

// Execution Times for Optimized QuickSort
let executionTimeSmallQSOpt = testOptimizedSorting(smallDataSet);
let executionTimeMediumQSOpt = testOptimizedSorting(mediumDataSet);
let executionTimeLargeQSOpt = testOptimizedSorting(largeDataSet);

console.log('Execution Times for Bubble Sorting: ' + executionTimeSmallBubble + ' - ' + executionTimeMediumBubble + ' - ' + executionTimeLargeBubble)
console.log('Execution Times for Original QuickSort: ' + executionTimeSmallQS + ' - ' + executionTimeMediumQS + ' - ' + executionTimeLargeQS)
console.log('Execution Times for Optimized QuickSort: ' + executionTimeSmallQSOpt + ' - ' + executionTimeMediumQSOpt + ' - ' + executionTimeLargeQSOpt)


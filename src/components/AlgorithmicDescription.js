import React from 'react';

function AlgorithmDescription({ algorithm }) {
    const getDescription = (algorithm) => {
      switch(algorithm) {
        case 'selectionSort':
          return "Selection Sort is a basic algorithm that works by repeatedly selecting the smallest unsorted element and moving it to the sorted portion of the list. It's simple and minimizes swaps, which is beneficial when memory writes are costly. However, with an O(n²) time complexity, it becomes inefficient on larger datasets or nearly sorted arrays, making it more suitable for small collections."
        case 'insertionSort':
          return "Insertion Sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages: Simple implementation, Efficient for (quite) small data sets, More efficient in practice than most other simple quadratic (i.e., O(n2)) algorithms such as selection sort or bubble sort"
        case 'bubbleSort':
          return "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted."
        case 'quickSort':
          return "QuickSort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively."
        case 'mergeSort':
          return "Merge Sort is an efficient, stable sorting algorith that makes use of the divide and conquer strategy. Conceptually the algorithm works as follows : 1) Divide the unsorted list into n sublists, each containing one element(a list of one element is considered sorted) 2) Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list."
        default:
          return ""
      }
    }

    const getTimeComplexity = (algorithm) => {
      switch(algorithm) {
        case 'selectionSort':
          return {
            best: "O(n²)",
            average: "O(n²)",
            worst: "O(n²)"
          }
        case 'insertionSort':
          return {
            best: "O(n)",
            average: "O(n²)",
            worst: "O(n²)"
          }
        case 'bubbleSort':
          return {
            best: "O(n)",
            average: "O(n²)",
            worst: "O(n²)"
          }
        case 'quickSort':
          return {
            best: "O(n log n)",
            average: "O(n log n)",
            worst: "O(n²)"
          }
        case 'mergeSort':
          return {
            best: "O(n log n)",
            average: "O(n log n)",
            worst: "O(n log n)"
          }
        default:
          return {}
      }
    }

    return (
        <div className="algorithm-description">
            <h1>{algorithm.charAt(0).toUpperCase() + algorithm.slice(1)}</h1>
            <p>{getDescription(algorithm)}</p>
            <div className="time-complexity">
                Time Complexity:
                <p>Best: {getTimeComplexity(algorithm).best}</p>
                <p>Average: {getTimeComplexity(algorithm).average}</p>
                <p>Worst: {getTimeComplexity(algorithm).worst}</p>
            </div>
        </div>
    );
}

export default AlgorithmDescription;

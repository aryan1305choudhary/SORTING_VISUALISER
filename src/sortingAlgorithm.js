
//Bubble sort implementation
export const bubbleSort = async (arr, visualizeComparison, visualizeSwap, visualizeArray, delay, animationSpeed) => {
    let n = arr.length;
    let arrCopy = [...arr];

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            visualizeComparison(j, j + 1);
            await delay(animationSpeed);

            if (arrCopy[j] > arrCopy[j + 1]) {
                visualizeSwap(j, j + 1);
                await delay(animationSpeed);

                let temp = arrCopy[j];
                arrCopy[j] = arrCopy[j + 1];
                arrCopy[j + 1] = temp;
                visualizeArray(arrCopy);
            }
        }
    }
}

//Selection sort implementation
export const selectionSort = async (arr, visualizeComparison, visualizeSwap, visualizeArray, delay, animationSpeed) => {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            visualizeComparison(j, minIndex);
            await delay(animationSpeed);

            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            visualizeSwap(i, minIndex);
            await delay(animationSpeed);

            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
            visualizeArray(arr);
        }
    }
}

//Insertion Sort Implementation
export const insertionSort = async (arr, visualizeComparison, visualizeSwap, visualizeArray, delay, animationSpeed) => {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            visualizeComparison(j, j+1);
            await delay(animationSpeed);

            visualizeSwap(j, j+1);
            await delay(animationSpeed);

            arr[j + 1] = arr[j];
            visualizeArray(arr);
            j = j - 1;
        }

        arr[j + 1] = key;
    }
}

//Quick sort Implementation
async function partition(arr, low, high, visualizeComparison, visualizeSwap, visualizeArray, delay, animationSpeed) {
    let pivot = arr[high];
    let i = (low - 1);

    for (let j = low; j <= high - 1; j++) {
        visualizeComparison(j,high);
        await delay(animationSpeed);

        if (arr[j] < pivot) {
            i++;

            visualizeSwap(i,j);
            await delay(animationSpeed);

            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            visualizeArray(arr);
        }
    }

    visualizeSwap(i+1, high);
    await delay(animationSpeed);

    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    visualizeArray(arr);

    return (i + 1);
}

async function quickSortHelper(arr, low, high, visualizeComparison, visualizeSwap, visualizeArray, delay, animationSpeed) {
    if (low < high) {
        let pi = await partition(arr, low, high, visualizeComparison, visualizeSwap, visualizeArray, delay, animationSpeed);

        await quickSortHelper(arr, low, pi - 1, visualizeComparison, visualizeSwap, visualizeArray, delay, animationSpeed);
        await quickSortHelper(arr, pi + 1, high, visualizeComparison, visualizeSwap, visualizeArray, delay, animationSpeed);
    }
}

export const quickSort = async (arr, visualizeComparison, visualizeSwap, visualizeArray, delay, animationSpeed) => {
    await quickSortHelper(arr, 0, arr.length - 1, visualizeComparison, visualizeSwap, visualizeArray, delay, animationSpeed);
}

//Merge sort implementation
async function merge(arr, l, m, r, visualizeComparison, visualizeSwap, visualizeArray, delay, animationSpeed) {
    let n1 = m - l + 1;
    let n2 = r - m;

    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    let i = 0, j = 0, k = l;

    while (i < n1 && j < n2) {
        visualizeComparison(l+i,m+1+j);
        await delay(animationSpeed);

        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        visualizeArray(arr);
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

async function mergeSortHelper(arr, l, r, visualizeComparison, visualizeSwap, visualizeArray, delay, animationSpeed) {
    if (l >= r) {
        return;
    }
    let m = l + Math.floor((r - l) / 2);
    await mergeSortHelper(arr, l, m, visualizeComparison, visualizeSwap, visualizeArray, delay, animationSpeed);
    await mergeSortHelper(arr, m + 1, r, visualizeComparison, visualizeSwap, visualizeArray, delay, animationSpeed);
    await merge(arr, l, m, r, visualizeComparison, visualizeSwap, visualizeArray, delay, animationSpeed);
}

export const mergeSort = async (arr, visualizeComparison, visualizeSwap, visualizeArray, delay, animationSpeed) => {
    await mergeSortHelper(arr, 0, arr.length - 1, visualizeComparison, visualizeSwap, visualizeArray, delay, animationSpeed);
}

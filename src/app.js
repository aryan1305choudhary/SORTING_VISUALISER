import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ArrayDisplay from './components/ArrayDisplay';
import Controls from './components/Controls';
import AlgorithmDescription from './components/AlgorithmDescription';
import { bubbleSort, insertionSort, selectionSort, quickSort, mergeSort } from './sortingAlgorithms';

function App() {
    const [array, setArray] = useState([]);
    const [algorithm, setAlgorithm] = useState('selectionSort');
    const [sorting, setSorting] = useState(false);
    const [animationSpeed, setAnimationSpeed] = useState(50);
    const [arraySize, setArraySize] = useState('medium');
    const animationRef = useRef(null);
    const [disableButtons, setDisableButtons] = useState(false);

    const ARRAY_SIZES = {
        small: 10,
        medium: 20,
        large: 30,
        "extra-large": 50,
    };

    useEffect(() => {
        generateRandomArray(ARRAY_SIZES[arraySize]);
    }, [arraySize]);

    const generateRandomArray = (size) => {
        const newArray = [];
        for (let i = 0; i < size; i++) {
            newArray.push(Math.floor(Math.random() * 100) + 1);
        }
        setArray(newArray);
    };

    const resetArray = () => {
        clearTimeout(animationRef.current);
        setSorting(false);
        setDisableButtons(false);
        generateRandomArray(ARRAY_SIZES[arraySize]);
    };

    const visualizeComparison = useCallback((index1, index2) => {
        const bars = document.getElementsByClassName('bar');
        if (bars[index1] && bars[index2]) {
            bars[index1].classList.add('comparing');
            bars[index2].classList.add('comparing');

            animationRef.current = setTimeout(() => {
                if (bars[index1] && bars[index2]) {
                    bars[index1].classList.remove('comparing');
                    bars[index2].classList.remove('comparing');
                }
            }, animationSpeed);
        }
    }, [animationSpeed]);

    const visualizeSwap = useCallback((index1, index2) => {
        const bars = document.getElementsByClassName('bar');
        if (bars[index1] && bars[index2]) {
            bars[index1].classList.add('swapping');
            bars[index2].classList.add('swapping');

            animationRef.current = setTimeout(() => {
                if (bars[index1] && bars[index2]) {
                    bars[index1].classList.remove('swapping');
                    bars[index2].classList.remove('swapping');
                }
            }, animationSpeed);
        }
    }, [animationSpeed]);

    const visualizeArray = useCallback((updatedArr) => {
        setArray([...updatedArr]);
    }, []);

    const delay = useCallback((ms) => new Promise((res) => setTimeout(res, ms)), []);

    const sort = useCallback(async () => {
        if (sorting) return;
        setSorting(true);
        setDisableButtons(true);

        let arr = [...array];

        const sortFunctions = {
            selectionSort: selectionSort,
            insertionSort: insertionSort,
            bubbleSort: bubbleSort,
            quickSort: quickSort,
            mergeSort: mergeSort,
        };

        const sortFunction = sortFunctions[algorithm];

        if (sortFunction) {
            await sortFunction(arr, visualizeComparison, visualizeSwap, visualizeArray, delay, animationSpeed);
        }

        setSorting(false);
        setDisableButtons(false);
    }, [algorithm, array, animationSpeed, visualizeComparison, visualizeSwap, visualizeArray, delay, sorting]);

    return (
        <div className="app-container">
            <Sidebar
                algorithm={algorithm}
                setAlgorithm={setAlgorithm}
                arraySize={arraySize}
                setArraySize={setArraySize}
            />
            <div className="main-content">
                <AlgorithmDescription algorithm={algorithm} />
                <ArrayDisplay array={array} />
                <Controls
                    animationSpeed={animationSpeed}
                    setAnimationSpeed={setAnimationSpeed}
                    sort={sort}
                    resetArray={resetArray}
                    sorting={sorting}
                    disableButtons={disableButtons}
                />
            </div>
        </div>
    );
}

export default App;

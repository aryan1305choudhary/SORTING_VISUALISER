import React from 'react';

function Sidebar({ algorithm, setAlgorithm, arraySize, setArraySize }) {
    const handleArraySizeChange = (size) => {
        setArraySize(size);
    };

    return (
        <div className="sidebar">
            <h2>Sorting Algorithms</h2>
            <ul className="algorithm-list">
                <li>
                    <button
                        className={algorithm === 'selectionSort' ? 'active' : ''}
                        onClick={() => setAlgorithm('selectionSort')}
                    >
                        Selection Sort
                    </button>
                </li>
                <li>
                    <button
                        className={algorithm === 'insertionSort' ? 'active' : ''}
                        onClick={() => setAlgorithm('insertionSort')}
                    >
                        Insertion Sort
                    </button>
                </li>
                <li>
                    <button
                        className={algorithm === 'bubbleSort' ? 'active' : ''}
                        onClick={() => setAlgorithm('bubbleSort')}
                    >
                        Bubble Sort
                    </button>
                </li>
                <li>
                    <button
                        className={algorithm === 'quickSort' ? 'active' : ''}
                        onClick={() => setAlgorithm('quickSort')}
                    >
                        Quick Sort
                    </button>
                </li>
                <li>
                    <button
                        className={algorithm === 'mergeSort' ? 'active' : ''}
                        onClick={() => setAlgorithm('mergeSort')}
                    >
                        Merge Sort
                    </button>
                </li>
            </ul>

            <h2>Settings</h2>
            <div className="array-size-controls">
                <p>Array Size</p>
                <button
                    onClick={() => handleArraySizeChange('small')}
                    className={arraySize === 'small' ? 'active' : ''}
                >
                    Small
                </button>
                <button
                    onClick={() => handleArraySizeChange('medium')}
                    className={arraySize === 'medium' ? 'active' : ''}
                >
                    Medium
                </button>
                <button
                    onClick={() => handleArraySizeChange('large')}
                    className={arraySize === 'large' ? 'active' : ''}
                >
                    Large
                </button>
                <button
                    onClick={() => handleArraySizeChange('extra-large')}
                    className={arraySize === 'extra-large' ? 'active' : ''}
                >
                    Extra Large
                </button>
            </div>
        </div>
    );
}

export default Sidebar;

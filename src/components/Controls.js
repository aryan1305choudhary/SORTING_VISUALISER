import React from 'react';

function Controls({ animationSpeed, setAnimationSpeed, sort, resetArray, sorting, disableButtons }) {

    const handleSpeedChange = (e) => {

        const sliderValue = parseInt(e.target.value, 10);
        const minDelay = 50;  
        const maxDelay = 500;  

        const newSpeed = minDelay + ((100 - sliderValue) / 100) * (maxDelay - minDelay);

        setAnimationSpeed(newSpeed);
    };

    return (
        <div className="controls">
            <label htmlFor="speed">Animation Speed:</label>
            <input
                type="range"
                id="speed"
                min="1"
                max="100"
                value={101 - ((animationSpeed - 50) / (4.5))} 
                onChange={handleSpeedChange}
                className="speed-slider"
            />
            <button onClick={sort} disabled={sorting || disableButtons}>
                ▶️ Play
            </button>
            <button onClick={resetArray} disabled={sorting || disableButtons}>
                🔄 Reset
            </button>
        </div>
    );
}

export default Controls;

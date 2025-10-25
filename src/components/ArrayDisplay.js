
import React from 'react';
function ArrayDisplay({ array }) {

    function verifyIfHaveToAddTheClass() {
      if (array.length > 30) {
        return "array-container array-big-size"
      } else {
        return "array-container";
      }
    }

    return (
        <div className={verifyIfHaveToAddTheClass()}>
            {array.map((value, index) => (
                <div className="bar" key={index} style={{ height: `${value * 3}px` }}>
                    <span>{value}</span>
                </div>
            ))}
        </div>
    );
}

export default ArrayDisplay;

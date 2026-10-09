import React, { useEffect } from 'react';

function ReactUseEffect() {
    useEffect(() => {
        console.log('UseEffect called');
    });

    return (
        <div>
            <h2 style={{ color: "red" }}>Hello React</h2>
        </div>
    );
}
export default ReactUseEffect;

// export default ReactUseEffect;
// function increaseCounter() {
//     setCounter(counter +5);
// }
// function decreaseCounter() {
//     setCounter(counter -5);
// }

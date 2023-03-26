import React, { useState, useMemo } from 'react';

// export function Reactquery(){
//     return(
//         <div>
//                 test by annas
//         </div>
//     )
// }


export function Reactquery() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const expensiveComputation = (x, y) => {
    console.log("computing...");
    return x * y;
  }

  const result = useMemo(() => {
    return expensiveComputation(a, b);
  }, [a, b]);

  return (
    <div>
      <p>Value of A: {a}</p>
      <button onClick={() => setA(a + 1)}>Increment A</button>
      <p>Value of B: {b}</p>
      <button onClick={() => setB(b + 1)}>Increment B</button>
      <p>Result: {result}</p>
    </div>
  );
}

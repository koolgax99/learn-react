import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);
  const [number1, setNumber1] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
      <h1>{number1}</h1>
      <button onClick={() => {
        setNumber1(number1 + 1);
        setNumber1(number1 + 1);
        setNumber1(number1 + 1);
      }}>+3</button>
    </>
  )
}

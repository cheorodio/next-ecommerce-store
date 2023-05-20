'use client';
import { useState } from 'react';
import styles from './Counter.module.scss';

export default function QuantityCounter() {
  const [counter, setCounter] = useState(1);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    if (counter > 1) {
      setCounter((count) => count - 1);
    }
  };

  return (
    <div className={styles.counterContainer}>
      <button onClick={decrease}>-</button>
      <span data-test-id="product-quantity">{counter}</span>
      <button onClick={increase}>+</button>
    </div>
  );
}

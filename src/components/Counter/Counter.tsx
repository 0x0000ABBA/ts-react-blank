import { FC, useState } from 'react';
import "./Counter.css";

interface ICounter { };

const Counter: FC<ICounter> = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const multiplyByTwo = () => {
        setCount(count * 2);
    };

    const divideByTwo = () => {
        setCount(count / 2);
    };

    return (
        <div className='Counter'>
            {count}
            <button onClick={() => increment()}>Увеличить на 1</button>
            <button onClick={() => decrement()}>Уменьшить на 1</button>
            <button onClick={() => multiplyByTwo()}>Умножить на 2</button>
            <button onClick={() => divideByTwo()}>Разделить на 2</button>
        </div>
    )
}

export default Counter;

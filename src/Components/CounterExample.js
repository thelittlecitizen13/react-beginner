import React, {useState} from 'react'

export default function CounterExample() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <h1 onClick={() => setCount(count + 1)}>Increase</h1>
            <h1 onClick={() => setCount(count - 1)}>Decrease</h1>
        </div>
    )
}

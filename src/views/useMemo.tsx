import React, { useMemo, useState } from 'react';

// Example of React.memo
const ChildComponent = React.memo(({ count }: { count: number }) => {
    console.log('ChildComponent rendered');
    return <div>Count: {count}</div>;
});

const UseMemoExample = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    // Example of useMemo
    const memoizedValue = useMemo(() => {
        console.log('Expensive calculation');
        return count * 2;
    }, [count]);

    return (
        <div>
            <h1>useMemo and React.memo Example</h1>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Type something" 
            />
            <ChildComponent count={count} />
            <div>Memoized Value: {memoizedValue}</div>
        </div>
    );
};

export default UseMemoExample;

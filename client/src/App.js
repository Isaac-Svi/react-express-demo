import React, { useState, useEffect } from 'react';
import './style.css';

const App = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        fetch('/api/content')
            .then((res) => res.text())
            .then((data) => setData(data))
            .catch((err) => console.log(err.message));
    }, []);

    return (
        <>
            <h2 style={{ color: 'red' }}>React Starter</h2>
            <pre>The data is: {data}</pre>
        </>
    );
};

export default App;

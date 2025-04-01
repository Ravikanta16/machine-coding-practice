import React from 'react';


export const Toggle = () => {
    const [data, setData] = React.useState('');

    const handleButton1 = (e) => {
        setData('Data1');
    }
    const handleButton2 = (e) => {
        setData('Data2');
    }
    return (
        <div>
            <button onClick={handleButton1}>A</button>
            <button onClick={handleButton2}>B</button>
            <h1>{data}</h1>
        </div>
    )
}

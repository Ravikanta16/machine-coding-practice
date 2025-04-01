import React from 'react';
const Toggle2 = () => {
    const arr=[];
    const [data, setData] = React.useState('');
    const [active, setActive] = React.useState("");
    const handleClick=(i)=>{
        setData(i);
        setActive(i);
    }
    const someFunction=()=>{
        for(let i=0;i<10;i++){
            arr.push(<button key={i} onClick={()=>handleClick(i)} style={{backgroundColor:active===i?"green":"white",height:"100px",width:"100px"}}>{i}</button>)
        }
        return arr;
    };

    return(
        <div>
            {someFunction()}
            <h1>{data}</h1>
        </div>
    )
}
export default Toggle2;
import React from 'react';
const  MyData=[
    {
        id:0,
        name:"John",
        age:23
    },
    {
        id:1,
        name:"Akshay",
        age:25
    },
    {
        id:2,
        name:"Rahul",
        age:25
    },
    {
        id:3,
        name:"Aryan",
        age:26
    },
    {
        id:4,
        name:"Alexa",
        age:29
    },
    {   id:5,
        name:"Simran",
        age:25
    },
    {
        id:6,
        name:"Bob",
        age:25
    },
    {
        id:7,
        name:"Alex",
        age:24
    },
    {
        id:8,
        name:"Doe",
        age:27
    },
    {
        id:9,
        name:"Smith",
        age:28
    }
]
const Toggle3 = () => {
    const arr=[];
    const [data, setData] = React.useState(MyData[0]);
    const [active, setActive] = React.useState(0);
    const [input,setInput]=React.useState(10);

    const addButton=()=>{
        setInput(input+1); 
        console.log("new button");
    }

    const handleClick=(i)=>{
        if(i>MyData.length -1 ){
            setData({
                id:'No data available',
                name:'',
                age:''
            });
            setActive(i);
            return
        }
        setData(MyData[i]);
        setActive(i);
    }
    const someFunction=()=>{
        for(let i=0;i<input;i++){
            arr.push(<button key={i} onClick={()=>handleClick(i)} style={{backgroundColor:active===i?"green":"white",height:"100px",width:"100px", marginTop:"5px"}}>{i}</button>)
        }
        // arr.map((item,index)=>{
        //     arr.push(<button key={index} onClick={()=>handleClick(index)} style={{backgroundColor:active===index?"green":"white",height:"100px",width:"100px", marginTop:"5px"}}>{index}</button>)
        // })
        return arr;
    };

    return(
        <div style={{border:"2px solid black",marginTop:"10px",padding:"5px",justifyItems:"center"}}>
            <div>
                {someFunction()}
                <button style={{height:"100px",width:"100px", marginTop:"5px"}} onClick={addButton}>
                    +
                </button>
            </div>
            <h1>{data.id}</h1>
            <h2>{data.name}</h2>
            <h3>{data.age}</h3>
        </div>
    )
}
export default Toggle3;
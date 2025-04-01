import { useState } from "react";
const GridOfXYLength=()=>{
    const x=5;
    const y=5;
    const arr=[];
    const [value,setValue]=useState([]);
     
    const handleClick=(i,j)=>{
        setValue([i,j]);
        // console.log(i,j);
    }

    const myfun=()=>{
        for(var i=0;i<x;i++){
            arr.push([]);
            for(var j=0;j<y;j++){
                arr[i].push(<button  key={`${i}-${j}`} onClick={(e)=>handleClick(i,j)} style={{height:"50px",width:"50px", border:"1px" ,margin:"2px"}}>{i+1}</button>)
            }
        }
        return arr;
    }
    return(
        <>
            {myfun().map((item)=>
                <div key={Math.random()} style={{display:"flex", gap:"5px",margin:"10px"}}>
                    {item}
                </div>
            )}
            {value}
        </>
    );
}
export default GridOfXYLength;
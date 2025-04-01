const ArrayHandle = () => {
    const arr=["apple","banana","cherry","date","elderberry","fig","grape"];
    const someFunction=()=>{
        const x=arr.map((item)=> {
            return <p key={item} style={{color:"green"}}>{item}</p>
        })
        console.log(x);
        return x;
    }
    someFunction();
    return(
        <div style={{display:"flex",gap:"10px"}}>
            {someFunction()}
        </div>
    )
}
export default ArrayHandle;
// (a,b) => a+b
// (a,b) => {return a+b}
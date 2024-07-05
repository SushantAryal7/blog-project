import React, { useState } from "react";



const Input = () =>{
    // const [url, setUrl] = useState();
    const [url, setUrl] = useState()
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [finalData, setFinalData] = useState([])

const submitHandler = (event)=>{
    event.preventDefault();

    setFinalData([...finalData,{url:url, title:title, desc:desc}])
}
// function urlHandler(event){
//     setUrl(event.target.value)
// }


    
    return(
        <div>
            <form onSubmit={submitHandler}>
            {/* <label htmlFor="url">Url:</label>
            <input type="url" id="url"  onChange={urlHandler}></input>
            <br /> */}
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" onChange={(event)=>setTitle(event.target.value)}></input>
            <br />

            <label htmlFor="description">Description:</label>
            <input type="text" id="description" onChange={(event)=>setDesc(event.target.value)}></input>

            <label>URL:</label>
                <input type="url" onChange={(event)=>setUrl(event.target.value)}></input>

            <button > Add</button>
            </form>
                
            {finalData.map((data,index)=>{
                return(
                <ul>
                <li key={index}>{data.title}</li>
                <li>{data.desc}</li>
                <li>      <img src={data.url} alt="Loading..." />
                </li>
                </ul>
                )

            })}
           
        </div>
    )
}

export default Input;
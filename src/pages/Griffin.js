import React,{useState} from 'react'

export default function Griffin() {
    const [click,clickCount] = useState(0);
    return (
        <div>
            <h1>This is Griffin's Page</h1>
            <img src="https://specials-images.forbesimg.com/imageserve/5d35eacaf1176b0008974b54/960x0.jpg?cropX1=790&cropX2=5350&cropY1=784&cropY2=3349" alt=""/>
            <button onClick ={()=>{clickCount(click + 1)}} >{click}</button>
        </div>
    )
}

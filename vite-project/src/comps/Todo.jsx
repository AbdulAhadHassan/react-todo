import { useState } from "react"

function Todo({data , onRemove }){

    const [inputText, setInputText] = useState(data.text)
    const onEdit = ()=>{
        setInputText(prompt("Edit text"))
    }


    return(
        <div className="mt-2">
            <div className="flex flex-row justify-between">
                <h1>
                    {inputText}
                </h1>
                <div>

                <button className="m-1" onClick={onEdit}>edit</button>
                <button className="m-1"  onClick={() => {onRemove(data.createdAt); console.log(data.createdAt)}}>Remove</button>
                </div>
            </div>
        </div>
    )
}


export default Todo


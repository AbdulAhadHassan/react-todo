function Todo({data, onRemove }){
    console.log(data.id)
    return(
        <div className="my-2" key={data.id}>
            <div className="flex justify-between">
                <p >
                    {data.text}
                </p>
                <div>

                <button  onClick={() => onRemove(data.id)} className=" rounded bg-teal-200 border-slate-600	 border mx-1 px-2 w-17">remove</button>
                </div>
            </div>
        </div>
    )
}


export default Todo
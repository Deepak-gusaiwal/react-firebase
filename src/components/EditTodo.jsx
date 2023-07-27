import React from 'react'

const EditTodo = () => {
  return (
    <div className=" w-[max(80vw,200px)]  p-4 my-2  mx-auto bg-orange-300 flex flex-col justify-center items-center gap-2">
    <h2 className="text-center text-3xl font-bold">Update your TODO</h2>
    <input
   
      className="rounded-sm px-2 py-1 w-[max(80%,150px)]"
      type="text"
      placeholder="Enter Title"
    />


    <input
     
      className="rounded-sm px-2 py-1 w-[max(80%,150px)]"
      type="text"
      placeholder="Enter Description"
    />

    <button
   
      className="p-2 bg-orange-500 font-bold text-white rounded"
    >
      Update
    </button>
  </div>
  )
}

export default EditTodo
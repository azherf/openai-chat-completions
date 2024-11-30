import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const getCompletion = async () => {
    const response = await fetch("http://localhost:8000/completion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({text})
    })
    const data = await response.json()
    console.log(data)
    setResponse(data.content)
  }
  return (
      <div className="m-5 p-5">
          <div className="flex items-center">
            <textarea className="border rounded-sm w-full p-2" onChange={e => setText(e.target.value)} />
            <button className="border-blue-500 bg-blue-500 text-white rounded-md hover:bg-blue-400 p-5 ml-2" onClick={ getCompletion }>Submit</button>
          </div>
          <p className=" whitespace-pre-line mt-5 w-full h-100 bg-gray-100 p-5">{response}</p>
      </div>
  )
}

export default App


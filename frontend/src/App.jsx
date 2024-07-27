import './App.css'
import { useState, useEffect } from 'react'

function App() {
    const [data, setData] = useState(null)

    useEffect(() => {
        async function getData() {
            const response = await fetch('http://127.0.0.1:5000/main')
            const responseData = await response.json()
            setData(responseData)
        }
        getData()
    }, [])

    return (
        <>
            <h1>Restaurants</h1>
            <div className="card">A project using Vite + React.</div>
            {data ? <div>{data.message}</div> : <div>Aun no hay datos</div>}
        </>
    )
}

export default App

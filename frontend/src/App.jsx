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
            {data ? (
                <div>
                    This is the current list of restaurants:
                    <ul>
                        {data.map((restaurant, index) => (
                            <li key={index}>
                                {restaurant.name} ({restaurant.cuisine_type})
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>There is still no data</div>
            )}
            <footer>
                <div className="card">A project using Vite + React.</div>
            </footer>
        </>
    )
}

export default App

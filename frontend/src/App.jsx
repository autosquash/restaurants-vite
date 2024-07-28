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
                                <div className="card">
                                    <h3 className="title">{restaurant.name}</h3>
                                    Style: {restaurant.cuisine_type}
                                    <br />
                                    Phone: {restaurant.phone}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>There is still no data</div>
            )}
            <footer>
                <div>A project using Vite + React.</div>
            </footer>
        </>
    )
}

export default App

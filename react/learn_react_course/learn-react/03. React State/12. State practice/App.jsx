import React from "react"

export default function App() {
    const [stateCount, setStateCount] = React.useState(0)
    
    function updateCount(amount) {
        setStateCount(prevCount => prevCount + amount)
    }

    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button 
                    className="minus" 
                    aria-label="Decrease count" 
                    onClick={() => updateCount(-1)}
                >–</button>
                <h2 className="count">{stateCount}</h2>
                <button 
                    className="plus" 
                    aria-label="Increase count" 
                    onClick={() => updateCount(1)}
                >+</button>
            </div>
        </main>
    )
}

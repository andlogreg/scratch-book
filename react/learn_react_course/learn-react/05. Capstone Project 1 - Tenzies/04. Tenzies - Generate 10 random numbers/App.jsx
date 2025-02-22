import Die from "./Die"

/**
 * Challenge:
 * 
 * Write a function (generateAllNewDice) that returns an array 
 * of 10 random numbers between 1-6 inclusive.
 * 
 * Log the array of numbers to the console for now
 */

function generateAllNewDice() {
    return Array(10).fill().map(() => Math.ceil(Math.random() * 6))
}

export default function App() {
    const numbers = generateAllNewDice()
    console.log(numbers)
    return (
        <main>
            <div className="dice-container">
                <Die value={1} />
                <Die value={2} />
                <Die value={3} />
                <Die value={4} />
                <Die value={5} />
                <Die value={6} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
            </div>
        </main>
    )
}
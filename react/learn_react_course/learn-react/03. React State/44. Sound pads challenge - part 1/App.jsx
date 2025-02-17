import pads from "./pads"
import { useState } from "react"

export default function App() {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */
    const [myPads, setMyPads] = useState(pads)

    const padElements = myPads.map(pad => {
        return (
            <button key={pad.id} >
                {pad.color}
            </button>
        )
    })
    return (
        <main>
            <div className="pad-container">
                {padElements}
            </div>
        </main>
    )
}

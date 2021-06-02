import { useState, useEffect } from 'react'
import Cards, { item } from "./Cards"
import "./ShuffleSort.scss"
import * as utils from "./utils"

const ShuffleSort = () => {
    const arr = [ 
        {value: 9, color: "dark"} , 
        {value: 8, color: "dark-light"},
        {value: 7, color: "grey"},
        {value: 6, color: "grey"},
        {value: 5, color: "dark"},
        {value: 4, color: "light"},
        {value: 3, color: "dark"},
        {value: 2, color: "light"},
        {value: 1, color: "dark-light"}
    ]
    const [state, setState] = useState<item[]>()

    useEffect(() => {
        setState(utils.shuffleArray(arr))
    }, [])

    const handleShuffle = () => {
        setState(utils.shuffleArray(arr))
    }

    const handleSort = () => {
        setState(utils.sortArray(arr))
    }

    return (
        <div className="layout">
            <div className="header">
                <h2>Shuffle and Sort</h2>
            </div>
            <div className="middle">
                <div className="layout-left">
                    {state && <Cards nums={state} rowSize={3}/>}
                </div>
                <div className="layout-right">
                    <button onClick={handleShuffle}>SHUFFLE</button>
                    <button onClick={handleSort}>SORT</button>
                </div>
            </div>
            <div className="layout-bottom">
                <h4>Shuffle and sort by Linson Augustine</h4>
            </div>
        </div>
    )
}

export default ShuffleSort
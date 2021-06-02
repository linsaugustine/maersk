import { useState, useEffect } from 'react'
import Cards from "./Cards"
import item from "./types"
import "./ShuffleSort.scss"
import * as utils from "./utils"

interface Props {
    arr: item[]
}

const ShuffleSort: React.FC<Props> = (props) => {
    const [state, setState] = useState<item[]>()

    useEffect(() => {
        setState(utils.shuffleArray(props.arr))
    }, [])

    const handleShuffle = () => {
        setState(utils.shuffleArray(props.arr))
    }

    const handleSort = () => {
        setState(utils.sortArray(props.arr))
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
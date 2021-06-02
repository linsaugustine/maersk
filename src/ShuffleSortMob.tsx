import { useState, useEffect } from 'react'
import Cards from "./CardsMob"
import item from "./types"
import "./ShuffleSortMob.scss"
import * as utils from "./utils"

interface Props {
    arr: item[]
}

const ShuffleSortMob: React.FC<Props> = (props) => {
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
        <div className="mob-layout">
            <div className="mob-header">
                Shuffle and Sort
            </div>
            <div className="mob-buttons">
                <button onClick={handleShuffle}>SHUFFLE</button>
                <button onClick={handleSort}>SORT</button>
            </div>
            <div className="mob-cards-section">
                {state && <Cards nums={state} />}
            </div>
            <div className="mob-footer">
                <h4>Shuffle and sort by Linson Augustine</h4>
            </div>
        </div>
    )
}

export default ShuffleSortMob
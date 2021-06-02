import React from 'react'
import "./CardsMob.scss"
import item from "./types"

interface InputProps {
    nums: item[]
}

const CardsMob: React.FC<InputProps> = (props) => {
    return (
        <div className="cards-mob">
        {props.nums.map(item => {
            return (
                <div className="card-row">
                    <div className={`card-col-left ${item.color}`}></div>
                    <div className="card-col-right">{item.value}</div>
                </div>
            )
        })}
        </div>
    )
}

export default CardsMob
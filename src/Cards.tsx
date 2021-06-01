import React from 'react'
import "./Cards.scss"

export interface item {value: number, color: string}

interface InputProps {
    nums: item[]
    rowSize: number
}

const Cards: React.FC<InputProps> = (props) => {
    //@ts-ignore
    const rows = []
    //@ts-ignore
    let cols = []

    props.nums.map((item, index) => {
        cols.push(<div key={item.value} className={`col ${item.color}`}><h1>{item.value}</h1></div>)

        if ((index + 1) % props.rowSize === 0) {
            rows.push(
                <div className="row" key={rows.length}>
                    {/* @ts-ignore */}
                    {cols}
                </div>
            )
            cols = []
        }
    })

    
    return (<div className="cards">
        {/* @ts-ignore */}
        {rows}
        </div>)
}

export default Cards
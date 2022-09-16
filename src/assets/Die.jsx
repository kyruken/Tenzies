import React from "react"

export default function Die(props) {
    return (
        <div className="die" onClick={(event) => props.holdDie(props.id)}>
            {props.value}
        </div>
    )
}
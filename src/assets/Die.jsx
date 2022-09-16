import React from "react"

export default function Die(props) {
    return (
        <div className={props.isHeld ? "held-die die" : "die"} onClick={props.holdDie}>
            <h2>{props.value}</h2>
        </div>
    )
}
import React from 'react'

export default function Navigation(props) {
    return (
        <div className="nav">
            <div onClick={() => {props.navigate(0)}}>main page</div>
            <div onClick={() => {props.navigate(1)}}>look of the day</div>
            <div onClick={() => {props.navigate(2)}}>my wardrobe</div>
            <div onClick={() => {props.navigate(3)}}>add element</div>
        </div>
    )
}

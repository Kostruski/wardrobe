import React from 'react'



const singleItem = (props) => {




    if(props.items) {
        const elegantDress = props.items.filter(el => el.style.includes("elegant"));
        console.log(elegantDress);
         }

    







    return (
        <div>
            <h1>dupa</h1>
        </div>
    )
}

export default singleItem



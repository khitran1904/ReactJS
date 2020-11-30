import React from 'react'


// export default function WellcomeFunc({age,name})
export default function WellcomeFunc(props) {
    return (
        <div>
            <h3> {props.name1}  - {props.age} </h3>
        </div>
    )
}

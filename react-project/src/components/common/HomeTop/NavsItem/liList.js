import React from 'react'
import './liList.scss'
const UlList = props => {
    
    let subList = props.liList
    // console.log(subList)
    return (
        <ul>
            
            {
                subList.map((item,t)=>{
                    return <li key={item.tag_id}>{item.name}</li>
                })
            }
        </ul>
        
    )
}
export default UlList 
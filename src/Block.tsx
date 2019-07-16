import React,{ FC } from 'react'
import { BlockProps } from './Interface'; 
const Block: FC<BlockProps> = ({ value, position, onClick, winning }) => {


    return (
        <div 
        className={`block ${!onClick ? "disabled" : ""} ${winning ? 'winning' : ''}`} 
        onClick={() => onClick && onClick(position)}
        >
            <span>{value}</span>
        </div>
    )
}

export default Block;

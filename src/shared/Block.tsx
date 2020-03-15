import React,{ FC } from 'react'
// import { BlockProps } from './Interface'; 
interface BlockProps {
    position: number,
    onClick: any,
    value: string,
    winning: boolean
}
const Block: FC<BlockProps> = ({ value, position, onClick, winning }) => {


	return (
		<div 
			className={`block ${!onClick ? 'disabled' : ''} ${winning ? 'winning' : ''}`} 
			onClick={() => onClick && onClick(position)}
		>
			<span>{value}</span>
		</div>
	)
}

export default Block

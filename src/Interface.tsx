export interface BlockProps {
    position: number,
    onClick: any,
    value: string,
    winning: boolean
}

export interface ResetType{
    setBlock: Function,
    setisPlayerX: Function,
    setgameOver: Function,
    setWinningHan: Function
}
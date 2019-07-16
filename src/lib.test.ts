import { isEqual, createStore, setState, checkIsGridFree } from './lib';
describe('Test Suite for Game Lib',()=>{
    test('Test isEqual Function Happy Path',() => {
        expect(isEqual()).toEqual(false)
        expect(isEqual([1,1])).toEqual(true)
        expect(isEqual([1,2])).toEqual(false)
        expect(isEqual(['a', 'b'])).toEqual(false)
        expect(isEqual(['a', 'a'])).toEqual(true)
    })
})

describe('Create Store Function HappyPath',()=>{
    test('Create Store Happy Path',()=>{
        expect(createStore()).toEqual({
            grid:Array(9).fill(null),
            isPlayerX:false,
            isGameOver:false
        })
    })
})

describe('Update State Function HappyPath', () => {
    test('It should return a concated state using the prevState and newState', () => {
        expect(setState({success:true},{notSuccess:false})).toEqual({
            success:true,
            notSuccess:false
        })
    })
})

describe('checkIsGridFree',()=>{
    
    test('Should Return True',()=>{
        let array = Array(9).fill('1')
        array[8] = null
        expect(checkIsGridFree(array)).toEqual(true)

        array  = Array(9).fill(null)
        array[1] = '1'
        expect(checkIsGridFree(array)).toEqual(true)
    })
    test('Should Return False',()=>{
        expect(checkIsGridFree(Array(9).fill('1'))).toEqual(false)

    })
})


describe('Check Game State',()=>{
    test('Check Game State',()=>{

    })
})
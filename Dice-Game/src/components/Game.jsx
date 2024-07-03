import React from 'react'
import { useState } from 'react'

const Game = () => {

    // Selecting the Number
    const [selected, setSelected] = useState()
    const diceNumber = [1, 2, 3, 4, 5, 6]

    // Rolling the Dice
    const [currentDice, setCurrentDice] = useState(6)

    // Point Updation
    const [updatePoint, setUpdatePoint] = useState(0)

    // Error Handling
    const [error, setError] = useState("")

    const rollDice = () => {

        if (!selected) {
            setError("Please Select A Number")
            return
        }
        setError("")

        const randomNumber = Math.floor(Math.random() * 6) + 1;
        setCurrentDice(randomNumber)

        if (selected == randomNumber) {
            setUpdatePoint(a => a + 1)
        } else {
            setUpdatePoint(a => a - 1)
        }

        setSelected(undefined)
    }

    // TODO: Show Rules
    const [rule, setRule] = useState()

    const Rule = () => {
        setRule()
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen w-screen">
                <div className="flex flex-col items-center w-[1280px] h-[80%] gap-10">
                    <div className="flex justify-between w-full h-[151px]">
                        <div className="w-[135px] h-full flex flex-col justify-center item-center">
                            <span className="text-center text-[80px] font-[500]">{updatePoint}</span>
                            <span className="text-center text-[24px] font-[500]">Total Score</span>
                        </div>
                        <div className="w-[552px] flex flex-col items-end justify-between">
                            <div className="text-[20px] font-[500] text-red-600">{error}</div>
                            <div className="flex  gap-[24px]">
                                {
                                    diceNumber.map((value, index) => (
                                        <button key={index} onClick={() => setSelected(value)} id='btn' className={`w-[72px] h-[72px] border border-black font-[700] flex justify-center items-center text-[24px] ${value == selected ? 'bg-black text-white' : 'bg-white text-black'}`}>{value}</button>
                                    ))
                                }
                            </div>
                            <div className="text-[24px] font-[700]">Select Number</div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center text-[24px] font-[500]'>
                        <img onClick={rollDice} src={`/src/images/dice-${currentDice}.svg`} alt="dice" className="cursor-pointer" />
                        <p>Click on the Dice to Roll</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <button className="w-[220px] h-[44px] rounded-[5px] border-2 border-black text-[16px] font-[600]">Reset Score</button>
                        <button onClick={Rule} className="w-[220px] h-[44px] rounded-[5px] bg-black text-white text-[16px] font-[600]">Show Rules</button>
                        TODO: <div className="">{rule}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Game
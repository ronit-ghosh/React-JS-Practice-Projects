import React from 'react'

const LandingPage = ({toggle}) => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen w-screen">
                <div className="flex justify-between items-center w-[1182px] h-[522px]">
                    <img src="src\images\landing-page-dice.png" alt="dice-image" className='w-[649px] ' />
                    <div className="flex flex-col justify-center items-end">
                        <p className="text-[96px] font-[700]">DICE GAME</p>
                        <button className='w-[220px] h-[44px] bg-black text-white rounded-[5px] font-[600] hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-400' onClick={toggle}>Play Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const FoodyZone = () => {
    let URL = "http://localhost:9000"

    const [data, setData] = useState(null)
    const [filteredData, setFilteredData] = useState(null)
    const [selectedBtn, setSelectedBtn] = useState("all")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                let response = await fetch(URL);
                let jsonData = await response.json();
                setData(jsonData)
                setFilteredData(jsonData)
                setLoading(false)
            } catch (err) {
                setError("Kuch to garbar hai re baba!")
            }
        }
        fetchData()
    }, [])

    if (error) return <div className="w-screen h-screen flex justify-center items-center"><p className='text-6xl font-extrabold text-red-500'>{error}</p></div>
    if (loading) return <div className="w-screen h-screen flex justify-center items-center"><p className='text-6xl font-extrabold'>Loading...</p></div>

    const searchFood = (e) => {
        const searchValue = e.target.value

        if (searchValue == "") {
            setFilteredData(null)
        }

        const filter = data?.filter((e) =>
            e.name.toLowerCase().includes(searchValue.toLowerCase())
        )

        setFilteredData(filter)
    }

    const sortFood = (type) => {
        if (type === "all") {
            setFilteredData(data)
            setSelectedBtn(type)
            return
        }
        const filter = data?.filter((e) =>
            e.type.toLowerCase().includes(type.toLowerCase())
        )
        setFilteredData(filter)
        setSelectedBtn(type)

    }

    const buttons = [
        {
            name: "All",
            type: "all"
        },
        {
            name: "Breakfast",
            type: "breakfast"
        },
        {
            name: "Lunch",
            type: "lunch"
        },
        {
            name: "Dinner",
            type: "dinner"
        },
    ]

    return (
        <>
            <header>
                <section className="w-screen h-[140px] flex justify-between items-center px-16">
                    <div className="text-4xl font-extrabold text-slate-900">Foody Zone</div>
                    <input className="border border-slate-600 rounded-md p-1" onChange={searchFood} type="text" name='search' id='search' placeholder='Search Food...' />
                </section>
                <div className="flex gap-3 justify-center items-center">
                    <p className="text-xl font-bold">Sort:</p>
                    {
                        buttons.map((e) => (
                            <button className="w-[96px] h-[31px] bg-slate-500 rounded text-white font-[500]" key={e.name} onClick={() => sortFood(e.type)}>{e.name}</button>
                        ))
                    }
                </div>
            </header>
            <main className="mx-auto my-14 w-[1060px] h-[366px] overflow-hidden grid grid-cols-3">
                {
                    filteredData?.map((e) => (
                        <div key={e.name} className="border border-black rounded-tl-2xl rounded-br-2xl grid grid-cols-2 place-items-baseline w-[340px] h-[167px] p-2">
                            <div className="row-span-3 w-[133px] overflow-hidden m-auto"><img className="w-[133px]" src={URL + e.image} alt="image" /></div>
                            <h3 className="w-full h-full flex items-end font-bold text-[18px]">{e.name}</h3>
                            <span className="text-[12px] text-gray-500">{e.text}</span>
                            <div className="w-full h-full flex justify-end items-center">
                                <button className="w-[57px] h-[25px] px-2 bg-slate-600 text-white rounded-md text-[13px]">${e.price.toFixed(2)}</button>
                            </div>
                        </div>

                    ))
                }
            </main>

        </>
    )
}

export default FoodyZone

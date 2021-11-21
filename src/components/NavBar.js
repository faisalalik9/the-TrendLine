import React from 'react'

function NavBar() {
    return (
        <div className="w-full px-8 py-2 lg:px-36 lg:py-4 bg-col1 text-white border-b-2 border-col2 flex justify-between items-center">
            <div className=" text-base lg:text-2xl font-bold">
                the <span className="text-col4">T</span>REND <span className="text-col5">L</span>INE
            </div>

            <div className="">
                <button className=" border-2 border-col4 px-2 lg:px-4 py-1 hover:bg-col5 hover:border-col5 text-base lg:text-lg  rounded-xl transition-all duration-150 ease-in  ">BUY NOW</button>
            </div>
        </div>
    )
}

export default NavBar

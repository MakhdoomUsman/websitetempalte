import React from 'react'
import img1 from './../img/card/img1.png'
import img2 from './../img/card/img2.png'
import img3 from './../img/card/img3.png'


const NewsCard = () => {
  return (
    <div className='mt-10'>
       <div className="flex justify-center align-center font-bold text-2xl uppercase mb-10">
        News
       </div>
        <div className="grid grid-cols-5 gap-10 ">
            <div></div>
            <div className="relative">
                <div className=" ">
                    <img src={img1} alt="."/>
                </div>
                <div className=" text-white absolute bottom-1 left-3">
                    <div className="font-bold text-sm uppercase">
                    INDUSTRIAL INNOVATION GROUP and MOZER have... 
                    </div>
                    <div className="font-normal text-xs">
                    When developing the original futuristic design...
                    </div>
                </div>
                </div>
            
            <div className="relative ">
                <div className=" ">
                    <img src={img2} alt="." />
                </div>
                <div className=" text-white absolute bottom-1 left-3">
                    <div className="font-bold text-sm uppercase">
                    UAE STATE MINISTER FOR FOREIGN TRADE...
                    </div>
                    <div className="font-normal text-xs">
                    The management of Industrial Innovation Group...
                    </div>
                </div>
            </div>
            <div className="relative ">
                <div className=" ">
                    <img src={img3} alt="." />
                </div>
                <div className=" text-white absolute bottom-1 left-3">
                    <div className="font-bold text-sm uppercase">
                    THE INDUSTRIAL INNOVATION GROUP HAS CONFIRMED ITS... 
                    </div>
                    <div className="font-normal text-xs">
                    Independent industry of security printing,...
                    </div>
                </div>
                
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default NewsCard
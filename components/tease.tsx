import React from 'react';
import RightArrow from '../assets/rightArrow';
import DownArrow from '../assets/downArrow';

const Tease = () => {
    return (
        <div className='bg-black h-[12em] flex text-white justify-center py-6'>
            <div className='w-[30%] h-full text-[#FACF49] text-lg '><strong className='text-[#FACF49] font-bold text-xl'> __</strong> As a software developer with four years of experience, I excel in JavaScript, Python, and PHP, crafting stunning and functional websites that fulfill my clients' visions through collaborative efforts.</div>
            <div className='w-[23%] h-full flex justify-center'>  
            <div className='w-[5em] h-[5em] rounded-full  flex flex-col items-center justify-center border-white'>
                
                scroll <DownArrow/> </div></div>
            <div className='w-[37%] h-full relative flex'> 
            <div className='w-[50%]'>
            <img width="40%"  className='absolute project1' src="https://res.cloudinary.com/trio-code/image/upload/v1708342323/rfflftaetnnvxpp3lqcr.png" alt="" />
            </div>
            <div>
                <h1>Leerecs</h1>
                <p>The True Alternative to Alternative Music (TM)</p>

                <h5 className='text-[#FACF49] flex gap-1'>All Projects <RightArrow/> </h5>
            </div>
            </div>
            
        </div>
    );
}

export default Tease;

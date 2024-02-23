import React from 'react';

const About = () => {
    return (
        <div className='px-8'>
            <h1 className='text-white text-4xl'>About Us</h1>
        <div className='flex gap-2 '>
            <div className='text-white w-[50%]'>
             <p>
             I am a web developer with 4 years of experience in the field. I have a strong skill set in various programming languages, including JavaScript, Python, and PHP. I am passionate about creating beautiful and functional websites that meet my client's needs. I have experience working with a variety of clients and enjoy collaborating with them to bring their visions to life.

If you're looking for a web developer who's dedicated to delivering high-quality work and providing excellent customer service, please don't hesitate to contact me. Let's work together to bring your project to the next level!
             </p>

            </div>
            <div className='w-[50%]'>
                <img src="https://res.cloudinary.com/trio-code/image/upload/v1708334765/u2iixs1ubpqvrryvdl8b.png" alt="" />
            </div>
            
        </div>
        </div>
    );
}

export default About;

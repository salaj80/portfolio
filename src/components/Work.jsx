import React from 'react'
import Cookbook from '../assets/work/cookbook.png'
import Travel from '../assets/work/travel.png'
import Zvone from '../assets/work/zvone.png'
import Auto from '../assets/work/auto.png'
import South from '../assets/work/ss1.jpg'
import Expense from '../assets/work/expense.jpg'
import Fusion from '../assets/work/fusion.jpg'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#08192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#0097B2]'>Work</p>
                    <p className='py-6'>/ Check out some of my recent work</p>
                </div>

                <div className='grid sm:grid-cols-3  gap-4'>
                    <div style={{ backgroundImage: `url(${Auto})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-xl sm:text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://auto80-webapp.vercel.app/' target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/salaj80/Auto80_showcase' target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Travel})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-xl sm:text-2xl font-bold text-white tracking-wider'>
                                React JS Landing Page
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='http://travel-salaj80.netlify.app/'
                                    target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/salaj80/travel-app'
                                    target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Cookbook})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-xl sm:text-2xl font-bold text-white tracking-wider'>
                                Vue JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://salaj80-vuejs-cookbook.netlify.app/'
                                    target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/salaj80/VueJS-API-Cookbook' target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Zvone})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-xl sm:text-2xl font-bold text-white tracking-wider'>
                                React JS Landing Page
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://zvonetransport.netlify.app/'
                                    target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/salaj80/ZvoneWebapp'
                                    target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${South})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-xl sm:text-2xl font-bold text-white tracking-wider'>
                                WebFlow E-commerce
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://southside.webflow.io/'
                                    target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Expense})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-xl sm:text-2xl font-bold text-white tracking-wider'>
                                ASP.NET Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/salaj80/ExpenseTracker'
                                    target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-3 flex justify-center">
                        <div style={{ backgroundImage: `url(${Fusion})` }}
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-xl sm:text-2xl font-bold text-white tracking-wider'>
                                    Next.js Video Conference WebApp
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href='https://fusionroom.vercel.app/'
                                        target="_blank" rel="noopener noreferrer">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href='https://github.com/salaj80/FusionRoom'
                                        target="_blank" rel="noopener noreferrer">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work

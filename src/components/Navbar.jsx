import React,{useState} from 'react'
import {FaBars, FaTimes, FaGithub,FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from "../assets/logo.png"
import {Link} from 'react-scroll'
import Resume from '../assets/Dimitar Lazarov-CV.pdf'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192f] text-gray-300'>
      <div>
        <img src={logo} alt='Logo' style={{width: "50px"}}/>
      </div>
    {/* menu */}
        <ul className='hidden md:flex'>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li><Link to="work" smooth={true} duration={500}>Work</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
    {/* hamburger */}
    <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/>}
    </div>
    {/* mobile menu */}
    <ul className={!nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center"}>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
    </ul>
    {/* icons */}
    <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/lazarov-dimitar/' target="_blank" rel="noopener noreferrer">LinkedIn<FaLinkedin size={30}  className="mr-[-10px] lg:mr-0 duration-300"/>
                </a>
            </li>
            <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/salaj80' target="_blank" rel="noopener noreferrer">GitHub<FaGithub size={30}  className="mr-[-10px] lg:mr-0 duration-300"/>
                </a>
            </li>
            <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                <a className='flex justify-between items-center w-full text-gray-300' href={Resume} download='Dimitar Lazarov-Resume' target="_blank" rel="noopener noreferrer">Resume<BsFillPersonLinesFill size={30} className="mr-[-10px] lg:mr-0 duration-300"/>
                </a>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar

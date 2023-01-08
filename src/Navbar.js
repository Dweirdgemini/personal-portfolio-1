import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram,} from 'react-icons/ai'
export default function Navbar(){
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-sm px-8 md:px-20 lg:px-40 py-4 flex justify-between items-center z-20">
            <h1 className="font-burtons text-lg"></h1>
            <ul className="flex items-center space-x-6">
                <li><BsFillMoonStarsFill /></li>
                
                <a className="px-4 py-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 bg-blue-300 rounded-md ml-8 text-white" href="#">Resume</a>
                <div className='flex space-x-4'>
                <a href='https://www.linkedin.com/in/joshua-nwachuku-62a639196'>
                <AiFillLinkedin className='w-16 h-16'/>
                </a>
                <a href='https://github.com/Dweirdgemini'>
                <AiFillGithub  className='w-16 h-16'/>
                </a>
                <a href='https://www.instagram.com/mehh_gemini/'>
                <AiFillInstagram  className='w-16 h-16' />
                </a>
                </div>
            
            </ul>
        </nav>
    )
}
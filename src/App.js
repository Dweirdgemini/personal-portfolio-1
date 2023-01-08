import { useState } from 'react';
import './App.css';
import Navbar from './Navbar'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail, AiFillEnvironment, AiFillPhone} from 'react-icons/ai'

function App() {
  return (
    <main className='px-8 md:px-20 lg:px-40'>
    
    <Navbar />

    <section id='home' className='min-h-screen text-center flex flex-col justify-center '>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-46 h-56 relative overflow-hidden md:h-40 md:w-40 mb-2">
          <img src='/avatar.png' className="w-full h-full" layout="" objectFit="cover" />
        </div>
        <h1 className='text-3xl md:text-5xl font-medium text-teal-500'>Nwachuku Ekelemchi Joshua</h1>
        <h3 className='text-xl md:text-2xl'>Front-end developer</h3>
        <p className='text-md py-1 text-gray-800 md:text-xl'>Enthusiastic and motivated self-learning about information technology. Focused on Mobile development, and web development. Now I am looking for more experience in my field. </p>
    </section>

    <section id='service' className=''>
      <h1 className='text-xl font-medium'>Career Objective</h1>
      <p className='mt-1 text-md'>Experienced in building mobile-first, responsive websites and web applications using analytical skills for optimal problem solving.</p>


      
    </section>

    <section id='portfolio' className='mt-10'>
      <h1 className='text-xl font-medium'>Portfolio</h1>
      <p className='mt-1 text-md'>Here are some projects that I have managed.</p>
      <div>
      <div className='flex flex-col md:flex-row gap-8 mt-4'>
        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='https://source.unsplash.com/random' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Dasar Pemrograman Javascript</h1>
            <p className=''>Dicoding Indonesia</p>
            <p className='text-sm text-gray-500'>May 2023</p>
          </div>
        </div>
      </div>
      </div>
    </section>

    <section id='license' className='mt-10'>
      <h1 className='text-xl font-medium'>License & Certifications</h1>
      <p className='mt-1 text-md'>Here are some of the certifications I have.</p>
      
      <div className='flex flex-col md:flex-row gap-8 mt-4'>
        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='https://source.unsplash.com/random' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Dasar Pemrograman Javascript</h1>
            <p className=''>Dicoding Indonesia</p>
            <p className='text-sm text-gray-500'>May 2023</p>
          </div>
        </div>

        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='https://source.unsplash.com/random' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Dasar Pemrograman Javascript</h1>
            <p className=''>Dicoding Indonesia</p>
            <p className='text-sm text-gray-500'>May 2023</p>
          </div>
        </div>

        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='https://source.unsplash.com/random' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Dasar Pemrograman Javascript</h1>
            <p className=''>Dicoding Indonesia</p>
            <p className='text-sm text-gray-500'>May 2023</p>
          </div>
        </div>
      </div>

    </section>
    
    <section id='honor' className='mt-10'>
    <h1 className='text-xl font-medium'>Honors & Rewards</h1>
    <p className='mt-1 text-md'>Here are some of the honor and rewards I have.</p>

    <div className='flex rounded shadow-md flex-col md:flex-row px-2 py-4'>
      <div className='pl-4 mt-2 md:w-3/6'>
        <p className="font-bold">Top 10 SELEKNAS Asean Skill Competition 2022</p>
        <p className='text-gray-500'>Issued by KEMENAKER RI</p>
        <ul className='list-disc pl-4'>
          <li>Linux Server</li>
          <li>Windows Server</li>
          <li>Linux Routing</li>
          <li>Cisco Troubleshooting</li>
          <li>Cisco Network Analysis</li>
          <li>Network and System Programmabillity</li>
          <li>Containerized Service</li>
        </ul>
      </div>
      <div className='pl-4 mt-2 md:w-3/6'>
        <p className="font-bold">3rd Place Winner of IT Network System Administration - LKS Jawa Tengah 2022</p>
        <p className='text-gray-500'>Issued by KEMENDIKBUD RI</p>
        <ul className='list-disc pl-4'>
          <li>Linux Server</li>
          <li>Windows Server</li>
          <li>Cisco Configuration</li>
          <li>Cisco Troubleshooting</li>
          <li>Network and System Programmabillity</li>
          <li>Containerized Service</li>
        </ul>
      </div>
      <div className='pl-4 mt-2 md:w-3/6'>
        <p className="font-bold">1st Place winner of IT Network System Administration - LKS Kab. Tegal 2022</p>
        <p className='text-gray-500'>Issued by KEMENDIKBUD RI</p>
        <ul className='list-disc px-4'>
          <li>Linux Server</li>
          <li>Cisco Configuration</li>
        </ul>
      </div>
    </div>
    
    </section>

    <section id="footer" className='mt-5 rounded bg-black py-8 px-8'>
      <div className='text-white md:text-center'>
        <h1 className='font-medium text-lg'>Contact Me</h1>
        <p>Wanna talk anything?</p>

        <ul className='md:flex justify-center gap-4'>
          <li className='flex items-center gap-2'>
            <AiFillMail />
            <p>damasukmath@gmail.com</p>
          </li>
          <li className='flex items-center gap-2'>
            <AiFillEnvironment />
            <p>Kab. Tegal</p>
          </li>
          <li className='flex items-center gap-2'>
            <AiFillPhone/>
            <p>0858-0058-9558</p>
          </li>
        </ul>

        <div className='flex text-xl text-white gap-4 mt-2 md:justify-center'>
          <AiFillLinkedin /> 
          <AiFillGithub />
          <AiFillInstagram />
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>

        <p className="text-center text-sm text-gray-300 sm:text-center">
          © 2022
          <a href="https://dendi.ninja"> Damasukma Trihanandi</a>. All Rights Reserved.
        </p>

      </div>
      
    </section>

    </main>
  );
}

export default App;

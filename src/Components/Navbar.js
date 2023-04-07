import React from 'react'
import {useState,useEffect} from "react";


import facebookIcon from "../assets/social-media-icons/facebook_32x32.png"
import tiwterIcon from "../assets/social-media-icons/twitter_32x32.png"
import emailIcon from "../assets/social-media-icons/email_32x32.png"
const Navbar = ({acc,set}) => {

    const [toggle, setToggle] = useState(false);
    const isConnected=Boolean(acc[0]);
  
    async function connectAccount(){
        if(window.ethereum ){
            const accounts= await window.ethereum.request({
                method:"eth_requestAccounts",
            });
            set(accounts);
            
        }
    }
  return (
    <nav class=" border-gray-200 px-2 sm:px-4 py-2.5 rounded">
  <div class="container flex flex-wrap items-center justify-between mx-auto">

      
          <div className='flex items-center space-x-8'>
                <img src={facebookIcon} className='w-10 h-10' alt="" />
                <img src={emailIcon} className='w-10 h-10' alt="" />
                <img src={tiwterIcon}  className='w-10 h-10' alt="" />
          </div>
     
            

    <button data-collapse-toggle="navbar-default" onClick={(e)=>{setToggle(!toggle)}} type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class={`w-screen  justify-center md:flex  md:w-auto ${toggle? 'flex' : 'hidden'}`} id="navbar-default">
      <ul class="flex flex-col items-center  p-4 mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium  text-white">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">About</a>
        </li>
        
        <li>
          <a href="#" class="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Mint</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Team</a>
        </li>
        <li>
            {isConnected ? (
                <div className='text-yellow-500'>Connected ! </div>
            ) :(
                <button type="button" onClick={connectAccount} className="bg-yellow-500 p-5">Connect your Wallet</button>
            )}
        </li>
       
      </ul>
    </div>
  </div>
</nav>
   
    

  )
}

export default Navbar

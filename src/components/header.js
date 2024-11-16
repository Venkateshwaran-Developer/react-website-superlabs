import React,{useState} from 'react'
import logo from '../img/logo.png';
import './header.css';

function Header() {
  const [isOpen, setIsOpen] = useState("");

  const toggleMenu =()=>{
      setIsOpen("active");
  };
  const closeMenu =()=>{
    setIsOpen("");
};
  

  return (
    <header>
      <div className='flex sm:flex-col md:flex-col lg:flex-row justify-between items-center mx-36 text-gray-500 border-b-[1px] border-gray-300'>
      
        <div className='my-2'>        
          <span id="top-text">World's Largest Medical Equipment Market Place</span>
          </div>
          <div className='space-x-2' >
            <a href="https://1mdm.com/index.php?route=account/account"><span className='hover:text-red-600'>My account |</span></a>
			      <a href="contact.php"><span className='hover:text-red-600'>Contact Us</span></a>
          </div>

        </div>
    
      
        <nav className='flex w-full h-20  '>
        <div className='flex  lg:flex-row justify-between items-center px-40 shadow-lg w-full'>
            <div className=''>
              <img src={logo} alt='logo1'/>
            </div>
            <div className={`nav_items${isOpen} flex flex-row  text-gray-500 space-x-10`}>
            <button onClick={closeMenu} className='icon lg:hidden'>
                    <box-icon name='x' ></box-icon>
            </button>

            <p className='cursor-pointer hover:text-red-600'>About us</p> 
            <p className='cursor-pointer hover:text-red-600'>Our Story</p>
            <p className='cursor-pointer hover:text-red-600'>Sell on 1MDM</p>
            <p className='cursor-pointer hover:text-red-600'>Pricing</p>
            </div>
            <button onClick={toggleMenu} className='icon lg:hidden'>
                   <box-icon name='menu'></box-icon>
            </button>
            
                       
          </div>
          
         
                

        </nav>
    </header>
   
  )
}

export default Header;
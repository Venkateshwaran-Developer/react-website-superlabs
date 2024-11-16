import React from 'react';
import logo_white from '../img/logo-white.png';
import footer_banner from '../img/footer-banner.png';

function Footer() {
  return (
    <div>
      <div className='' >      
        <div className='absolute h-auto w-full ' >
        <img className=' h-[350px] w-full' alt='footer1' src={footer_banner}/>

      </div>
      <div className='relative flex flex-col justify-center items-center w-full'>
        <h1 className='text-3xl font-bold text-white py-20'>Ready to Grow Your Business?</h1>
        <div className='flex flex-row space-x-3 pb-20' >
          <a href="pricing.php"><button className='bg-white text-xl py-2 px-4 text-red-800 rounded-full border-2 hover:text-white hover:bg-transparent ' type="button" >Start selling</button></a>
          <br/>
          <a href="https://wa.me/+919820045154" ><button className='bg-transparent text-xl py-2 px-4 text-white rounded-full border-2 border-white hover:text-red-800 hover:bg-white' type="button" >Chat with consultant</button></a>
          <br/>
        </div>
      </div>
      </div>

    <div className='relative grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start place-items-center bg-black text-white py-10'>
        <div className="">
            <img className="logo" src={logo_white} alt="1mdm"/>
            <br/>
            <p className=' text-gray-400' ><br/>One Medical Devices<br/> Market Place</p>
        </div>
        <div className='flex flex-col justify-start sm:pb-10 md:pb-10 items-start self-start p-0 m-0 place-content-start place-items-start justify-items-start' >
            <h5 className='text-2xl font-bold'>Platform</h5>
            <br/>
            <a href="seller.php"><p className='py-2 text-gray-400' >Sell on 1MDM </p></a> 
            <a href="pricing.php"><p className='py-2 text-gray-400'>Pricing </p></a>
            <a href="index.php"><p className='py-2 text-gray-400'>About Us </p></a>
            <a href="our-story.php"><p className='py-2 text-gray-400'>Our Story </p></a>
            <a href="https://superlabs.co/careers.php" ><p className='py-2 text-gray-400'>Careers </p></a>
            <a href="https://1mdm.com/index.php?route=extension/maza/blog/home"><p className='py-2 text-gray-400'>Blog </p></a>
            <a href="https://1mdm.com/index.php?route=product/manufacturer"><p className='py-2 text-gray-400'>Brands </p></a>
         </div>
         <div className="link-section">
                <h5 className='text-2xl font-bold'>Press Room</h5>
                <br/>
                <a href="press.php"><p className='py-2 text-gray-400'>Images & B-roll</p></a>
                <br/>
                <h5 className='text-2xl font-bold'>Policies</h5>
                <br/>
                <a href="https://1mdm.com/terms-of-service"><p className='py-2 text-gray-400'>Terms of Service</p></a>
                <a href="https://1mdm.com/privacy-policy"><p className='py-2 text-gray-400'>Privacy Policy </p></a>
                <a href="https://1mdm.com/delivery-information"><p className='py-2 text-gray-400'>Delivery Information</p></a>
                <a href="https://1mdm.com/delivery-information"><p className='py-2 text-gray-400'>Cookie Policy</p></a>
        </div>
         
        <div>
                <h5 className='text-2xl font-bold'>Reach Us</h5>
                <br/>
                <a href="https://1mdm.com/corporate-information"><p className='py-2 text-gray-400' >Corporate Information</p></a>
                <a href="contact.php"><p className='py-2 text-gray-400'>Contact Us </p></a>
        </div>
        <br/>

    </div> 
    <div className='relative flex justify-center items-center h-20 w-full shadow-lg'>
        <p>© 2024 1MDM ⚡ by SuperLabs</p>
    </div>   
    </div>
  )
}

export default Footer;
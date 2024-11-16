import React from 'react';
import banner_img from '../img/banner.png';
        

function Body() {



  return (
    <div className='h-auto '>
        <section>
        <div className='absolute  w-full'>
            <img className='h-[500px] w-full ' src={banner_img} alt='banner12'></img>
        </div>
        <div className='relative h-[500px] flex sm:flex-col md:flex-col lg:flex-row justify-between items-center sm:px-10 lg:px-40  '>
            
            <div className=''  >
              <h4 className='text-2xl font-bold' >Sell on 1mdm.com</h4>
              <h1 className='text-5xl font-bold' >Reach millions of B2B buyers<br/> globally</h1>
              <a href="pricing.php"><button type="button" className='bg-red-600 rounded-full text-white px-2 py-1 mr-4 mt-12' >Start selling</button></a>
              <a href="https://wa.me/+919820045154"><button  className='bg-white border-2 border-red-500 text-red-600 rounded-full hover:bg-red-600 hover:text-white px-2 py-1' type="button" >Chat with consultant</button></a>
            </div>
            
            <div className='  '>
              <h3 className='text-3xl font-bold'>26000000</h3>
              <p className=''>active buyers globally</p>
              <br/>
              <h3 className='text-3xl font-bold'>400000</h3>
              <p>product inquiries daily</p>
              <br/>
              <h3 className='text-3xl font-bold'>200</h3>
              <p>countries and regions represented</p>
            </div>
          

          </div>
          </section>
          <section className='relative w-full'>
                <div className=' h-screen w-full mt-10' >
                    <h2 className='flex justify-self-center sm:px-10 font-bold w-auto text-4xl pb-10 '>1mdm.com is a leading ecommerce platform that <br/> helps SMEs go global</h2>
                    
                    <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2' >
                        <div>
                            <div className="px-10">
                                <iframe className='w-full h-100' src="https://www.youtube.com/embed/TN7iJyc5Uks" title="YouTube video" allowfullscreen></iframe>
                            </div>
                           
                        </div>
                        
                        <div className='relative sm:px-5 flex flex-col  justify-center items-center space-y-12' >
                        <p >Connect with millions of business buyers from around the world.</p>
                        <br/>
                        <p >Get the tools and know-how to build a successful ecommerce presence for your business.</p>
                        <br/>
                        <p >Pocket more from each sale, with take rates as low as 0% in some cases.</p>
                    </div>
                    </div>
                </div>
            </section>
            <section className='relative h-auto md:mt-72 sm:mt-96 lg:mt-[-80px] w-full' >
                <div className='flex flex-col justify-center items-center sm:py-10 md:h-72 lg:h-72 w-full bg-red-600 text-white'>
                <h1 className='sm:px-5 text-4xl font-bold '>Largest number of products & categories of <br/>medical devices on a single place - 1mdm.com</h1>  
                <br/>  
                <h5 className='sm:px-5 text-xl'> Connect with buyers worldwide for your product &  start selling now.</h5>
                </div>

            </section>
           
            
    </div>
  )
}

export default Body;
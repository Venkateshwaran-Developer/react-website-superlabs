import React, { useState } from 'react';
import slider1 from '../img/slider-1.jpg';
import slider2 from '../img/slider-2.jpg';
import slider3 from '../img/slider-3.jpg';
import slider4 from '../img/slider-4.jpg';

function Slider() {

    const sliders = [
        { 
        id: 1,
        image:slider1,
        content : " Mr David runs a manufacturing company that works in this field of medical devices.With administrative and production across the country. With full respect for environment and several years experience using IP systems that are conventional"
     },
     {
        id: 2,
        image: slider2,
        content : "Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our company's team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.",

     },
     {
        id: 3,
        image: slider3,
        content : "Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line",
      },
      {
        id: 4,
        image: slider4,
        content : "LTA International Global Services LLC is a Florida-based export management company that sells top Medical device products from major US brands to importers and distributors around the globe. Founded in 1994 by Loyd, LTA's long-standing expertise in logistics and pricing has made it one of the most successful international trade businesses in the USA."

      }

    ]

    const [current , setCurrent] = useState(0);
    const length = sliders.length;

    let previousSlide = () => {
        setCurrent(current===0 ? length-1 : current-1)
      };
    
      let nextSlide = () => {
        setCurrent(current===length-1 ? 0 : current+1)
      };

    


  return (
    <section className=' overflow-hidden relative  duration-700 ease-in-out'>
    
    <div className=" relative  bg-slate-200 ">
              <h1 className='flex items-center justify-center md:py-10 sm:py-20 sm:px-5 lg:pt-10 text-3xl text-red-800 font-bold '>
                            Success stories from 1mdm.com sellers
              </h1>
                <div >
    {
                    sliders.map((item,index) => index === current && <div className='flex  lg:flex-row h-screen w-screen   justify-center items-center '>
                         <div key={item.id} className=' grid md:grid-cols-1 lg:grid-cols-2 place-items-center sm:mb-20 md:mb-10  lg:h-[650px] w-[1250px] rounded-3xl shadow-lg  bg-white' >                   
                                    <div className='flex flex-col text-xl font-normal p-10 '>
                                        <box-icon size='lg' color='red' type='solid' name='quote-left'></box-icon>
                                        <p className=''>
                                        {item.content}
                                        </p>   
                                    </div>
                                    <div>
                                        <img className='sm:h-[300px] md:h-[350px] md:w-[400px] lg:h-[650px] lg:w-[650px] rounded-2xl' src={item.image} alt='sliderimg' ></img>
                                    </div>               
                                </div>
                                </div>
                                
                    )
                                    
                }

            </div>
                <div className='absolute  top-0 h-full w-full justify-between items-center flex pl-20 pr-16'>
                                      <button onClick={previousSlide}>
                                       <box-icon color='red' size='md' type='solid' name='left-arrow-circle'></box-icon>
                                      </button>
                                      <button onClick={nextSlide}>
                                        <box-icon color='red' size='md' type='solid' name='right-arrow-circle'></box-icon>
                                      </button>
                                </div>
                                
            </div>
    
    </section>
  )
}

export default Slider;

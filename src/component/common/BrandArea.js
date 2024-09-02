import React from 'react'
import vedicmaths from '@/styles/img/home/vedicmaths.png'
import abacus from '@/styles/img/home/abacus.png'
import talkright from '@/styles/img/home/talkright.png'
import Image from 'next/image'
import Slider from 'react-slick'
// import { tree } from 'next/dist/build/templates/app-page'
function BrandArea() {



    const testimonialSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                    dots: false,
                }
            }
        ]
    };

  return (
    <div>
       {/* <div class="brand-area pb-65 pt-65"> */}
            <div class="container pb-40 pt-40">
                {/* <div class="row brand-active "> */}
                <Slider {...testimonialSettings} >
                {/* <marquee> */}
                    <div class="col-xl-2 text-center">
                        <div class="single-brand text-center">
                            <Image src={vedicmaths} alt="write right"/>
                        </div>
                    </div>
                    {/* </marquee> */}
                    <div class="col-xl-2 text-center">
                        <div class="single-brand">
                            <Image src={abacus} alt="write right"/>
                        </div>
                    </div>
                    <div class="col-xl-2 text-center">
                        <div class="single-brand">
                            <Image src={talkright} alt="write rigiht"/>
                        </div>
                    </div>

                    <div class="col-xl-2 text-center">
                        <div class="single-brand text-center">
                            <Image src={vedicmaths} alt="write right"/>
                        </div>
                    </div>
                    <div class="col-xl-2 text-center">
                        <div class="single-brand">
                            <Image src={abacus} alt="write right"/>
                        </div>
                    </div>
                    <div class="col-xl-2 text-center">
                        <div class="single-brand">
                            <Image src={talkright} alt="write rigiht"/>
                        </div>
                    </div>
                    
                    </Slider>
                    
                   
                {/* </div> */}
            </div>
        {/* </div> */}
     
    </div>
  )
}

export default BrandArea;
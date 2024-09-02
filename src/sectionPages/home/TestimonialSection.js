import React from 'react';
import Slider from "react-slick";
import quote from '@/styles/img/testimonial/test-2.png';

import authImg from '@/styles/img/testimonial/Kenny-Suresh.png';
import authImg2 from '@/styles/img/testimonial/MUKESH-KUMAR-REKHA.png';
import authImg3 from '@/styles/img/testimonial/Masarrat-Acharya.png';
import authImg4 from '@/styles/img/testimonial/Mittal-chavda.png';
import authImg5 from '@/styles/img/testimonial/Subeesh-Kumar.png';
import authImg6 from '@/styles/img/testimonial/Ujjawal.png';
import authImg7 from '@/styles/img/testimonial/harsha-joshi.png';
import authImg8 from '@/styles/img/testimonial/vibhute.png';
import authImg9 from '@/styles/img/testimonial/Hetal-Ben.png';
import SingleTestimonial from '@/component/Testimonial/SingleTestimonial';
// import SingleTestimonial from '@/component/Testimonial/SingleTestimonial';


function Testimonial () {
    

    const testimonialSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 4000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <div className="rs-testimonial main-home pt-50 pb-130 md-pt-40 md-pb-10" id='parent_testimonial'>
                <div className="container">
                    <div className="sec-title  mb-30 md-mb-30 text-center">
                        <h3 className="title fs-3 family ">
                        PARENT&apos;S TESTIMONIALS
                        </h3>
                        <div className="desc ">

                        </div>
                    </div>
                    <Slider {...testimonialSettings} >
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg}
                            Title={<>Pranay Shinde, Pune Maharashtra</>}
                            Designation="Maharashtra"
                            Description="My son’s illegible handwriting was a concern for me, when I visited Write Right; they offered their 7 days Handwriting improvement program for him. I was not very confident about the course but kudos to Write Right, in just 7 days my son’s handwriting transformed from illegible to wow..
                            Highly impressed with the extraordinary results. Thanks Write Right.
                            "
                            
                            disNum='100'
                        />  

                       
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg2}
                            Title="Manohar Singh, Kanpur Utter Pradesh"
                            Designation="---"
                            Description="When I visited the Write Right center, the counselor showed me some handwriting samples of their students before the course and after course. I could not trust the improvement shown is real, but somehow the counselor convinced me to join the 7 days Handwriting improvement program..
                             I must say that it was a miraculous course of 7 days, which completely transformed my Handwriting. I am extremely happy with the results . . ."
                            disNum='80'
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg3}
                            Title="Dr. P K Rajeshwari, Coimbatore Tamilnadu"
                            Designation="---"
                            Description="Now, I agree that handwriting can be improved at any age. Write Right absolutely changed my mind. Being in the medical profession, I realized that the small illegibility in writing the prescription can put patients’ lives in danger.
                           So I took the help of Write Right for removing the illegibility of Handwriting, and I proudly say my handwriting is changed dramatically, thanks Write Right. . ."
                           disNum='100'
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg4}
                            Title="J K Sharma, Patna Bihar"
                            Designation="---"
                            Description="Speed has been a major problem for my younger sister, as she used to miss her exam due to slow speed. I came to know about Write Right’s speed writing program. With great reluctance I decided to get her through their Speed writing program.. 
                            I will say it helped her a lot and she is now able to finish her exam on time.  Her writing speed has improved greatly. Thanks Write Right. . ."
                           disNum='90'
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg5}
                            Title="Pramjeet Kaur, Chandigarh Panjab"
                            Designation="---"
                            Description="My daughter Nimrit is good in studies, but always got fewer marks due to her slow writing. Being a parent, I was worried about her upcoming board exams. My colleague suggested me to enroll her at speed writing program of Write Right. .
                            Within 15 days of enrolling, her writing speed improved remarkably. I am thankful to the trainer of Write Right. . ."
                           disNum='100'
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg6}
                            Title="Ananya Sachdeva, Bhopal Madhya Pradesh"
                            Designation="---"
                            Description="When I showed my homework copy to my class teacher, she was not ready to accept that it was my handwriting. I had no choice but to write a paragraph to convince her. 
                             I will never forget because this incident happened with me after I completed my Handwriting Improvement program at a training center of Write Right. Even after years I still have a good handwriting. . ."
                           disNum='100'
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg7}
                            Title="Venkat Raju, Visakhapatnam Andhra Pradesh"
                            Designation="---"
                            Description="My daughter has developed a wrong pencil grip, due to this she was struggling with her writing; her handwriting was horrible, and slow too. We discussed all the things with the Write Right Trainer. The process took two months, but the result was satisfactory. 
                            Now her handwriting is not only legible but, her pencil grip is also correct. I am thankful to Avinash Sir. . ."
                            disNum='90'
                        />
                        {/* <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg8}
                            Title="Harsha Joshi"
                            Designation="---"
                            Description="Due to Covid, I had to shift my son from regular to Online Abacus classes. I observed, he is learning well from home too."
                            disNum='100'
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={authImg9}
                            Title="MUKESH KUMAR/REKHA"
                            Designation="---"
                            Description="I always wanted my son to do better in Mathematics. With the help of Mastermind Abacus, I can see Rudra doing wonders. This time he got School Mathematics Olympiad trophy too."
                            disNum='100'
                        /> */}
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Testimonial
import Image from 'next/image'
import React from 'react'
import image from '@/styles/img/history/importance_of_handwriting.jpg'

function Importance() {
    return (
        <div>
            <section className="events-details-area pt-50 pb-10">
                <div className="container">

                    <div className="row">
                        <div className="col-xl-12">
                            <div className="events-details-wrapper mb-30">
                                <div className="events-contents-02 mb-35 text-center">
                                    <h2>Importance Of Handwriting</h2>
                                    <p>Why is Handwriting important even in today&#39;s hi-tech era of communication?</p>

                                </div>


                            </div>



                            <div className="importance-area pb-30 text-justify">
                                <div className="row">

                                    <div className="col-xl-6 col-lg-6">
                                        <div className="events-contents-02">

                                            <p className="text-justify">When anybody writes, it is just not the use of a pen and pencil on paper, but it is a process that involves coordination between the mind and motor actions
                                                of the brain. The brain conceives a thought and directs hands and fingers to reproduce these thoughts in the form of words or sentences with the help of a writing instrument on a writing object.</p>
                                            <p className="text-justify">We can infer from the above statement that the reverse process is also valid.</p>
                                            <p className="text-justofy">That is to say, one with good handwriting skills has been invariably observed to have a better thought process. We
                                                can also substantiate from the above statement that the top 10 students of a class usually have highly developed
                                                writing skills.
                                                Handwritten communication being the most primitive media of expressing oneself, has been proved to be an
                                                effective process of learning a language in terms of correct spellings, massive vocabulary, and outstanding
                                                communication abilities, both through written and verbal forms. </p>


                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="map-area ">
                                            <div className="text-center md-pt-10 md-pb-30">
                                                <Image className="rounded" src={image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 events-contents-02">

                                        <p className="text-justify"> This is proves the importance of Handwriting
                                            even in today hi-tech era.
                                            The fact is that we are living in a high-tech era. The pen seems to be replaced by the thumb, touch screens, and
                                            keyboards. But, the fact remains that you need to be familiar with every letter and word to reproduce thoughts
                                            through typing. The best way to learn handwriting is to use a pencil or pen during school days.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="black1-bg pt-55 pb-55" style={{backgroundColor:"#e3e2e2"}}>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8 col-lg-8 col-md-12">
                            <div class="search-area">
                                <div class="text-black text-center  " style={{ fontSize: "35px", fontWeight: "700" }}  >Want to improve your handwriting? </div>
                            </div>
                        </div>



                        <div class="col-xl-4 col-lg-4 col-md-12 ">
                            <div class="search-area text-left">

                                <a class="c-btn btn-blue-style" href="">Click Here <i class="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Importance

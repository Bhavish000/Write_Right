import Image from 'next/image'
import React from 'react'
import img1 from '@/styles/img/worksheet/dotted.jpg'
import img2 from '@/styles/img/worksheet/Handwriting_Cursive.gif'
import img3 from '@/styles/img/worksheet/Handwriting_print.gif'
import img4 from '@/styles/img/worksheet/Handwriting_spacing_print_0.gif'
import img5 from '@/styles/img/worksheet/Handwriting_spacing_print_1.gif'
import img6 from '@/styles/img/worksheet/four_line.jpg'
import img7 from '@/styles/img/worksheet/single_line.jpg'
import img8 from '@/styles/img/worksheet/solid.jpg'
import img9 from '@/styles/img/worksheet/tall.jpg'
import img10 from '@/styles/img/worksheet/two_line.jpg'
import img11 from '@/styles/img/worksheet/wide.jpg'

function WorkSheetForm() {
    return (

        <>
            <section className="events-details-area pt-70 pb-70" style={{ backgroundColor: "#e3e2e2" }}>
                <div className="container">
                    <div className="row  " style={{ border: "1px solid black" }} >
                        <div className=" d-flex flex-column align-items-center justify-content-between mt-4 ml-4 mb-30 mr-4">
                            <h3 className="course-title-03 mb-20">Handwriting Options</h3>
                            <p className="mb-25">This page allows you to create a worksheet of text for printing practice. Enter the text you want to be on the page in the large box below, and it will be rendered using traditional print lettering.</p>



                            <div className="contact-form-area">
                                <form action="" className="subscribe  contact-form p-3">
                                    <div className="row">
                                        <div className="col-xl-4 sheet-label-align text-center">
                                            <label className=" mt-20 fs-3">
                                                Page Title
                                            </label>
                                        </div>
                                        <div className="col-xl-8">

                                            <div>
                                                <input className="form-control inputTag" name="page_title" id="page_title" type="text" required placeholder="Please enter title" />
                                            </div>
                                        </div>

                                        <div className="col-xl-4  sheet-label-align text-center">
                                            <label className=" mt-20 fs-3">
                                                Instruction
                                            </label>
                                        </div>
                                        <div className="col-xl-8">

                                            <div>
                                                <input className="form-control inputTag" name="page_instruction" id="page_instruction" type="text" placeholder="Please enter instructions" />
                                            </div>
                                        </div>
                                        <div className="col-xl-4 text-center ">
                                            <label className="fs-3 mt-20">
                                                Select Writing Style
                                            </label>
                                        </div>
                                        <div className="col-xl-8">

                                            <div className="input-text inputTag row">
                                                <div className="col-xl-4"><input className="" type="radio" name="writing_style" id="writing_style" value="Cursive" /> Cursive <br /><Image src={img2} alt="write right" /> <br /></div>
                                                <div className="col-xl-4"><input className="" type="radio" name="writing_style" id="writing_style" checked value="Print" /> Print  <br /><Image src={img3} alt="write right" /></div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4  text-center">
                                            <label className="fs-3 mt-20">
                                                Select Letter Type
                                            </label>
                                        </div>
                                        <div className="col-xl-8">

                                            <div className="input-text inputTag row">
                                                <div className="col-xl-4">	<input className="" type="radio" name="letter_type" value="Solid" /> Solid <br /><Image src={img8} alt="write right" /></div>
                                                <div className="col-xl-4">	<input className="" type="radio" name="letter_type" checked value="Dotted" /> Dotted <br /><Image src={img1} alt="write right" /></div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4  text-center">
                                            <label className="fs-3 mt-20">
                                                Select Page Orientation
                                            </label>
                                        </div>
                                        <div className="col-xl-8">

                                            <div className="input-text inputTag row">
                                                <div className="col-xl-4"><input className="" type="radio" name="page_orientation" checked value="Tall" /> Tall<br /><Image src={img9} alt="write right" /></div>
                                                <div className="col-xl-4"><input className="" type="radio" name="page_orientation" value="Wide" /> Wide<br /><Image src={img11} alt="write right" /></div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4  text-center">
                                            <label className="fs-3 mt-20">
                                                Select Page Type
                                            </label>
                                        </div>
                                        <div className="col-xl-8">

                                            <div className="input-text inputTag row">
                                                <div className="col-xl-4"><input className="" type="radio" name="page_type" checked value="Four Line" /> Four Line <br /><Image src={img6} alt="write right" /></div>
                                                <div className="col-xl-4"><input className="" type="radio" name="page_type" value="Two Line" /> Two Line <br /><Image src={img10} alt="write right" /></div>
                                                <div className="col-xl-4"><input className="" type="radio" name="page_type" value="Single Line" /> Single Line <br /><Image src={img7} alt="write right" /></div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4  text-center">
                                            <label className="fs-3 mt-20">
                                                Select Line Spacing
                                            </label>
                                        </div>
                                        <div className="col-xl-8">

                                            <div className="input-text inputTag row">
                                                <div className="col-xl-4"><input className="" type="radio" name="page_line_space" checked value="Continue" /> Continue<br /><Image src={img4} alt="write right" /></div>
                                                <div className="col-xl-4"><input className="" type="radio" name="page_line_space" value="Blank for Copying" /> Blank for Copying<br /><Image src={img5} alt="write right" /></div>
                                            </div>
                                        </div>


                                        <div className="col-xl-12  ">
                                            <label className=" pl-15 fs-5 mt-10 mb-10">
                                                Enter up to 50,000 characters. Long lines will wrap, and blank lines will be blank on the worksheet.
                                            </label>
                                        </div>




                                        <div class="row">
                                            <div class="col-xl-12">
                                                <div class="contact-form-area">
                                                    <form action="" class="subscribe contact-post-form contact-form">
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <div class="input-text message-text">
                                                                    <textarea name="" id="" cols="30" rows="10" placeholder="Write  Message"></textarea>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="input-text">
                                                                    <input class="form-control" type="text" placeholder="Full Name Here" />
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="input-text email-text">
                                                                    <input class="form-control" type="text" placeholder="Email Here" />
                                                                </div>
                                                            </div>


                                                            <div class="col-12 mt-3">
                                                                <div class="lg-btn lg-btn-03  text-center">
                                                                    <a class="c-btn" href="#">send message <i
                                                                        class="fa fa-long-arrow-alt-right"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>





                                        {/* <div className="col-xl-12  ">
                                        <label className="">
                                          Enter up to 50,000 characters. Long lines will wrap, and blank lines will be blank on the worksheet.
                                        </label>
                                    </div>
                                    <div className="col-12 mb-10">
                                        <div className="input-text  message-text">
                                            <textarea name="handwriting_text" id="handwriting_text" cols="30" rows="10" placeholder="Write  Message"></textarea>
                                        </div>
                                    </div>
									
									
									<div className="col-xl-6  ">
                                        <label className="">
                                            Enter Name
                                        </label>
										  <div className="">
                                            <input className="form-control" type="text" name="user_name" id="user_name" placeholder="Please Enter Name"/>
                                        </div>
                                    </div>
									
									<div className="col-xl-6  ">
                                        <label className="">
                                            Enter Email ID
                                        </label>
										  <div className="">
                                            <input className="form-control" type="text" name="user_email" id="user_email"  placeholder="Please Enter Email"/>
                                        </div>
                                    </div>
									
								
									
									
                                    <div className="col-12 mt-3">
                                        <div className="lg-btn lg-btn-03 text-center">
                                           <a className="c-btn" href="#"  onclick="LoadGenerateQuestion1();">Generate Worksheet <i className="far fa-long-arrow-alt-right"></i></a>
										  {/* <!-- 	<button type="button" id="btnGenerateQuestion" className="c-btn" onclick="LoadGenerateQuestion1();" >Generate Worksheet</button>--> 
                                        </div>
                                    </div>
									
									 <div className="col-12 mt-3">
										<div className="col-12 col-md-12 mb-3 mt-3" id="divQuestionResult" > 
										</div>
                                    </div>*/}

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="events-details-area pt-50 pb-10 ">
                <div class="container">

                    <div class="row">
                        <div class="col-xl-12">
                            <div class="events-details-wrapper mb-30">
                                <div class="events-contents-02 mb-35 text-center">
                                    <h1>Handwriting Practice Worksheet for practice to excel.</h1>
                                    <p>This worksheet generator allows the teachers & the parents to create practice sheet pdf with content that interests the child. Practicing regularly will make writing legibly a habit. Therefore, the <strong>handwriting Practice</strong> worksheet is critical to ensure the students can do enough <strong>English Handwriting Practice.</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class=" pt-55 pb-55" style={{backgroundColor:"#e3e2e2"}}>
				<div class="container">
					<div class="row">
						<div class="col-xl-8 col-lg-8 col-md-12">
							<div class="search-area">
								<div class="text-black text-center  " style={{ fontSize: "35px", fontWeight: "400" }}  >Improve your handwriting within 7 to 10 days. </div>
							</div>
						</div>
						<div class="col-xl-4 col-lg-4 col-md-12 ">
							<div class="search-area text-center">

								<a class="c-btn btn-blue-style" href="">Click Here <i class="fa fa-long-arrow-right"></i></a>
							</div>
						</div>
					</div>
				</div>
			</section>
        </>
    )
}

export default WorkSheetForm

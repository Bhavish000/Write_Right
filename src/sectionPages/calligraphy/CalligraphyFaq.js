import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const CalligraphyFaq = () => {

    return (
        <React.Fragment>
            {/* Faq Part Start */}
            
            <div className="rs-faq-part style1 pt-80 pb-30 md-pt-70 md-pb-40" id='parent_faq'>
                <div className="container">
                    <div className="main-part innerpage">
                        <div className="faq-content mb-30 md-mb-30">
                            <div className="title family mb-30 md-mb-14">
                                <h2 className="text-part text-center" style={{fontWeight:"800"}}>Frequently Asked Questions </h2>
                            </div>
                            <Accordion className="accordion-style1" preExpanded={'a'}>
                                <AccordionItem className="accordion-item" uuid="a">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        How many fonts do you teach in calligraphy?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    We offer basic training in 8 historical fonts. The process gives you an insight into creating indigenous fonts of you own.   
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="b">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        Are the classes suitable for beginners with no prior experience?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    Yes, the classes are suitable for beginners with no prior experience.

                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="c">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        How long does it typically take to complete the course?

                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    The course typically takes 15 days to complete, with one-hour daily classes.

                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="d">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        What types of calligraphy styles will I learn?

                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    You will learn basic training in eight historical calligraphy fonts.

                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="e">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        Do I need to purchase any special materials or tools for the course?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    No, special materials and tools are provided as part of the exclusive course materials.

                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="f">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        Are there online or in-person class options available?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    As of now, this program is not available in online mode.


                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>

                    </div>
                </div>
            </div>

            <section class=" pt-55 pb-55" style={{backgroundColor:"F5F5F5"}}>
				<div class="container">
					<div class="row">
						<div class="col-xl-8 col-lg-8 col-md-12">
							<div class="search-area">
								<div class="text-black text-center  " style={{ fontSize: "35px", fontWeight: "400" }}  >Want to improve your handwriting? </div>
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
        </React.Fragment>

    );
}


export default CalligraphyFaq;
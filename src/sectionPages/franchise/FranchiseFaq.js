import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const FranchiseFaq = () => {

    return (
        <React.Fragment>
            {/* Faq Part Start */}

            <div className="rs-faq-part style1 pt-80 pb-30 md-pt-40 md-pb-40" id='parent_faq'>
                <div className="container">
                    <div className="main-part innerpage">
                        <div className="faq-content mb-30 md-mb-30">
                            <div className="title family mb-30 md-mb-14">
                                <h2 className="text-part text-center" style={{ fontWeight: "800" }}>Frequently Asked Questions </h2>
                            </div>
                            <Accordion className="accordion-style1" preExpanded={'a'}>
                                <AccordionItem className="accordion-item" uuid="a">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                            What makes the Write Right franchise a good investment for someone new to the education sector?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                        Write Right offers a profitable and growing business with vast possibilities. The franchise provides opportunities for growth and community service, backed by a proven and successful system.<br />
                                        <strong>Basket of Programs : </strong>
                                        Write Right offers diverse programs such as Handwriting Improvement, Speed Writing, Calligraphy, and Curriculum Books, all focused on enhancing handwriting skills and creativity.<br />
                                        <strong>Earning Opportunity : </strong>
                                        Franchisees can earn by conducting classes, organizing workshops in schools, and selling curriculum books.<br />
                                        <strong>Support System : </strong>
                                        Write Right provides comprehensive support, including unlimited free training, on-site training at minimal cost, and 24/7 operational and distribution assistance through an ERP system.


                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="b">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        Is the handwriting program limited to seasonal demand, or is there year-round interest?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    The handwriting program is a short-term course that can be managed year-round, not just during vacations. Students can easily incorporate it into their regular schedules.

                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="c">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        How does Write Right&apos;s handwriting program stand out from the handwriting training provided by schools?

                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    Write Right offers customized, expert-led training tailored to individual needs, ensuring 100% results. Unlike generic school programs, our approach teaches students “how to do it” rather than just “do it.”

                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="d">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        Can I successfully run this franchise without any prior experience in education or business?

                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    Yes, as long as you have a passion for teaching and are financially capable, you can succeed. Write Right provides comprehensive support and training to help you achieve your goals.

                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="e">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        What kind of initial and ongoing support does Write Right provide to its franchisees?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    Write Right offers unlimited free training, on-site training at minimal cost, and continuous support from day one. The support includes operational and distribution assistance through an ERP system available 24/7.

                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="f">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        What are the steps and requirements to become a Write Right franchise?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    Start by filling out the Franchise Inquiry Form on the website. The process includes a telephonic conversation, registration, payment, signing an agreement, and receiving training and support from the company.

                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>

                    </div>
                </div>
            </div>

            {/* <section class="black1-bg pt-55 pb-55">
				<div class="container">
					<div class="row">
						<div class="col-xl-8 col-lg-8 col-md-12">
							<div class="search-area">
								<div class="text-white text-center  " style={{ fontSize: "35px", fontWeight: "400" }}  >Want to improve your handwriting? </div>
							</div>
						</div>
						<div class="col-xl-4 col-lg-4 col-md-12 ">
							<div class="search-area text-center">

								<a class="c-btn btn-blue-style" href="">Click Here <i class="fa fa-long-arrow-right"></i></a>
							</div>
						</div>
					</div>
				</div>
			</section> */}
        </React.Fragment>

    );
}


export default FranchiseFaq;
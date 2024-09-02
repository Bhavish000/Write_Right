import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const HandwritingFaq = () => {

    return (
        <React.Fragment>
            {/* Faq Part Start */}
            
            <div className="rs-faq-part style1 pt-70 pb-30 md-pt-40 md-pb-40" id='parent_faq'>
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
                                        Is your program different from conventional cursive writing programs?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    Yes, our program is unique because it identifies and scientifically addresses handwriting flaws in any writing style, not just cursive. This allows us to offer personalized improvement solutions tailored to each student&apos;s specific needs, ensuring better and more lasting results.
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="b">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        What if the improvement does not happen in 7 days?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    If improvement doesn&apos;t occur within 7 days, we provide additional support and practice sessions to ensure every student achieves the desired results. Our program is designed to guarantee success with persistent efforts.

                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="c">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        Will the writing speed be affected after the training?

                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    Initially, there may be a temporary reduction in writing speed as students adjust to new techniques. However, with practice, students typically regain and often improve their writing speed while maintaining better legibility.

                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="d">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        How can my child improve handwriting in print style?

                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    Our program enhances print handwriting by identifying and correcting specific handwriting flaws without changing the writing style. Using scientifically-backed methods and personalized techniques, we help improve legibility and overall handwriting quality.

                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="e">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        Is the improvement permanent?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    Yes, the improvement is permanent with consistent practice. Our program equips students with techniques that ensure lasting handwriting improvements, provided they continue to apply what they’ve learned regularly.

                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="f">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        What age group is the program suitable for?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    Our handwriting improvement program is suitable for all ages, starting from 8 years old and above. It is designed to address and correct handwriting issues regardless of the student&apos;s age, ensuring effective results for everyone.


                                    </AccordionItemPanel>
                                </AccordionItem>
                                {/* <AccordionItem className="accordion-item" uuid="g">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        What is the cost of enrolling in the abacus training, and are there any additional fees?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    The cost of enrolling in the abacus training varies based on the country and specific location. To get detailed information about the fees , please contact Mastermind Abacus directly or fill out the inquiry form on the website. They will provide you with all the necessary details and guide you through the enrollment process.

                                    </AccordionItemPanel>
                                </AccordionItem> */}
                            </Accordion>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}


export default HandwritingFaq;
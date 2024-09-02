import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const SpeedWritingFaq = () => {

    return (
        <React.Fragment>
            {/* Faq Part Start */}
            
            <div className="rs-faq-part style1 pt-70 pb-30 md-pt-40 md-pb-20" id='parent_faq'>
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
                                        Can legibility be achieved with speed?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    Yes, the legibility and speed can go hand in hand. The concept of our speed handwriting program is to ensure good quality handwriting along with speed. Our techniques are scientifically proven to deliver 100% results.
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="b">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        How much writing speed can be increased?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    On average the speed can be leveraged by 50%. The speed varies from person to person. Every individual can achieve a different level of increase in the writing speed. But after the training writing speed is certainly going to increase.

                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="c">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        Is the result of the program permanent?

                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    The results are permanent as we teach the students based on scientifically proven techniques. The retention depends upon the capability of the students and their conscious efforts in implementing the advice into their writing.

                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="d">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        What Technique is used for increasing speed?

                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    The technology used for increasing speed is based on 3 M’s: M= Myth, M= Motivation, M= Music. We break the myth that writing in speed distorts handwriting. Our trainers are experts in motivating the students to write fast. During the speed writing course, specially created music is played that helps to enhance the writing speed.

                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="accordion-item" uuid="e">
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="card-link">
                                        Is there any defined standard for writing speed?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="card-body">
                                    Although there is no fixed standard, 25-30 words per minute are considered to be good writing speed. A writing speed that enables a student to meet the deadlines in his/her examination, without distorting the legibility, is good.

                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}


export default SpeedWritingFaq;
import React from "react";

const ClassNear = (props) => {

    const { ctaClass } = props; 

    return (
        <div className={ctaClass ? ctaClass : 'rs-cta'} >
            <div className="cta-content text-center pt-80">
                <div className="sec-title">
                    <h2 className="title family fs-2">
                    Find &apos;Handwriting Classes Near Me&apos;
                    </h2>
                    <div className="desc ">
                    Write Right has a global presence. Join the nearest <span style={{fontWeight:"700"}}> handwriting class</span> for personalized training in Hindi or English. Fill out the inquiry form, and we will guide you to the nearest center.
                    </div>

                    <div className="btn-part" >
                    <div className="readon2" >Inquiry Now</div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ClassNear;
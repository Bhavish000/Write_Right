import React from 'react'

function WritingHistory(props) {

    const { ctaClass } = props;

  return (
    <div>
        <div className={ctaClass ? ctaClass : 'rs-cta'} style={{backgroundColor:"#ffffff"}} >
            <div className="cta-content text-center">
                <div className="sec-title">
                    {/* <strong className='desc'>--- Handwriting Skills ---</strong> */}
                    <h1 className="title family ">
                    History of Writing
                    </h1>
                    <div className="desc ">
                    The History of Writing traces the development of expressing language by letters or other symbols and the studies and descriptions of these developments. Human beings started to write some 8000 years ago, in the form of symbols, and then moved on from ideographs to phonographs. These, over centuries, developed into a set pattern, which generally came to be known as “language.”Handwriting can be broadly being classified as Ancient, Medieval & Modern.
                    </div>

                    {/* <div className="btn-part" >
                    <div className="readon2" >Inquiry Now</div>
                </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default WritingHistory

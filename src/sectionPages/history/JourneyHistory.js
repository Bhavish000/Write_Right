import React from 'react'
import image from '@/styles/img/history/handwriting_journey.jpg'
import Image from 'next/image'
function JourneyHistory() {
  return (
    <div>
      <section className="events-details-area pt-70 md-pt-40 md-pb-20" style={{backgroundColor:"#e3e2e2"}}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">


              <div className="events-details-wrapper mb-30">
                <div className="events-contents-02 mb-35 text-center">
                  <h2>History of Handwriting - The Journey</h2>
                </div>

              </div>


              <div className=" pb-70 md-pb-20">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="map-area">
                      <div className="text-center">
                        <Image className="rounded responsive" src={image} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">

                    <div className="events-contents-02 md-pt-40">
                      <h3>The Ancient Developments</h3>
                      <p className="text-justify">Early <strong>History of handwriting</strong> indicates that the development started in the form of symbols in Mesopotamia, Egypt, and Indus Valley called Egyptian Hieroglyphs, Cuneiform, Indus Script, etc. Evidence confirms the origin of the early alphabetical system to the Phoenicians.
                      </p>

                    </div>
                    <div className="events-contents-02">
                      <h3>The Medieval Transformations</h3>
                      <p className="text-justify">The Phoenician alphabet system included 22 vowels-less letters around the 11th century BC. By the 8th century BC, a few consonants got dropped & the Greeks included vowels. These were the Capital letters only, but later the lower case got introduced in medieval times
                      </p>

                    </div>

                    <div className="events-contents-02">
                      <h3>Modern Adaptations</h3>
                      <p className="text-justify">The modern-day advancements in Roman Script took place in the 20th & the 21st Century. Several styles of writing got adapted. Cursive Style, Print Style, Lucida, Calligraphy, etc. The invention of various user-friendly writing instruments revolutionized Handwriting & Handwriting Skills.
                      </p>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JourneyHistory

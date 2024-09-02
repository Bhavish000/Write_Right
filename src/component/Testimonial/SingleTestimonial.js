import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const SingleTestimonial = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className={props.itemClass} >
            <div className="author-desc border " style={{backgroundColor:"#F5F5F5"}}>
                <div className="desc" >
                    <Image
                        src={props.quoteImage}
                        alt={props.Title}
                        className="quote"
                    />
                    
                    {isExpanded ? props.Description :  `${props.Description.substring(0, props.disNum)}...` }
                        <span onClick={toggleReadMore} style={{color:"#FE7023"}}>
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </span>
                        {/* <div className='desc'>
{props.Description}
                        </div> */}
                </div>
                <div className="author-img">
                    <Image
                        src={props.authorImage}
                        alt={props.Title}
                    />
                </div>
            </div>
            <div className="author-part">
                <span className="name">{props.Title}</span>
               
                
            </div>
        </div>
    )
}

export default SingleTestimonial
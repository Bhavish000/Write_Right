import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

const CategoriesSingleFour = (props) => {
    const { categoriesClass, categoriesImg, catLink, categoriesIcon, categoriesTitle, categoriesDesc,catNum} = props;
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={categoriesClass ? categoriesClass : 'categories-items'}>
            <div className="categories-items">
                <div className="images-part">
                    {/* <Link href={catLink ? catLink : '/course-categories'}>
                        <Image src={categoriesImg} alt="write right" />
                    </Link> */}
                </div>
                <div className="image-content">
                    <div className="effect-icon">
                        <i className={categoriesIcon ? categoriesIcon : 'fa fa-paperclip'}></i>
                    </div>
                    <div className="title">
                        <Link href={catLink ? catLink : '/course-categories'}>{categoriesTitle ? categoriesTitle : 'Undergraduate Programs'}</Link>
                    </div>
                    <div className="description">
                    {isExpanded ? categoriesDesc : `${categoriesDesc.substring(0, catNum)}...`}
                        <span onClick={toggleReadMore} style={{color:"#FE7023", cursor:"pointer"}}>
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </span>
                    </div>
                    {/* <div className="button-bottom">
                        <div className="button-effect">
                            <Link href={catLink ? catLink : '/course-categories'}>{btnText ? btnText : 'Join Program'}</Link>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default CategoriesSingleFour
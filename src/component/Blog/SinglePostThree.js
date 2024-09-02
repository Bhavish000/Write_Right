import Image from "next/image";
import Link from "next/link";
import image from "@/styles/img/home/Write_Right_Blog.png"
const SinglePostThree = (props) => {
    const { blogClass, blogImage, blogTitle, contentClass, blogDesc, btnClass, blogButtonText, blogurl } = props;
    return (
        <div className={blogClass ? blogClass : 'blog-item border rounded-2 '}>
            <div className="image-part">
                {/* <Link href={`/blog_detail/${blogurl}`}> */}
                    <Image

                        src={blogImage}
                        alt={blogTitle}
                        width={500}
                        height={300}
                        // src=""
                        // alt="Write right"
                        
                    />
                {/* </Link> */}
            </div>
            <div className={contentClass ? contentClass : 'blog-content'}>
                <h3 className="title">
                    <Link href={`/blog_detail/${blogurl}`}>
                        {blogTitle ? blogTitle : 'Open Source Job Report Show More Openings Fewer '}
                    </Link>
                </h3>
                <div className="desc">{blogDesc ? blogDesc : 'We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...'}
                    <Link href={`/blog_detail/${blogurl}`} className='title-change'> Read More..</Link>
                </div>
            </div>
        </div>

    )
}

export default SinglePostThree
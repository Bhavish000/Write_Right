import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/component/layout/header/header';
import RecentPost from '@/component/Widget/RecentPost';
import Relatedblogs from '@/component/Widget/Relatedblogs';
import MetaWidget from '@/component/Widget/MetaWidget';
import FooterStyleTwo from '@/component/layout/footer/FooterStyleTwo';
import BlogDetails from '@/sectionPages/blog/BlogDetails';
import BlogBanner from '@/component/banner/BlogBanner';

const SinglePostRightSidebar = ({ blogDetailData, error }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <p>Loading...</p>;
    }
    
    if (error) return <p>Error: {error}</p>;

    if (!blogDetailData) return <p>Loading...</p>;
    return (
        <React.Fragment>
             
            <Header
                headerClass='full-width-header home8-style4'
            />
            <BlogBanner/>

            {/* Blog Details Start */}
            <div className="rs-inner-blog orange-style pt-100 pb-100 md-pt-80 md-pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 pr-50 md-pr-14">
                            <BlogDetails BlogDetailData={blogDetailData} />
                        </div>
                        <div className="col-lg-4 col-md-12 order-last">
                            <div className="widget-area">
                                <RecentPost resentBlogs={blogDetailData.resent_blogs} />
                                {blogDetailData.related_blogs ? <Relatedblogs Relatedblog={blogDetailData.related_blogs} /> : null}
                                <MetaWidget archivedBlogs={blogDetailData.archived_blogs} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterStyleTwo footerTopClass='footer-top no-gap' />
        </React.Fragment>
    );
};
function sanitizeSlug(slug) {
    return slug.replace(/[^a-zA-Z0-9-]/g, '-'); // Replace non-alphanumeric characters with hyphens
}

// Extract blogs from archived data
const extractBlogsFromArchives = (archives) => {
    return archives.flatMap(month => month.blog_list);
};

export async function getStaticPaths() {
    // Fetch existing blog data
    const response = await fetch('https://tt.mastermindschool.co.in/api/wr_blog_page_list');
    const data = await response.json();
    const prsData = data.data;
    // console.log(prsData)
    const archivedBlogs = extractBlogsFromArchives(prsData.archived_blogs);
    const allBlogs = [
        ...prsData.blog_list,
        ...archivedBlogs,
        ...prsData.resent_blogs,
    ];

    // Generate paths for existing blogs
    const paths = allBlogs.map(blog => ({
        params: { id: blog.blog_id.toString(), blogname: sanitizeSlug(blog.blog_url.split('/')[1]) },
    }));

    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
    try {
        const response = await fetch(`https://tt.mastermindschool.co.in/api/wr_blog_detail?blog_id=${params.id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const result = await response.json();

        if (!result.data) {
            throw new Error('Unexpected data format');
        }

        const blogDetailData = {
            ...result.data,
            resent_blogs: result.data.resent_blogs || null,
            related_blogs: result.data.related_blogs || null,
            archived_blogs: result.data.archived_blogs || null,
        };

        return {
            props: { blogDetailData },
            revalidate: 60, // Revalidate the page every 60 seconds
        };

    } catch (error) {
        console.error('Error in getStaticProps:', error);
        return {
            props: { error: error.message },
        };
    }
}


export default SinglePostRightSidebar;
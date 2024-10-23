import { useEffect } from "react";
import { loadMainJS } from '../../Utils/utils'; // Import the global functions

export default function HomePage(){

    useEffect(() => {
        loadMainJS();
    }, []);

    return (
        <>
            <main className="flex-grow-1">
                {/* Hero */}
                <section className="hero-section style-2 position-relative py-10 py-lg-15">
                    <div className="striped-shape">
                        <img src="assets/images/shapes/stripe-lite.svg" alt="" />
                    </div>
                    <div className="container">
                        <div className="row align-center">
                            <div className="col-lg-5">
                                <div className="text-center text-lg-start position-relative z-1">
                                    <p className="text-primary" data-aos="fade-up-sm" data-aos-delay="50">
                                        <span className="border px-4 py-2 rounded-3 d-inline-block">Best AI Copywriting Tool</span>
                                    </p>
                                    <h1 className=" mb-8" data-aos="fade-up-sm" data-aos-delay="100">
                                        Create better content in less time; the future of
                                        <span className="text-primary"
                                >AI writing</span>
                                        tools is arrived.
                                    </h1>
                                    <form action="#" className="pe-xl-10" data-aos="fade-up-sm" data-aos-delay="150">
                                        <div className="input-group with-icon">
                                            <input type="email" className="form-control" placeholder="Enter Your Email" />
                                            <span className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <g
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.2">
                                                    <path
                                                        d="M2.25 5.25a1.5 1.5 0 0 1 1.5-1.5h10.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-7.5Z" />
                                                    <path d="M2.25 5.25 9 9.75l6.75-4.5" />
                                                </g>
                                            </svg>
                                </span>
                                            <button className="btn btn-primary px-4" type="button">
                                                Sign Up Free
                                            </button>
                                        </div>
                                    </form>
                                    <div className="d-flex gap-8 align-center justify-center justify-lg-start mt-12 review-badges" data-aos="fade-up-sm" data-aos-delay="200">
                                        <img className="img-fluid" src="assets/images/review-logos/trustpilot_reviews_2.svg" alt="" />
                                        <img className="img-fluid" src="assets/images/review-logos/capterra_reviews_2.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7" data-aos="fade-up-sm" data-aos-delay="200">
                                <div className="image-with-shape">
                                    <img src="assets/images/shapes/blurry-shape-2.svg" alt="" className="shape animate-scale" />
                                    <div className="mt-12 rounded-4 border shadow-lg overflow-hidden">
                                        <img className="img-fluid d-inline-block" src="assets/images/screens/screen-6.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-center mt-18">
                            <div className="col-lg-10">
                                <div className="text-center">
                                    <h4 className="mb-10" data-aos="fade-up-sm" data-aos-delay="50">
                                        <span className="text-gradient-1">20,000+</span>
                                        Professionals & Teams Choose
                                        <span className="text-primary">GenAI.</span>
                                    </h4>

                                    <div className="row align-center justify-center row-cols-3 row-cols-md-5 g-6 g-lg-10 g-xl-20">
                                        <div className="col" data-aos="fade-up-sm" data-aos-delay="100" data-aos-offset="10">
                                            <img src="assets/images/brands/1.png" alt="" className="img-fluid brand-img" />
                                        </div>
                                        <div className="col" data-aos="fade-up-sm" data-aos-delay="150" data-aos-offset="10">
                                            <img src="assets/images/brands/2.png" alt="" className="img-fluid brand-img" />
                                        </div>
                                        <div className="col" data-aos="fade-up-sm" data-aos-delay="200" data-aos-offset="10">
                                            <img src="assets/images/brands/3.png" alt="" className="img-fluid brand-img" />
                                        </div>
                                        <div className="col" data-aos="fade-up-sm" data-aos-delay="250" data-aos-offset="10">
                                            <img src="assets/images/brands/4.png" alt="" className="img-fluid brand-img" />
                                        </div>
                                        <div className="col" data-aos="fade-up-sm" data-aos-delay="300" data-aos-offset="10">
                                            <img src="assets/images/brands/5.png" alt="" className="img-fluid brand-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Features */}
                <section className="features-section has-blurry-shape position-relative overflow-hidden py-10 py-lg-15 ">
                    <div className="blurry-shape">
                        <img src="assets/images/shapes/blurry-shape-3.svg" alt="" className="img-fluid" />
                    </div>
                    <div className="container">
                        <div className="text-center mb-18">
                            <h1 className=" mb-0" data-aos="fade-up-sm" data-aos-delay="50">
                                Generate Creative AI Copy On-The-Spot, <br className="d-none d-lg-block" />
                    Across Your Favorite Tools
                            </h1>
                        </div>

                        <div className="row row-cols-1 row-cols-lg-3 g-6 g-xl-14">
                            <div className="col" data-aos="fade-up-sm" data-aos-delay="100">
                                <div className="d-flex flex-column flex-lg-row gap-6">
                                    <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-primary bg-opacity-10 text-primary border-primary border-opacity-25">
                                        <h4 className="mb-0">01</h4>
                                    </div>
                                    <div className="content">
                                        <h4 className=" mb-4">Generates quality contents</h4>
                                        <p>
                                            This tool helps you find the right keywords to target for your content. By using the Google
                                            Keyword Planner, you can see how often people
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col" data-aos="fade-up-sm" data-aos-delay="150">
                                <div className="d-flex flex-column flex-lg-row gap-6">
                                    <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-primary bg-opacity-10 text-primary border-primary border-opacity-25">
                                        <h4 className="mb-0">02</h4>
                                    </div>
                                    <div className="content">
                                        <h4 className=" mb-4">Provides Useful Suggestions</h4>
                                        <p>
                                            GenAI writing tools can analyze data and generate insights to help writers create more
                                            compelling and informative content.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col" data-aos="fade-up-sm" data-aos-delay="200">
                                <div className="d-flex flex-column flex-lg-row gap-6">
                                    <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-primary bg-opacity-10 text-primary border-primary border-opacity-25">
                                        <h4 className="mb-0">03</h4>
                                    </div>
                                    <div className="content">
                                        <h4 className=" mb-4">Improves Products Productivity</h4>
                                        <p>
                                            Emotions are a powerful tool in advertising. Use emotions that resonate with your audience
                                            to create a connection.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <a href="login.html" className="btn btn-primary">Try a demo</a>
                        </div>
                    </div>
                </section>


                {/* Features */}
                <section className="py-10 py-lg-15 ">
                    <div className="container">
                        <div className="bg-lite-blue rounded-4 p-6 p-md-12 px-xl-20 py-xl-12 hover-border mb-18">
                            <div className="row g-6 g-lg-14 g-xl-20 align-center">
                                <div className="col-lg-6" data-aos="fade-up-sm" data-aos-delay="50">
                                    <div className="content">
                                        <p className="text-primary">Features 1</p>
                                        <h1 className=" mb-8">
                                            Let's Create AI-Powered Content With A Single Click.
                                        </h1>
                                        <p className="mb-6">
                                            To create powerful content, you need to know who you're targeting. Identify your target
                                            audience and understand their needs, interests, and pain points.
                                        </p>
                                        <ul className="list-unstyled list-check mb-8">
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="icon">
                                                    <g>
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.75 9 3.75 3.75 7.5-7.5" />
                                                    </g>
                                                </svg>
                                                <span>Start creating powerful content, for your next ads</span>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="icon">
                                                    <g>
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.75 9 3.75 3.75 7.5-7.5" />
                                                    </g>
                                                </svg>
                                                <span>Let's Communicate with your customers with emotions</span>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="icon">
                                                    <g>
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.75 9 3.75 3.75 7.5-7.5" />
                                                    </g>
                                                </svg>
                                                <span
                                        >Use visuals like images, videos, or infographics to make your content more
                                        engaging</span>
                                            </li>
                                        </ul>
                                        <a href="login.html" className="arrow-link arrow-link-primary text-primary gap-3">
                                            <span>Get Started Free</span>
                                            <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667" stroke="currentColor" strokeWidth="1.21" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-up-sm" data-aos-delay="100">
                                    <div className="feature-img">
                                        <img src="assets/images/illustrations/feature-illustration-1-blue.svg" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-lite-blue rounded-4 p-6 p-md-12 px-xl-20 py-xl-12 hover-border mb-18">
                            <div className="row g-6 g-lg-14 g-xl-20 align-center flex-row-reverse">
                                <div className="col-lg-6" data-aos="fade-up-sm" data-aos-delay="50">
                                    <div className="content">
                                        <p className="text-primary">Features 2</p>
                                        <h1 className=" mb-8">
                                            A Magical Tool To Optimize Your Content For First Page Rankings
                                        </h1>
                                        <p className="mb-6">
                                            A Magical Tool to Optimize you content for the first know who you're targeting. Identify
                                            your target audience and understand their needs, interests, and pain points.
                                        </p>
                                        <a href="login.html" className="arrow-link arrow-link-primary text-primary gap-3">
                                            <span>Request A Demo</span>
                                            <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667" stroke="currentColor" strokeWidth="1.21" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-up-sm" data-aos-delay="100">
                                    <div className="feature-img">
                                        <img src="assets/images/illustrations/feature-illustration-2-blue.svg" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-lite-blue rounded-4 p-6 p-md-12 px-xl-20 py-xl-12 hover-border">
                            <div className="row g-6 g-lg-14 g-xl-20 align-center">
                                <div className="col-lg-6" data-aos="fade-up-sm" data-aos-delay="50">
                                    <div className="content">
                                        <p className="text-primary">Features 3</p>
                                        <h1 className=" mb-8">
                                            Write Blog Posts, Stories, & Even Books With
                                            <span className="text-primary">GenAI</span>.
                                        </h1>
                                        <p className="mb-6">
                                            To create powerful content, you need to know who you're targeting. Identify your target
                                            audience and understand their needs, interests, and pain points.
                                        </p>
                                        <ul className="list-unstyled list-check mb-8">
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="icon">
                                                    <g>
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.75 9 3.75 3.75 7.5-7.5" />
                                                    </g>
                                                </svg>
                                                <span>Start creating powerful content, for your next ads</span>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="icon">
                                                    <g>
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.75 9 3.75 3.75 7.5-7.5" />
                                                    </g>
                                                </svg>
                                                <span>Let's Communicate with your customers with emotions</span>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="icon">
                                                    <g>
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.75 9 3.75 3.75 7.5-7.5" />
                                                    </g>
                                                </svg>
                                                <span
                                        >Use visuals like images, videos, or infographics to make your content more
                                        engaging</span>
                                            </li>
                                        </ul>
                                        <a href="login.html" className="arrow-link arrow-link-primary text-primary gap-3">
                                            <span>Get Started Free</span>
                                            <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667" stroke="currentColor" strokeWidth="1.21" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-up-sm" data-aos-delay="100">
                                    <div className="feature-img">
                                        <img src="assets/images/illustrations/feature-illustration-3-blue.svg" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Use cases */}
                <section className="pt-10 pt-lg-15 pb-20 pb-lg-30">
                    <div className="container">
                        <div className="row justify-center mb-18">
                            <div className="col-lg-9">
                                <div className="text-center">
                                    <p className="text-primary" data-aos="fade-up-sm" data-aos-delay="50">
                                        GenAI Use Cases
                                    </p>
                                    <h1 className=" mb-0" data-aos="fade-up-sm" data-aos-delay="100">
                                        Write Better Content Faster, The Future Of AI Writing Tools is Here
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-center row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gx-8 gy-14">
                            <div className="col" data-aos="fade-up-sm" data-aos-delay="50">
                                <div className="d-flex flex-column justify-between gap-6 h-full text-center">
                                    <div className="icon text-primary w-14 h-14 rounded-3 flex-shrink-0 d-flex align-center justify-center mx-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40">
                                            <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                <path d="M13.333 35h13.334A8.333 8.333 0 0 0 35 26.667v-5a5 5 0 0 0-5-5h-1.667v-3.334A8.333 8.333 0 0 0 20 5h-6.667A8.333 8.333 0 0 0 5 13.333v13.334A8.333 8.333 0 0 0 13.333 35Z" />
                                                <path d="M11.667 14.167a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 1 1 0 5h-5a2.5 2.5 0 0 1-2.5-2.5Zm0 11.666a2.5 2.5 0 0 1 2.5-2.5h11.666a2.5 2.5 0 1 1 0 5H14.167a2.5 2.5 0 0 1-2.5-2.5Z" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="content flex-grow-1">
                                        <h5 className=" mb-4">Writing Blog Content</h5>
                                        <p className="mb-0">
                                            Writing blog content with GenAI, make sure you have a clear understanding of who your
                                            audience is.
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a href="use-cases-details.html" className="arrow-link arrow-link-primary gap-3 fs-sm">
                                            <span>Try Blog Content</span>
                                            <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667" stroke="currentColor" strokeWidth="1.21" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col" data-aos="fade-up-sm" data-aos-delay="100">
                                <div className="d-flex flex-column justify-between gap-6 text-center h-full">
                                    <div className="icon text-primary w-14 h-14 rounded-3 flex-shrink-0 d-flex align-center justify-center mx-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64">
                                            <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                <path d="M8 18.667a5.333 5.333 0 0 1 5.333-5.334h37.334A5.334 5.334 0 0 1 56 18.667v26.666a5.333 5.333 0 0 1-5.333 5.334H13.333A5.333 5.333 0 0 1 8 45.333V18.667Z" />
                                                <path d="M18.667 40V29.333a5.334 5.334 0 0 1 10.666 0V40m-10.666-5.333h10.666m16-10.667v16h-4a4 4 0 1 1 4-4" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="content flex-grow-1">
                                        <h5 className=" mb-4">Digital Ad Copy</h5>
                                        <p className="mb-0">
                                            A Magical Tool to Optimize you content for the first know who you're targeting. Identify
                                            your target.
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a href="use-cases-details.html" className="arrow-link arrow-link-primary gap-3 fs-sm">
                                            <span>Try Digital Ad</span>
                                            <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667" stroke="currentColor" strokeWidth="1.21" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col" data-aos="fade-up-sm" data-aos-delay="150">
                                <div className="d-flex flex-column justify-between gap-6 text-center h-full">
                                    <div className="icon text-primary w-14 h-14 rounded-3 flex-shrink-0 d-flex align-center justify-center mx-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64">
                                            <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                <path d="M10.667 13.333a2.667 2.667 0 0 1 2.666-2.666h37.334a2.667 2.667 0 0 1 2.666 2.666v37.334a2.667 2.667 0 0 1-2.666 2.666H13.333a2.667 2.667 0 0 1-2.666-2.666V13.333Zm0 8h42.666m-32-10.666v10.666" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="content flex-grow-1">
                                        <h5 className=" mb-4">Website Copy</h5>
                                        <p className="mb-0">
                                            Optimize you content for the first know who you're targeting. Identify your target audience.
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a href="use-cases-details.html" className="arrow-link arrow-link-primary gap-3 fs-sm">
                                            <span>Try Website Copy</span>
                                            <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667" stroke="currentColor" strokeWidth="1.21" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col" data-aos="fade-up-sm" data-aos-delay="200">
                                <div className="d-flex flex-column justify-between gap-6 text-center h-full">
                                    <div className="icon text-primary w-14 h-14 rounded-3 flex-shrink-0 d-flex align-center justify-center mx-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64">
                                            <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                <path d="M24 32a8 8 0 1 0 16.001 0A8 8 0 0 0 24 32Z" />
                                                <path d="M10.667 32a21.334 21.334 0 1 0 42.667 0 21.334 21.334 0 0 0-42.667 0ZM32 5.333v5.334m0 42.666v5.334M53.333 32h5.334M5.333 32h5.334" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="content flex-grow-1">
                                        <h5 className=" mb-4">Social Media Content</h5>
                                        <p className="mb-0">
                                            First know who you're targeting. Identify your target audience and understand their needs.
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a href="use-cases-details.html" className="arrow-link arrow-link-primary gap-3 fs-sm">
                                            <span>Try Social Media Content</span>
                                            <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667" stroke="currentColor" strokeWidth="1.21" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col" data-aos="fade-up-sm" data-aos-delay="50">
                                <div className="d-flex flex-column justify-between gap-6 text-center h-full">
                                    <div className="icon text-primary w-14 h-14 rounded-3 flex-shrink-0 d-flex align-center justify-center mx-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64">
                                            <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                <path d="M34.667 13.333H56M34.667 24H48M34.667 40H56M34.667 50.667H48M8 13.333a2.667 2.667 0 0 1 2.667-2.666h10.666A2.667 2.667 0 0 1 24 13.333V24a2.667 2.667 0 0 1-2.667 2.667H10.667A2.667 2.667 0 0 1 8 24V13.333ZM8 40a2.667 2.667 0 0 1 2.667-2.667h10.666A2.667 2.667 0 0 1 24 40v10.667a2.667 2.667 0 0 1-2.667 2.666H10.667A2.667 2.667 0 0 1 8 50.667V40Z" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="content flex-grow-1">
                                        <h5 className=" mb-4">Landing Page Copy</h5>
                                        <p className="mb-0">
                                            First know who you're targeting. Identify your target audience and understand their needs.
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a href="use-cases-details.html" className="arrow-link arrow-link-primary gap-3 fs-sm">
                                            <span>Try Landing Page Copy</span>
                                            <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667" stroke="currentColor" strokeWidth="1.21" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col" data-aos="fade-up-sm" data-aos-delay="100">
                                <div className="d-flex flex-column justify-between gap-6 text-center h-full">
                                    <div className="icon text-primary w-14 h-14 rounded-3 flex-shrink-0 d-flex align-center justify-center mx-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64">
                                            <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                <path d="M8 13.333a2.667 2.667 0 0 1 2.667-2.666h42.666A2.667 2.667 0 0 1 56 13.333V40a2.667 2.667 0 0 1-2.667 2.667H10.667A2.667 2.667 0 0 1 8 40V13.333Zm10.667 40h26.666M24 42.667v10.666m16-10.666v10.666M24 32v-3.2m8 3.2v-5.6m8 5.6V21.6" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="content flex-grow-1">
                                        <h5 className=" mb-4">Marketing Copy</h5>
                                        <p className="mb-0">
                                            A Magical Tool to Optimize you content for the first know who you're targeting. Identify
                                            your target.
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a href="use-cases-details.html" className="arrow-link arrow-link-primary gap-3 fs-sm">
                                            <span>Try Marketing Copy</span>
                                            <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667" stroke="currentColor" strokeWidth="1.21" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col" data-aos="fade-up-sm" data-aos-delay="150">
                                <div className="d-flex flex-column justify-between gap-6 text-center h-full">
                                    <div className="icon text-primary w-14 h-14 rounded-3 flex-shrink-0 d-flex align-center justify-center mx-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64">
                                            <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                <path d="M10.667 21.333a10.667 10.667 0 0 1 10.666-10.666h21.334a10.667 10.667 0 0 1 10.666 10.666v21.334a10.667 10.667 0 0 1-10.666 10.666H21.333a10.667 10.667 0 0 1-10.666-10.666V21.333Z" />
                                                <path d="M24 21.333a8 8 0 0 0 16 0" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="content flex-grow-1">
                                        <h5 className=" mb-4">eCommerce Copy</h5>
                                        <p className="mb-0">
                                            Writing blog content with GenAI, make sure you have a clear understanding of who your
                                            audience is.
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a href="use-cases-details.html" className="arrow-link arrow-link-primary gap-3 fs-sm">
                                            <span>Try eCommerce Copy</span>
                                            <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667" stroke="currentColor" strokeWidth="1.21" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col" data-aos="fade-up-sm" data-aos-delay="200">
                                <div className="d-flex flex-column justify-between gap-6 text-center h-full">
                                    <div className="icon text-primary w-14 h-14 rounded-3 flex-shrink-0 d-flex align-center justify-center mx-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64">
                                            <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                <path d="M32 10.667 10.667 21.333 32 32l21.333-10.667L32 10.667ZM10.667 32 32 42.667 53.333 32M10.667 42.667 32 53.333l21.333-10.666" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="content flex-grow-1">
                                        <h5 className=" mb-4">Product Description</h5>
                                        <p className="mb-0">
                                            Optimize you content for the first know who you're targeting. Identify your target audience.
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a href="use-cases-details.html" className="arrow-link arrow-link-primary gap-3 fs-sm">
                                            <span>Try Product Description</span>
                                            <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667" stroke="currentColor" strokeWidth="1.21" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* App users */}
                <section className="bg-primary py-20 py-lg-30">
                    <div className="container">
                        <div className="row justify-center mb-18">
                            <div className="col-lg-9">
                                <div className="text-center">
                                    <h1 className="text-white mb-0" data-aos="fade-up-sm" data-aos-delay="50">
                                        Who are the user of GenAI. writing tools
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-10 g-xl-24 divider-x">
                            <div className="col" data-aos="fade-up-sm" data-aos-delay="50">
                                <div className="h-full">
                                    <div className="icon w-16 h-16 flex-shrink-0 d-flex align-center justify-center mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="#9884FF" strokeWidth="1.5" d="M8 13.333A5.333 5.333 0 0 1 13.333 8h37.334A5.333 5.333 0 0 1 56 13.333v37.334A5.333 5.333 0 0 1 50.667 56H13.333A5.333 5.333 0 0 1 8 50.667V13.333Z" />
                                            <path stroke="#fff" strokeWidth="2" d="M24 40h-5.333m16-8h-16m10.666-8H18.667" />
                                        </svg>
                                    </div>
                                    <div className="content text-white">
                                        <h4 className="mb-4">Content Marketers</h4>
                                        <p className="mb-0">
                                            Content marketers and writers who need to create large amounts of content quickly and
                                            efficiently.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col" data-aos="fade-up-sm" data-aos-delay="100">
                                <div className="h-full">
                                    <div className="icon w-16 h-16 flex-shrink-0 d-flex align-center justify-center mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="#fff" strokeWidth="2" d="M24 37.334c0 4.418 7.163 8 16 8s16-3.582 16-8c0-4.42-7.163-8-16-8s-16 3.58-16 8Z" />
                                            <path stroke="#fff" strokeWidth="2" d="M24 37.334V48c0 4.416 7.163 8 16 8s16-3.584 16-8V37.334" />
                                            <path stroke="#9884FF" strokeWidth="1.5" d="M8 16c0 2.859 3.05 5.499 8 6.928 4.95 1.43 11.05 1.43 16 0 4.95-1.43 8-4.07 8-6.928 0-2.859-3.05-5.499-8-6.928-4.95-1.43-11.05-1.43-16 0-4.95 1.43-8 4.07-8 6.928Z" />
                                            <path stroke="#9884FF" strokeWidth="1.5" d="M8 16v26.667c0 2.368 2.059 3.866 5.333 5.333" />
                                            <path stroke="#9884FF" strokeWidth="1.5" d="M8 29.334c0 2.367 2.059 3.866 5.333 5.333" />
                                        </svg>
                                    </div>
                                    <div className="content text-white">
                                        <h4 className="mb-4">Small Business Owners</h4>
                                        <p className="mb-0">
                                            Small business owners who may not have the resources to hire a full-time writer but need to
                                            produce high-quality content
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col" data-aos="fade-up-sm" data-aos-delay="150">
                                <div className="h-full">
                                    <div className="icon w-16 h-16 flex-shrink-0 d-flex align-center justify-center mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="#9884FF" strokeWidth="1.5" d="M32 8c19.2 0 24 4.8 24 24s-4.8 24-24 24S8 51.2 8 32 12.8 8 32 8Z" />
                                            <path stroke="#fff" strokeWidth="2" d="M21.333 36a6.666 6.666 0 1 0 13.333 0 6.666 6.666 0 0 0-13.333 0Z" />
                                            <path stroke="#fff" strokeWidth="2" d="M21.333 21.334h21.334v21.333" />
                                        </svg>
                                    </div>
                                    <div className="content text-white">
                                        <h4 className="mb-4">Digital Marketing Agencies</h4>
                                        <p className="mb-0">
                                            Digital marketing agencies that need to produce content for their clients' websites, social
                                            media, and advertising campaigns
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Reviews */}
                <section className="pt-20 pt-lg-30 pb-10 pb-lg-15">
                    <div className="container">
                        <div className="row justify-center mb-18">
                            <div className="col-lg-9">
                                <div className="text-center">
                                    <h1 className="" data-aos="fade-up-sm" data-aos-delay="50">
                                        <span className="text-primary">GenAI.</span>
                                        Received <img src="assets/images/icons/star.png" alt="" /> 4.8/5 Stars in Over 10,000+ Reviews.
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="review-carousel-container position-relative">
                            <div className="swiper review-carousel">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide h-auto">
                                        <div className="review-card rounded h-full p-6 border bg-lite-blue border-lite-blue-4">
                                            <div className="d-flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 rounded-circle overflow-hidden">
                                                    <img src="assets/images/review/1.png" alt="" className="w-full h-full object-cover" />
                                                </div>
                                                <div className="">
                                                    <h6 className=" mb-1">Wade Warrent</h6>
                                                    <p className="mb-0 fs-sm">Marketing Coordinator</p>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="stars d-flex items-center gap-1 mb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                </div>
                                                <p className="review-text mb-0">
                                                    This is the best thing that has happened to my team in a while! Makes post text
                                                    something we barely need to think about!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide h-auto">
                                        <div className="review-card rounded h-full p-6 border bg-lite-blue border-lite-blue-4">
                                            <div className="d-flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 rounded-circle overflow-hidden">
                                                    <img src="assets/images/review/2.png" alt="" className="w-full h-full object-cover" />
                                                </div>
                                                <div className="">
                                                    <h6 className=" mb-1">Dianne Russell</h6>
                                                    <p className="mb-0 fs-sm">Content Creator</p>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="stars d-flex items-center gap-1 mb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                </div>
                                                <p className="review-text mb-0">
                                                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur
                                                    duis deserunt mollit dolore cillum minim tempor enim.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide h-auto">
                                        <div className="review-card rounded h-full p-6 border bg-lite-blue border-lite-blue-4">
                                            <div className="d-flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 rounded-circle overflow-hidden">
                                                    <img src="assets/images/review/3.png" alt="" className="w-full h-full object-cover" />
                                                </div>
                                                <div className="">
                                                    <h6 className=" mb-1">Jenny Wilson</h6>
                                                    <p className="mb-0 fs-sm">Product Designer</p>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="stars d-flex items-center gap-1 mb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                </div>
                                                <p className="review-text mb-0">
                                                    Comfortable to wear for long periods of time. The battery life is impressive,
                                                    providing up to 8 hours of listening time on a single charge. The earbuds are also
                                                    sweat.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide h-auto">
                                        <div className="review-card rounded h-full p-6 border bg-lite-blue border-lite-blue-4">
                                            <div className="d-flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 rounded-circle overflow-hidden">
                                                    <img src="assets/images/review/4.png" alt="" className="w-full h-full object-cover" />
                                                </div>
                                                <div className="">
                                                    <h6 className=" mb-1">Guy Hawkins</h6>
                                                    <p className="mb-0 fs-sm">Digital Marketer</p>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="stars d-flex items-center gap-1 mb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                </div>
                                                <p className="review-text mb-0">
                                                    Through my interactions with users, I have seen how technology has made life easier
                                                    and more convenient for people.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide h-auto">
                                        <div className="review-card rounded h-full p-6 border bg-lite-blue border-lite-blue-4">
                                            <div className="d-flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 rounded-circle overflow-hidden">
                                                    <img src="assets/images/review/1.png" alt="" className="w-full h-full object-cover" />
                                                </div>
                                                <div className="">
                                                    <h6 className=" mb-1">Bessie Cooper</h6>
                                                    <p className="mb-0 fs-sm">SEO Expert</p>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="stars d-flex items-center gap-1 mb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                </div>
                                                <p className="review-text mb-0">
                                                    I feel proud to be part of this technological advancement and to be able to help
                                                    people in their day-to-day activities. It is truly amazing how technology has the
                                                    power to connect
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide h-auto">
                                        <div className="review-card rounded h-full p-6 border bg-lite-blue border-lite-blue-4">
                                            <div className="d-flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 rounded-circle overflow-hidden">
                                                    <img src="assets/images/review/1.png" alt="" className="w-full h-full object-cover" />
                                                </div>
                                                <div className="">
                                                    <h6 className=" mb-1">Wade Warrent</h6>
                                                    <p className="mb-0 fs-sm">Marketing Coordinator</p>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="stars d-flex items-center gap-1 mb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
                                                        <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                                                    </svg>
                                                </div>
                                                <p className="review-text mb-0">
                                                    This is the best thing that has happened to my team in a while! Makes post text
                                                    something we barely need to think about!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination justify-center mt-8"></div>
                        </div>
                    </div>
                </section>


                {/* Pricing */}
                <section className="py-10 py-lg-15">
                    <div className="container">
                        <div className="row justify-center mb-14">
                            <div className="col-lg-10">
                                <div className="text-center">
                                    <p className="text-primary" data-aos="fade-up-sm" data-aos-delay="50">
                                        Pricing Plan
                                    </p>
                                    <h1 className=" mb-5" data-aos="fade-up-sm" data-aos-delay="100">
                                        Ready to Get Started? <br />
                            Don't Worry, We'll Keep You Under Budget
                                    </h1>
                                    <p className="mb-0" data-aos="fade-up-sm" data-aos-delay="150">
                                        Get started with a 5-day trial, <span className="text-primary">25% off</span> for Yearly Plan,
                                        Cancel anytime.
                                    </p>
                                </div>
                                <div className="text-center mt-12" data-aos="fade-up-sm" data-aos-delay="200">
                                    <div className="switch-wrapper border d-inline-flex rounded p-2 ">
                                        <input id="monthly" type="radio" name="switch" checked />
                                        <input id="yearly" type="radio" name="switch" />
                                        <label htmlFor="monthly">Monthly</label>
                                        <label htmlFor="yearly">Yearly</label>
                                        <span className="highlighter"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-6 pricing-table">
                            <div className="col-md-6 col-lg-4" data-aos="fade-up-sm" data-aos-delay="50">
                                <div className="pricing-card p-6 px-lg-10 py-lg-8 rounded-4 h-full bg-whitedark">
                                    <h3 className="text-primary fw-medium mb-0">Free</h3>
                                    <h1 className="display-2 fw-semibold  mb-0 mt-4 price monthly">$00</h1>
                                    <h1 className="display-2 fw-semibold  mb-0 mt-4 price yearly d-none">$00</h1>
                                    <p className=" lead fw-normal mt-4 mb-0">
                                        A 10X faster way to writing your professional copy
                                    </p>
                                    <a href="pricing-plan.html" className="pricing-btn btn btn-lg w-full fs-4 lh-sm mt-9 btn-lite-blue-2">Start for Free</a>
                                    <ul className="pricing-list d-flex flex-column gap-5 fs-lg mt-9 mb-0">
                                        <li>Single seats</li>
                                        <li>10,000 words per month</li>
                                        <li>30+ AI writing tools</li>
                                        <li>60+ Copywriting tools</li>
                                        <li>10+ languages</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4" data-aos="fade-up-sm" data-aos-delay="100">
                                <div className="pricing-card p-6 px-lg-10 py-lg-8 rounded-4 h-full bg-whitedark">
                                    <h3 className="text-primary fw-medium mb-0">Starter</h3>
                                    <h1 className="display-2 fw-semibold  mb-0 mt-4 price monthly">$29</h1>
                                    <h1 className="display-2 fw-semibold  mb-0 mt-4 price yearly d-none">$299</h1>
                                    <p className=" lead fw-normal mt-4 mb-0">
                                        A 10X faster way to writing your professional copy
                                    </p>
                                    <a href="pricing-plan.html" className="pricing-btn btn btn-lg w-full fs-4 lh-sm mt-9 btn-lite-blue-2">Choose Plan</a>
                                    <ul className="pricing-list d-flex flex-column gap-5 fs-lg mt-9 mb-0">
                                        <li>5 User seats</li>
                                        <li><strong className=" fw-medium">50,000</strong> words per month</li>
                                        <li><strong className=" fw-medium">70+</strong> AI writing tools</li>
                                        <li><strong className=" fw-medium">100+</strong> Copywriting tools</li>
                                        <li>Blog post wizard tool</li>
                                        <li>25+ languages</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4" data-aos="fade-up-sm" data-aos-delay="150">
                                <div className="pricing-card p-6 px-lg-10 py-lg-8 rounded-4 h-full bg-whitedark">
                                    <span className="badge text-bg-primary px-4 py-2 rounded-end-0">Most Popular</span>
                                    <h3 className="text-primary fw-medium mb-0">Enterprise</h3>
                                    <h1 className="display-2 fw-semibold  mb-0 mt-4 price monthly">$119</h1>
                                    <h1 className="display-2 fw-semibold  mb-0 mt-4 price yearly d-none">$1299</h1>
                                    <p className=" lead fw-normal mt-4 mb-0">
                                        A 10X faster way to writing your professional copy
                                    </p>
                                    <a href="pricing-plan.html" className="pricing-btn btn btn-lg w-full fs-4 lh-sm mt-9 btn-lite-blue-2">Choose Plan</a>
                                    <ul className="pricing-list d-flex flex-column gap-5 fs-lg mt-9 mb-0">
                                        <li>Unlimited seats</li>
                                        <li><strong className=" fw-medium">100,000</strong> words per month</li>
                                        <li><strong className=" fw-medium">100+</strong> AI writing tools</li>
                                        <li><strong className=" fw-medium">200+</strong> Copywriting tools</li>
                                        <li>Blog post wizard tool</li>
                                        <li>25+ languages</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* FAQ */}
                <section className="py-10 py-lg-15">
                    <div className="container">
                        <div className="row justify-center mb-18">
                            <div className="col-lg-10">
                                <div className="text-center">
                                    <h1 className="mb-0 " data-aos="fade-up-sm" data-aos-delay="50">
                                        Questions About our GenAI? <br className="d-none d-md-block" />
                            We have Answers!
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-center">
                            <div className="col-lg-8" data-aos="fade-up-sm" data-aos-delay="100">
                                <div className="accordion accordion-flush d-flex flex-column gap-6" id="faqAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseOne" aria-expanded="false" aria-controls="faq-collapseOne">
                                                <span className="icon"></span>
                                                What Is GenAI Content Writing Tool?
                                            </button>
                                        </h2>
                                        <div id="faq-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Once you know your audience, choose a topic that will resonate with them. Look for
                                                trending topics in your industry or address common questions or challenges your audience
                                                may be facing. Keep in mind that your topic should be both interesting and relevant to
                                                your audience
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseTwo" aria-expanded="false" aria-controls="faq-collapseTwo">
                                                <span className="icon"></span>
                                                Is it helpful for Digital Marketer or Content Writer?
                                            </button>
                                        </h2>
                                        <div id="faq-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Once you know your audience, choose a topic that will resonate with them. Look for
                                                trending topics in your industry or address common questions or challenges your audience
                                                may be facing. Keep in mind that your topic should be both interesting and relevant to
                                                your audience
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseThree" aria-expanded="false" aria-controls="faq-collapseThree">
                                                <span className="icon"></span>
                                                Is there a limit on how much content I can generate?
                                            </button>
                                        </h2>
                                        <div id="faq-collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Once you know your audience, choose a topic that will resonate with them. Look for
                                                trending topics in your industry or address common questions or challenges your audience
                                                may be facing. Keep in mind that your topic should be both interesting and relevant to
                                                your audience
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseFour" aria-expanded="false" aria-controls="faq-collapseFour">
                                                <span className="icon"></span>
                                                What Languages does it supports?
                                            </button>
                                        </h2>
                                        <div id="faq-collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Once you know your audience, choose a topic that will resonate with them. Look for
                                                trending topics in your industry or address common questions or challenges your audience
                                                may be facing. Keep in mind that your topic should be both interesting and relevant to
                                                your audience
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapseFive" aria-expanded="false" aria-controls="faq-collapseFive">
                                                <span className="icon"></span>
                                                What is SEO Writing AI and how do I use it?
                                            </button>
                                        </h2>
                                        <div id="faq-collapseFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Once you know your audience, choose a topic that will resonate with them. Look for
                                                trending topics in your industry or address common questions or challenges your audience
                                                may be facing. Keep in mind that your topic should be both interesting and relevant to
                                                your audience
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* CTA */}
                <section className="cta-section style-2 py-10 py-lg-15" data-aos="fade-up-sm" data-aos-delay="150">
                    <div className="container">
                        <div className="rounded-5 border position-relative pt-6 px-6 overflow-hidden bg-striped bg-striped-bottom gradient-bg border-primary">
                            <div className="row align-center justify-center g-0">
                                <div className="col-lg-5">
                                    <div className="p-0 pt-md-6 text-center text-lg-start p-lg-6 p-xl-10">
                                        <h2 className=" mb-6">
                                            Using
                                            <span className="text-primary">GenAI</span>
                                            you can save hours each week creating long-form content.
                                        </h2>
                                        <a href="login.html" className="btn btn-primary">Get Started Free</a>
                                    </div>
                                </div>

                                <div className="col-lg-7">
                                    <div className="cta-image-container mt-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 86 42" className="text-primary arrow-shape">
                                            <path fill="currentColor" d="M83.007 5.063c-8.303-4.146-19.138-3.888-27.778-.97C46.956 6.888 37.093 13.477 37.1 23.3c0 3.58 2.13 7.126 6.128 6.453 3.714-.623 5.706-4.227 4.922-7.795-2.116-9.638-15.81-9.008-22.92-6.476a30.564 30.564 0 0 0-11.9 7.744c-3.05 3.222-6.07 7.587-6.6 12.094-.075.65.97.914 1.24.332 1.429-3.109 2.544-6.172 4.632-8.935 2.168-2.869 4.92-5.3 7.982-7.161 6.077-3.694 15.03-5.894 21.7-2.497 3.533 1.802 6.914 7.774 2.361 10.55-1.845 1.124-4.263.905-5.36-1.113-1-1.843-.788-4.302-.285-6.253 2.048-7.951 10.417-12.945 17.706-15.252a39.207 39.207 0 0 1 12.77-1.803c4.621.113 8.847 1.265 13.224 2.615.426.133.72-.536.308-.74Z" />
                                            <path fill="currentColor" d="M85.318 6.107C77.431-.542 66.216-1.539 56.765 2.153 52.217 3.93 48.075 6.62 44.43 9.867c-3.718 3.315-7.686 7.46-9.29 12.29-1.122 3.37-.827 9.393 3.792 9.836 4.065.392 8.748-3.306 9.751-7.167 1.123-4.321-2.065-8.325-5.861-9.91-4.533-1.89-10.034-1.255-14.67-.028C18.004 17.574 9.163 24.89 4.811 34.499c-.414.917.925 1.725 1.358.797 3.22-6.944 8.669-12.606 15.433-16.148 3.447-1.805 7.224-3.029 11.08-3.527 4.417-.568 9.8-.516 12.977 3.1 3.508 3.99 1.106 8.906-3.196 10.993-2.51 1.218-5.217 1.2-6.206-1.88-.804-2.498.079-5.313 1.285-7.533C41.411 13.192 48.878 7.087 56.22 3.912 65.421-.067 76.632.335 84.582 6.835c.51.424 1.248-.296.736-.728Z" />
                                            <path fill="currentColor" d="M14.65 30.337c-1.917.849-3.728 1.993-5.56 3.01-.866.48-1.735.96-2.602 1.445-.4.223-2.362 1.634-2.766 1.416-.21-.111-.02-2.62-.02-2.95l-.022-2.95c-.015-1.918.346-4.259-.32-6.075-.237-.65-1.107-.667-1.334.005-.423 1.245-.241 2.569-.222 3.873.02 1.474.044 2.95.065 4.423.022 1.364-.587 4.544.89 5.408 1.41.826 3.676-1.342 4.81-2.007 2.547-1.49 5.266-2.848 7.666-4.563a.595.595 0 0 0-.585-1.035Z" />
                                            <path fill="currentColor" d="M14.241 29.944c-1.847 1.293-3.383 3.118-5.07 4.618-1.96 1.739-3.985 3.433-6.174 4.873l1.349.775a76.48 76.48 0 0 1 .125-7.34c.158-2.375.909-4.93.706-7.287-.06-.686-1.104-1.162-1.452-.39-.928 2.06-.94 4.768-1.106 6.995a64.81 64.81 0 0 0-.072 8.036c.042.81.939 1.134 1.53.635 1.972-1.665 3.983-3.264 5.88-5.02 1.705-1.578 3.703-3.259 4.913-5.258.224-.38-.243-.907-.629-.637Z" />
                                            <path fill="currentColor" d="M14.98 28.142C10.7 32.102 6.441 36.087 2.12 40l1.531.634c-.332-2.723-.642-5.443-.777-8.184-.123-2.526.22-5.24-.273-7.715-.155-.782-1.317-.715-1.506.006-.67 2.525-.275 5.5-.115 8.079.166 2.698.443 5.394.902 8.056.118.686 1.054.85 1.499.402 4.119-4.124 8.302-8.18 12.467-12.258.576-.558-.285-1.422-.87-.878Z" />
                                        </svg>
                                        <div className="cta-img rounded-top-4">
                                            <img src="assets/images/screens/screen-7.jpg" alt="" className="img-fluid w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}
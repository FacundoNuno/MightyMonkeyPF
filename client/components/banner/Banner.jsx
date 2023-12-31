'use client'
import React, { useEffect } from "react";
import './Banner.css'
import img1 from '../../assets/images/banners/publi1.jpg'
import img2 from '../../assets/images/banners/publi2.jpg'
import img3 from '../../assets/images/banners/publi3.jpg'
import img4 from '../../assets/images/banners/publi4.jpg'
import Image from "next/image";



const Banner = () => {

  const images = [img1, img2, img3, img4]

      useEffect(() => {
        const init = async () => {
          const { Carousel, initTE } = await import("tw-elements");
          initTE({ Carousel });
        };
        init();
      }, []);

  return (
    <div
      id="carouselExampleControls"
      className="relative bannerContainer"
      data-te-carousel-init
      data-te-carousel-slide
    >
      <div className="relative h-full w-full overflow-hidden after:clear-both after:block after:content-['']">
        {/* Slide 1 */}
        <div
          className="relative float-left h-full -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          data-te-carousel-active
        >
          <Image
            src={images[0]}
            className="block w-full imagenBanner"
            alt="publi1"
            key='publi1'
          />
        </div>

        {/* Slide 2 */}
        <div
          className="relative float-left h-full -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
        >
          <Image
            src={images[1]}
            className="block w-full  imagenBanner"
            alt="publi2"
            key='publi2'
          />
        </div>

        {/* Slide 3 */}
        <div
          className="relative float-left  h-full -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
        >
          <Image
            src={images[2]}
            className="block w-full imagenBanner"
            alt="publi3"
            key='publi3'
          />
        </div>
        <div
          className="relative float-left h-full -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
        >
          <Image
            src={images[3]}
            className="block w-full imagenBanner"
            alt="publi4"
            key='publi4'
          />
        </div>
      </div>

      {/* Previous Button */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleControls"
        data-te-slide="prev"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>

      {/* Next Button */}
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleControls"
        data-te-slide="next"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
      </button>
    </div>
  );
};

export default Banner;
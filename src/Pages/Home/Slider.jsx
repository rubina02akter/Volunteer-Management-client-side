import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import img from '../../assets/images/eco-concept-with-group-joyful-volunteers.jpg';
import img1 from '../../assets/images/volunteers-work-preparing-donations-charity.jpg';
import img2 from '../../assets/images/entrepreneurs-meeting-office.jpg';
import img3 from '../../assets/images/group-volunteers-collecting-trash-beach-as-team.jpg';
import img4 from '../../assets/images/volunteers-work-preparing-donations-charity.jpg';
import img5 from '../../assets/images/volunteer3.png';
import img6 from '../../assets/images/team-volunteers-stacking-hands.jpg';
import img7 from '../../assets/images/eco-concept-with-group-joyful-volunteers.jpg';
import img8 from '../../assets/images/entrepreneurs-meeting-office.jpg';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      {/* Swiper Carousel with Overlaid Text */}
      <Swiper
        effect={'coverflow'}
        autoplay={{
          delay: 2000, // Delay in milliseconds (2 seconds)
          disableOnInteraction: false, // Keeps autoplay running after user interaction
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={img} alt="Volunteers working together" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-lg"></div>
            <div className="absolute top-0 md:top-1/4 left-0 mx-2 my-4  md:left-1/4 text-white text-xl font-thin ">
              <h3 className="mt-2 text-sm md::text-3xl font-semibold  lg:text-5xl">Volunteers Making a Difference</h3>
              <p className="text-xs md::text-base  lg:text-xl">Join us in making a positive impact on the environment by volunteering for sustainable projects.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img1} alt="Preparing donations" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
            <div className="absolute top-0 md:top-1/4 left-0 mx-2 my-4  md:left-1/4 text-white text-xl font-thin ">
            <h3 className="mt-2 text-sm md::text-3xl font-semibold  lg:text-5xl">Charity and Donations</h3>
              <p className="text-xs md::text-base  lg:text-xl">Support communities in need by volunteering for donation drives and distribution efforts.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img2} alt="Entrepreneurs meeting" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
             <div className="absolute top-0 md:top-1/4 left-0 mx-2 my-4  md:left-1/4 text-white text-xl font-thin ">
              <h3 className="mt-2 text-sm md::text-3xl font-semibold  lg:text-5xl">Volunteer Networking</h3>
              <p className="text-xs md::text-base  lg:text-xl">Connect with like-minded individuals and entrepreneurs working towards social good.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img3} alt="Beach cleanup volunteers" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
             <div className="absolute top-0 md:top-1/4 left-0 mx-2 my-4  md:left-1/4 text-white text-xl font-thin ">
              <h3 className="mt-2 text-sm md::text-3xl font-semibold  lg:text-5xl">Clean the Beaches</h3>
              <p className="text-xs md::text-base  lg:text-xl">Help us protect the environment by volunteering for beach cleanup and restoration efforts.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img4} alt="Volunteers working together" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
             <div className="absolute top-0 md:top-1/4 left-0 mx-2 my-4  md:left-1/4 text-white text-xl font-thin ">
              <h3 className="mt-2 text-sm md::text-3xl font-semibold  lg:text-5xl">Team Volunteer Work</h3>
              <p className="text-xs md::text-base  lg:text-xl">Be part of an inspiring team making a real difference through collaborative volunteer efforts.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img5} alt="Volunteer group" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
             <div className="absolute top-0 md:top-1/4 left-0 mx-2 my-4  md:left-1/4 text-white text-xl font-thin ">
              <h3 className="mt-2 text-sm md::text-3xl font-semibold  lg:text-5xl">Building Communities</h3>
              <p className="text-xs md::text-base  lg:text-xl">Volunteer with us to help build and strengthen communities through meaningful initiatives.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img6} alt="Teamwork in action" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
             <div className="absolute top-0 md:top-1/4 left-0 mx-2 my-4  md:left-1/4 text-white text-xl font-thin ">
              <h3 className="mt-2 text-sm md::text-3xl font-semibold  lg:text-5xl">Power of Teamwork</h3>
              <p className="text-xs md::text-base  lg:text-xl">Join our team and be part of a supportive and impactful volunteer network.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img7} alt="Group of volunteers" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
             <div className="absolute top-0 md:top-1/4 left-0 mx-2 my-4  md:left-1/4 text-white text-xl font-thin ">
              <h3 className="mt-2 text-sm md::text-3xl font-semibold  lg:text-5xl">Volunteer Spirit</h3>
              <p className="text-xs md::text-base  lg:text-xl">Feel the true spirit of volunteerism and make a positive impact on your community.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img8} alt="Business meeting for charity" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
             <div className="absolute top-0 md:top-1/4 left-0 mx-2 my-4  md:left-1/4 text-white text-xl font-thin ">
              <h3 className="mt-2 text-sm md::text-3xl font-semibold  lg:text-5xl">Networking for a Cause</h3>
              <p className="text-xs md::text-base  lg:text-xl">Join forces with professionals and volunteers to drive social impact initiatives.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

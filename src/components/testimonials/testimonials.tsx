import { testiData } from "../../index";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from the clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="testimonials__container container w-[40%] pb-[3rem] max-md:w-[60%] max-sm:w-[90%]"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={45}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testiData.map(({ name, avatar, review }, index) => {
          return (
            <SwiperSlide
              key={index}
              className="testimonial border-32 select-none rounded-2rem p-[2rem] text-center"
            >
              <div className="client__avatar mx-auto mb-[1rem] mt-0 aspect-square w-[5rem] overflow-hidden rounded-full">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review max-sm:w-[90%]">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

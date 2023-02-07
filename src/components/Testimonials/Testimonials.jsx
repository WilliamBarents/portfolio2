import React from "react";
import "./Testimonials.css";
import Nadine from "../../assets/nadine.jpeg";
import avatar1 from "../../assets/testimonial-1.jpg";
import avatar2 from "../../assets/testimonial-2.jpg";
import avatar3 from "../../assets/testimonial-3.jpg";
import avatar4 from "../../assets/testimonial-4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Nadine Duijndam",
      title: "Delivery Manager",
      company: "YouWe Agency Rotterdam",
      image: Nadine,
      review:
        "It is an absolute great pleasure to work with William! We worked together in the same team at Youwe where I'm the Delivery Manager and William the Front-End developer. He's good in communication, learns fast and is always willing to go the extra mile. Also, he has a good eye for details. William is a talented presentor, for instance when hosting the daily scrum. He brings good energy into the team and knows how to put a smile on your face. I wish him the best of luck for the future, any team is lucky to have him.",
    },
    {
      id: 2,
      name: "David Ross",
      title: "Lorem 1",
      company: "Lorem Company",
      image: avatar1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero nobis consequatur eos, reprehenderit ratione perferendis hic repudiandae pariatur, fugit itaque consectetur tempore saepe consequuntur minus aliquam possimus. Qui, debitis?",
    },
    {
      id: 3,
      name: "Andrew T.",
      title: "Lorem 2",
      company: "Lorem Company",
      image: avatar2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias voluptas quia ipsa fugiat delectus, ullam neque odit obcaecati, quasi suscipit voluptates. Maiores omnis in exercitationem aut ratione quasi! Pariatur, commodi?",
    },
    {
      id: 4,
      name: "Salena G.",
      title: "Lorem 3",
      company: "Lorem Company",
      image: avatar3,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, voluptatem, ducimus libero unde animi autem nam alias reiciendis, vel accusamus cupiditate officia debitis vitae ex sunt? Fugiat quod totam voluptates!",
    },
    {
      id: 5,
      name: "Michael S.",
      title: "Lorem 4",
      company: "Lorem Company",
      image: avatar4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam repellat aut autem vero sed optio necessitatibus molestias maiores officia qui at, porro fugit libero facere quod deserunt ratione. Amet.",
    },
  ];

  const testimonials = data.map((testimonial) => (
    <SwiperSlide className="testimonial" key={testimonial.id}>
      <div className="testimonial__avatar">
        <img src={testimonial.image} alt={testimonial.name} />
      </div>
      <h5 className="testimonial__name">{testimonial.name}</h5>
      <h2 className="testimonial__name">{testimonial.title}</h2>
      <h5 className="testimonial__name">{testimonial.company}</h5>
      <small className="testimonial__review">{testimonial.review}</small>
    </SwiperSlide>
  ));

  return (
    <section id="testimonials">
      <h5>Review from Managers/Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials}
      </Swiper>
    </section>
  );
};

export default Testimonials;

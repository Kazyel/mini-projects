import Card from "../../components/Card/Card";
import { FaArrowRight, FaArrowLeft, FaReact } from "react-icons/fa";
import { projects } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "./Home.css";

const Home = () => {
  const swiperRef = useRef();

  return (
    <div className="mt-[5rem] flex flex-col justify-center items-center ">
      <div className=" border-b-2 flex items-center gap-2 border-light w-[1000px] pb-4">
        <span className="text-center text-light text-[1.75rem] font-bold">
          <span className="text-accent">Hey!</span>👋 Here I store and display
          cool
        </span>{" "}
        <FaReact className="text-[#149eca] w-9 h-9"></FaReact>
        <span className="text-center text-light text-[1.75rem] font-bold">
          {" "}
          things I found on the internet!
        </span>
      </div>

      <p className="text-6xl text-mid font-semibold mt-[6rem] mb-12 text-center">
        <span className="text-accent font-bold">Check</span> some of the{" "}
        <span className="text-lightest">stuff</span>!
      </p>
      <div className="flex gap-8 justify-center items-center select-none">
        <FaArrowLeft
          onClick={() => swiperRef.current.slidePrev()}
          className="h-12 w-12 p-2 mb-9 cursor-pointer rounded-full hover:text-accent hover:bg-dark transition-all duration-200 ease"
        ></FaArrowLeft>

        <Swiper
          speed={400}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={25}
          slidesPerView={3}
          modules={[Pagination]}
          grabCursor={true}
          pagination={true}
          className="max-w-[868px] rounded-xl"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.name}>
              <Card
                name={project.name}
                description={project.description}
                url={project.url}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <FaArrowRight
          onClick={() => swiperRef.current.slideNext()}
          className="h-12 w-12 p-2 mb-9 cursor-pointer rounded-full hover:text-accent hover:bg-dark transition-all duration-200 ease"
        ></FaArrowRight>
      </div>
    </div>
  );
};

export default Home;

import Navbar from "../../components/Navbar/Navbar";

Navbar;

const About = () => {
  return (
    <>
      <Navbar aboutActive={true}></Navbar>
      <div className="mt-[15.5rem] about font-poppins text-lg">
        <h2 className="border-l-4 border-l-accent font-semibold px-3 text-4xl">
          Why building this website?
        </h2>
        <p className="text-mid text-2xl text-justify mt-8 leading-9 font-normal">
          The idea of making this website started after a while watching some
          general and interview questions for React. I thought to myself that
          would be pretty cool if I had some place to store and display some
          patterns and knowledge from those questions with a simple but pleasant
          look. So, the place is here!
        </p>
      </div>
    </>
  );
};

export default About;

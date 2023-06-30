import Card from "../../components/Card/Card";

const projects = [
  {
    id: 1,
    name: "Teste 1",
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 2,
    name: "Teste 2",
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 3,
    name: "Teste 3",
    description: "Lorem ipsum dolor sit.",
  },
];

const Home = () => {
  return (
    <>
      <div>
        <h2 className="text-center text-3xl font-bold border-b-2 pb-7">
          Hey!👋 Here I save and display some cool things I saw on the internet.
        </h2>
        <p className="text-xl mt-7 text-justify leading-8 font-extralight">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est et
          tempora harum hic doloremque, nulla ipsum. Dolores beatae modi qui
          veritatis provident harum, error vel, impedit eos minima minus sequi
          veniam maxime quod suscipit nobis itaque possimus fuga laborum quas
          nihil, eligendi nulla reiciendis. Unde delectus commodi quae
          reprehenderit aut voluptatem repudiandae impedit velit eos suscipit
          eveniet numquam in laborum ipsum quas iure, dolorum error dolore.{" "}
        </p>
      </div>
      <div className="mt-14 flex gap-8 justify-center items-center">
        {projects.map((project) => (
          <Card
            key={project.name}
            name={project.name}
            description={project.description}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default Home;

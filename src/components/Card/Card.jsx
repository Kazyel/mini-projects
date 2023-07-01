import { Link } from "react-router-dom";

const Card = ({ name, description, url }) => {
  return (
    <Link to={url}>
      <div className="w-[272px] h-[272px] border border-b-[9px] hover:border-b-2 flex flex-col justify-center items-center rounded-2xl">
        <h2 className="text-2xl font-bold">
          <span className="text-accent">{name.charAt(0)}</span>
          {name.substring(1)}
        </h2>
        <p className="text-sm text-mid">{description}</p>
      </div>
    </Link>
  );
};

export default Card;

const Card = ({ name, description }) => {
  return (
    <div className="w-[240px] h-[240px] border border-b-[8px] hover:border-b-2 flex flex-col justify-center items-center rounded-xl">
      <h2 className="text-2xl font-bold">
        <span className="text-accent">{name.charAt(0)}</span>{name.substring(1)}
      </h2>
      <p className="text-sm text-mid">{description}</p>
    </div>
  );
};

export default Card;

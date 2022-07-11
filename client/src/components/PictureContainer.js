import Picture from "./Picture";

function PictureContainer({ pics }) {
  const picCard = pics.map((pic) => <Picture key={pic.id} pic={pic} />);


  return <>{picCard}</>;
}

export default PictureContainer;

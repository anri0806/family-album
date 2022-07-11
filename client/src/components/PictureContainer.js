import Picture from "./Picture";

function PictureContainer({ pics, onDelete }) {
  const picCard = pics.map((pic) => (
    <Picture key={pic.id} pic={pic} onDelete={onDelete} />
  ));

  return <>{picCard}</>;
}

export default PictureContainer;

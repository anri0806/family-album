import PictureCard from "./PictureCard";

function PictureContainer({ pics, onDelete, currentUser }) {
  const picCard = pics.map((pic) => (
    <PictureCard
      key={pic.id}
      pic={pic}
      currentUser={currentUser}
      onDelete={onDelete}
    />
  ));

  return <div className="pic-container"><ul>{picCard}</ul></div>;
}

export default PictureContainer;

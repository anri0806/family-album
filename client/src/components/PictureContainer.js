import { useState } from "react";
import PictureCard from "./PictureCard";

function PictureContainer({ pics, onDelete }) {
  const [comments, setComments] = useState([]);

  function handleRenderComment(item) {
    fetch("/comments")
      .then((res) => res.json())
      .then((comments) => {
        const filteredComment = comments.filter(
          (com) => com.picture_id === item.id
        );
        setComments(filteredComment);
      });
  }

  const picCard = pics.map((pic) => (
    <PictureCard
      key={pic.id}
      pic={pic}
      comments={comments}
      onDelete={onDelete}
      onClickComment={handleRenderComment}
    />
  ));

  return <>{picCard}</>;
}

export default PictureContainer;

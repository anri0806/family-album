import { useEffect, useState } from "react";
import Picture from "./Picture";

function PictureContainer() {
  const [pictures, setPictures] = useState([]);

  const picCard = pictures.map((pic) => <Picture key={pic.id} pic={pic} />);

  useEffect(() => {
    fetch("/pictures")
      .then((res) => res.json())
      .then((pics) => setPictures(pics));
  }, []);

  return (
    <>
      <p>This is pictureContainer</p>
      {picCard}
    </>
  );
}

export default PictureContainer;

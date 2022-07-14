import { useEffect, useState } from "react";
import { storage } from "./firebase";
import { listAll, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function PictureForm({ currentUser, onSubmitAddPic }) {
  const [uploadImage, setUploadImage] = useState("");
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    image: "",
    caption: "",
    user_id: currentUser.id,
  });

  useEffect(() => {
    const imageListRef = ref(storage, "images/");
    const imageRef = ref(storage, `images/${uploadImage.name + v4()}`);

    uploadBytes(imageRef, uploadImage).then(() => {
      listAll(imageListRef).then((response) => {
        response.items.filter((item) => {
          if (item.name === imageRef.name) {
            getDownloadURL(item).then((url) => {
              formData.image = url;
              setFormData(formData);
            });
          }
          return null;
        });
      });
    });

    setUploadImage("");
  }, [uploadImage]);

  function handleUpload(e) {
    setUploadImage(e.target.files[0]);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/pictures", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((newPicture) => onSubmitAddPic(newPicture));
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });

    setFormData({
      image: "",
      caption: "",
      user_id: currentUser.id,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Upload images</label>
        <input onChange={handleUpload} type="file" name="image" id="image" />
        <label>Caption</label>
        <textarea
          value={formData.caption}
          onChange={handleChange}
          name="caption"
        />
        <button type="submit">Post</button>
      </form>
      {errors
        ? errors.map((err) => (
            <div>
              {" "}
              <p>{err}</p>{" "}
            </div>
          ))
        : null}
    </>
  );
}

export default PictureForm;

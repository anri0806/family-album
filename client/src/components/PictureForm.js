import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";

import { storage } from "./firebase";
import { listAll, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function PictureForm({ currentUser, onSubmitAddPic }) {
  const [showAlert, setShowAlert] = useState(false);
  const [uploadImage, setUploadImage] = useState("");
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    image: "",
    caption: "",
    user_id: currentUser.id,
  });

  console.log(uploadImage)

  ///////////// saves uploaded photo to external storage /////////////

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


  ///////////// add new photo /////////////

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
        res.json().then((newPicture) => {
          onSubmitAddPic(newPicture);
          setShowAlert(true);
        });
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

  ///////////////////////////////////////////////

  
  return (
    <div className="picture-form">
      {showAlert ? <Alert variant="info">Added successfully!</Alert> : null}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            onChange={handleUpload}
            type="file"
            name="image"
            id="image"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCaption">
          <FloatingLabel controlId="floatingTextarea" label="Add caption">
            <Form.Control
              value={formData.caption}
              onChange={handleChange}
              name="caption"
              as="textarea"
              placeholder="Add caption here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </Form.Group>

        <Button variant="light" type="submit">
          Post
        </Button>
      </Form>
      {errors
        ? errors.map((err) => (
            <div>
              {" "}
              <p>{err}</p>{" "}
            </div>
          ))
        : null}
    </div>
  );
}

export default PictureForm;

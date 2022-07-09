/// IN ORDER TO ADD "posted by Amy", Add nested route in "/pictures" ///


function Picture({ pic }) {
  return (
    <>
      <img src={pic.image} alt="family" width="50%" />
      <p>Posted on {pic.date}</p>
    </>
  );
}

export default Picture;

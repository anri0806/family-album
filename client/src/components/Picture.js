function Picture({ pic }) {
  return (
    <div className="pic-detail-compo">
      <img src={pic.image} alt="family" />

      <div className="pic-details">
        <p>{pic.created_at.slice(0, 10)}</p>
        {/* Added who posted (when i post, its not associated yet) */}
        <p>"{pic.caption}"</p>
        <p>Posted by {pic.user.username}</p>
      </div>
    </div>
  );
}

export default Picture;

function BlogItem(props) {
  return (
    <div class="col-4">
      <div class="blog-box">
        <div class="blog-img">
          <img src={props.BlogImage} alt="Hadis" class="img-fluid" />
        </div>
        <div class="blog-content">
          <h3 class="blog-title">{props.BlogTitle}</h3>
          <p class="blog-desc">
            Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien
            massa, convallis a pellentesque nec, egestas non nisi.
          </p>
        </div>
        <div class="blog-footer">
          <div class="post-author">
            <p class="author">Hadis Jamali</p>
          </div>
          <div class="post-date">
            <span class="bi bi-clock"></span> {props.BlogTime}
          </div>
        </div>
      </div>
    </div>
  );
}
export default BlogItem;

import "./Blog.css";
import BlogItem from "./BlogItem";
import Blog1Image from "../../assets/images/post-1.jpg";
import Blog2Image from "../../assets/images/post-2.jpg";
import Blog3Image from "../../assets/images/post-3.jpg";

function Blog() {
  let blog = [
    { BlogImage: Blog1Image, BlogTitle: "post title 1", BlogTime: "10" },
    { BlogImage: Blog2Image, BlogTitle: "post title 2", BlogTime: "15" },
    { BlogImage: Blog3Image, BlogTitle: "post title 3", BlogTime: "25" },
  ];
  return (
    <section id="blog">
      <div class="container">
        <div class="section-info">
          <h2 class="section-title">BLOG</h2>
          <p class="section-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="row">
          <BlogItem {...blog[0]}></BlogItem>
          <BlogItem {...blog[1]}></BlogItem>
          <BlogItem {...blog[2]}></BlogItem>
        </div>
      </div>
    </section>
  );
}
export default Blog;

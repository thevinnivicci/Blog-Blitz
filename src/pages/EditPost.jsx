import { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import apperiteService from "../appwrite/AppwriteConfig";
import { useNavigate } from "react-router-dom";
function EditPost() {
  const [post, setPosts] = useState([null]);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (slug) {
      apperiteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return posts ? (
    <div className="py-8 ">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;

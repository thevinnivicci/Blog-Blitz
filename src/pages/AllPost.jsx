import { useState, useEffect } from "react";
import appwriteService from "../appwrite/AppwriteConfig";
import { Container, PostCard } from "../components";

const AllPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  appwriteService.getPost([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });

  return (
    <div className="py-8 w-full">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={posts.$id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPost;

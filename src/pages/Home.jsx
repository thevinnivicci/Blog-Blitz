import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/AppwriteConfig";
import { Container, PostCard } from "../components";
import Heroimg from "../assets/heroimg.jpg";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-fullbg-slate-100">
        <div className="lg:flex w-full min-h-fit lg:mt-20 lg:mb-20">
          <div className="lg:w-1/2 w-full flex flex-col  items-start justify-center space-y-10 p-10">
            <h1 className="text-6xl font-medium">
              Welcome to Blog <span className="text-slate-500">Blitz</span>{" "}
            </h1>
            <p className="text-start text-lg">
              📣 Get ready to embark on a thrilling journey through the
              blogosphere, where words come to life, ideas take flight, and
              creativity knows no bounds. Whether you're a seasoned blogger, a
              newbie looking for inspiration, or simply a lover of great
              content, you've just stepped into the perfect online haven.
            </p>
            <div className="flex space-x-4">
              <button className="btn btn-neutral">Get started</button>
              <button className="btn btn-neutral">
                <i class="ri-github-fill"></i>
                Github
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full p-5 flex justify-center  items-center">
            <img src={Heroimg} alt="" className="w-full rounded-md " />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full flex items-center justify-center p-5">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {posts.map((post) => (
        <div key={post.$id} className="w-full h-full">
          <PostCard {...post} />
        </div>
      ))}
    </div>
  </div>
  );
}

export default Home;

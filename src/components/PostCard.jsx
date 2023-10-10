import React from "react";
import appwriteService from "../appwrite/AppwriteConfig";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-base-300 p-5">
        <div>
          <img src={appwriteService.getFilePreview(featuredImage)} alt="img" />
        </div>
        <div className="text-start p-2 text-lg font-semibold capitalize">
          {title}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;

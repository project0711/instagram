import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      {/*  */}

      {/* 헤더 -> 아바타 + 유저네임 */}
      <div className="post__header">
        <Avatar
          className="post__avatar"
          src="https://i.ibb.co/R71nvmB/vex.jpg"
          alt=""
        />
        <h3>{username}</h3>
      </div>

      {/* 이미지 */}
      <img className="post__image" src={imageUrl} alt="" />

      {/* 유저네임 + 캡션 */}
      <p className="post__text">
        <strong>{username}</strong> {caption}
      </p>

      {/*  */}
    </div>
  );
}

export default Post;

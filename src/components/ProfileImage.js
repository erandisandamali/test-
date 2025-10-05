import React from "react";
import "./ProfileImage.css";

const ProfileImage = ({ src, alt }) => (
  <div className="profile-border">
    <img src={src} alt={alt} className="profile-img" />
  </div>
);

export default ProfileImage;

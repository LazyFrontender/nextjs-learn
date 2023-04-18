import React from "react";

export default function Courses({ course }) {
  const { title, price, image, description, author, avatar } =
    course.attributes;
  return (
    <>
      <div>
        <img src={image.data.attributes.url} alt={title} />
      </div>
      <h3>{title}</h3>
      <h4>{description}</h4>
      <h3>$ {price}</h3>
      <div>
        <h4>{author}</h4>
        <img src={avatar.data.attributes.url} alt={title} />
      </div>
    </>
  );
}

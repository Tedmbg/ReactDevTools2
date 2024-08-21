import React from "react";
import Details from "./details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <Details tel={props.tel} email={props.email} />
    </div>
  );
}

export default Card;

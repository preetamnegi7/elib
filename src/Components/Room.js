import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
export default function Room({ room }) {
  const { name, slug, images, price,readBook } = room;
  return (
    <article className="Room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>ISBN{price}</h6>
          <p></p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Details
        </Link>
        <Link to={`${readBook}`} className="btn-primary" target="_blank" >
          Read Now
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}
Room.propTypes = {
  room: PropTypes.shape({
    room: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    room: PropTypes.number.isRequired
  })
};

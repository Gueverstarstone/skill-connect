import React from "react";
import { useNavigate } from "react-router-dom";

function Clientpage(props) {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/workers/${props.id}`);
  };

  return (
    <div className="client-card">
      <div className="client">
        <div className="imageContainer">
          <img className="mainImage" src={props.img.src} alt={props.img.alt} />
        </div>

        <div className="infoContainer">
          <div>
            <img className="marker" src="/assets/marker.png" alt="marker" />
            <span className="country">{props.country}</span>
            <a href={props.googleMapsLink}>View on Google maps</a>
          </div>

          <div className="client_info">
            <h3 className="client_name">{props.name}</h3>
            <p className="client_title">{props.title}</p>
          </div>

          <div className="phone_nav">
            <img className="phone" src="/assets/phone.png" alt="phone" />
            <span className="phone_number">{props.phone}</span>
          </div>

          <div className="rating_nav">
            <img className="fav" src="/assets/fav.png" alt="fav" />
            <span className="ratings">{props.ratings}</span>
            <span className="experience">{props.experience}</span>
          </div>
        </div>
      </div>

      <button className="client-button" onClick={handleViewProfile}>
        View Profile
      </button>
    </div>
  );
}

export default Clientpage;

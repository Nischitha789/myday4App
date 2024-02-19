import React from "react";

const Card = ({ item, index }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-5">
      <div className="card h-100 ">
        <div key={index}>
          <div className="pic">
            <img src={item.image} className="card-img" alt="..." />
          </div>
          <div className="card-body p-4 ">
            <h4 className="card-text">{item.head}</h4>
            <p className="colorfull">{item.content}</p>
          </div>
          <div className="card-footer d-flex flex-row align-items-center bg-transparent">
            <small className="text-body-secondary">{item.month} {item.date}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import Card from "./Card";

const Stack = ({ data }) => {
  const fullstackData = data.filter(
    (item) => item.head === "Full Stack Development"
  );
  return (
    <div>
      <div className="row row-cols-4 mt-5">
      {fullstackData.map((item, index) => {
        return (
          <>
            <Card item={item} index={index} />
          </>
        );
      })}
      </div>
      </div>
  );
};

export default Stack;

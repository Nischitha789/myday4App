import React from "react";
import Card from "./Card";

const All = ({ data }) => {
  return (
    <div>
      
      <div className="row row-cols-4 mt-5">
        {data.map((item, index) => {
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

export default All;

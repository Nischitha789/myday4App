import React from "react";
import Card from "./Card";

const Cyber = ({ data }) => {
  const cyberSecurity = data.filter((item) => item.head === "Cyber");
  return (
    <div>
      <div className="row row-cols-4 mt-5">
        
        {cyberSecurity.map((item, index) => {
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

export default Cyber;

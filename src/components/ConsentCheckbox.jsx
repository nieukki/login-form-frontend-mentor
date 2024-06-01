import React from "react";

const ConsentCheckbox = () => {
  return (
    <div className="flex flex-row gap-x-4 my-4">
      <input type="checkbox"></input>
      <p className="text-base">
        I consent to being contacted by the team
        <span className="text-greenMedium"> *</span>
      </p>
    </div>
  );
};

export default ConsentCheckbox;

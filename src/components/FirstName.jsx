import React from "react";

const FirstName = () => {
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <p className="text-base">
        First Name <span className="text-greenMedium">*</span>
      </p>
      <input
        type="text"
        className="border border-greyMedium rounded-md p-2 w-full"
        required
      ></input>
    </div>
  );
};

export default FirstName;

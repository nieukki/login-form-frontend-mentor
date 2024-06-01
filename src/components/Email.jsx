import React from "react";

const Email = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-base">
        Email Address <span className="text-greenMedium">*</span>
      </p>
      <input
        type="text"
        className="border border-greyMedium rounded-md p-3 w-full"
      ></input>
      <p className="text-base text-red">Please enter a valid email address</p>
    </div>
  );
};

export default Email;

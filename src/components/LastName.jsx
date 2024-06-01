import React from "react";

const LastName = () => {
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <p className="text-base">
        Last Name <span className="text-greenMedium">*</span>
      </p>
      <input
        type="text"
        className="border border-greyMedium rounded-md p-2 w-full"
        required
      ></input>
    </div>
  );
};

export default LastName;

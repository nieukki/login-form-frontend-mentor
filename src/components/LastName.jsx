import React from "react";

const LastName = ({ setLastName, error }) => {
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <p className="text-base">
        Last Name <span className="text-greenMedium">*</span>
      </p>
      <input
        type="text"
        className="border border-greyMedium rounded-md p-3 w-full"
        required
      />
    </div>
  );
};

export default LastName;

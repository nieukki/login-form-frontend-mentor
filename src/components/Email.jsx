import React from "react";

const Email = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-base">
        Email Address <span className="text-greenMedium">*</span>
      </p>
      <input
        type="text"
        required
        className="border border-greyMedium rounded-md p-3 w-full"
      />
    </div>
  );
};

export default Email;

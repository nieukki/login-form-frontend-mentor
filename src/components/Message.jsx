import React from "react";

const Message = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-base">
        Message <span className="text-greenMedium">*</span>
      </p>
      <textarea
        rows="4"
        className="border border-greyMedium rounded-md p-3 w-full resize-none"
      ></textarea>
    </div>
  );
};

export default Message;

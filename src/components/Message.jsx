import React from "react";

const Message = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-base">
        Message <span className="text-greenMedium">*</span>
      </p>
      <textarea
        rows="8"
        className="border border-greyMedium rounded-md p-2 w-full resize-none"
        required
      ></textarea>
    </div>
  );
};

export default Message;

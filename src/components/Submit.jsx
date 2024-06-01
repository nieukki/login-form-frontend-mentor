import React from "react";

const Submit = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <input
        type="submit"
        value="Submit"
        className="bg-greenMedium text-neutralWhite text-base font-bold rounded-md py-3 cursor-pointer"
      ></input>
    </div>
  );
};

export default Submit;

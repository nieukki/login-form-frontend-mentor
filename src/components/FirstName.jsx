import React from "react";

const FirstName = ({ setFirstName, error }) => {
  return (
    <>
      <div className="flex flex-col gap-y-2 w-full">
        <p className="text-base">
          First Name <span className="text-greenMedium">*</span>
        </p>
        {error ? (
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="border border-red rounded-md p-3 w-full"
          ></input>
        ) : (
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="border border-greyMedium rounded-md p-3 w-full"
          ></input>
        )}

        {error ? (
          <p className="text-base text-red">This field is required</p>
        ) : (
          <p className="text-base text-transparent">This field is required</p>
        )}
      </div>
    </>
  );
};

export default FirstName;

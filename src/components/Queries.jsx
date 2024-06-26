import React from "react";

const Queries = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-base">
        Query Type <span className="text-greenMedium">*</span>
      </p>
      <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-4">
        <div className="flex flex-row items-center justify-start gap-x-2 border border-greenMedium py-3 px-6 rounded-xl w-full">
          <input type="radio" name="query_type" required />
          <label className="text-base">General Enquiry</label>
        </div>
        <div className="flex flex-row items-center justify-start gap-x-2 border border-greenMedium py-3 px-6 rounded-xl w-full">
          <input type="radio" name="query_type" required />
          <label>Support Request</label>
        </div>
      </div>
    </div>
  );
};

export default Queries;

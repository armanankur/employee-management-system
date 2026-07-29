
import React from "react";

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center ">

      <div className="relative h-8 w-8 animate-spin">
        <div className="absolute inset-0 rounded-full border-[3px] border-slate-200" />
        <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-fuchsia-700 border-r-purple-800" />
      </div>


    </div>
  );
};

export default Loading;

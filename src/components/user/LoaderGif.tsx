import React from "react";

const LoaderGif = () => {
  return (
    <div className="w-screen h-screen fixed z-10 top-0 left-0 bg-gray-100 dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 flex items-center justify-center pointer-events-none">
      <div className="w-1/4  h-full relative z-50 ">
        <iframe
          src="https://giphy.com/embed/eP7hei0yHQxzO"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default LoaderGif;

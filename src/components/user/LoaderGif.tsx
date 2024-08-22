import React from "react";

const LoaderGif = () => {
  return (
      <div className="w-screen h-screen fixed -z-10 top-0 left-0 bg-white bg-opacity-60 flex items-center justify-center pointer-events-none" >
      <div className="w-1/4  h-auto relative z-50 ">
        <iframe
          src="https://giphy.com/embed/yB6Jx4t4dov4O88qF1"
          width="100%"
          height="100%"
          className="position:absolute"
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <p>
        <a href="https://giphy.com/stickers/daybreak-studio-transparent-yB6Jx4t4dov4O88qF1">
          via GIPHY
        </a>
      </p>
    </div>
  );
};

export default LoaderGif;

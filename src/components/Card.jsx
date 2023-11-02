import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="h-full">
        <div className="max-w-xs mx-auto">
          <div className="flex flex-col h-full bg-white shadow-lg rounded-lg relative overflow-hidden">
            <figure className="relative h-0 pb-[56.25%] overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                src={props.img}
                width="320"
                height="180"
                alt="website image"
              />
            </figure>
            <div className="flex-grow flex flex-col p-5">
              <div className="flex-grow">
                <header className="mb-3">
                  <h3 className="text-lg text-gray-900 font-bold leading-snug">
                    {props.siteName}
                  </h3>
                </header>
                <div className="mb-8 pt-1 h-40 text-steelGray-950">
                  <p>{props.siteDec}</p>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <a
                  className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-studio-100 focus:outline-none focus-visible:ring-2 hover:bg-studio-200 text-studio-500"
                  href={props.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

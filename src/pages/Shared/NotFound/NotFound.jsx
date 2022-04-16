import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center py-24">
      <div>
        <h1 className="text-9xl">404</h1>
      </div>
      <div>
        <h2 className="font-medium">Oops! You're lost.</h2>
        <p>The page you are looking for was not found.</p>
      </div>
    </div>
  );
};

export default NotFound;

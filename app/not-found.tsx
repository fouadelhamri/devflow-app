import React from "react";

const NotFound = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-bold primary-text-gradient text-8xl ">404</p>
        <h1 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found 😕
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="primary-gradient rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
          >
            Go back home
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;

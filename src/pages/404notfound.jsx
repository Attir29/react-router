import React from "react";

export default function NotFound() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-200">
      <div className="flex flex-col justify-center items-center text-4xl font-bold">
        <h1>404 Not Found</h1>
        <h1>The page you are looking for does not exist.</h1>
      </div>
      
    </section>
  );
}
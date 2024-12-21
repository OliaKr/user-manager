"use client";
import React from "react";

const SearchUsers = () => {
  return (
    <div
      className="w-full flex justify-center transition-all duration-500 ease-in-out transform"
      style={{ animation: "fadeIn 0.5s ease-in-out" }}
    >
      <div className="relative w-full max-w-[90%] sm:max-w-sm">
        <input
          type="text"
          placeholder="Search by name, email, ID, or location"
          className="w-full pl-10 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm 
          hover:shadow-md transition-shadow duration-300"
        />
        <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
          >
            <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SearchUsers;

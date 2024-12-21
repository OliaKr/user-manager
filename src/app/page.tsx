"use client";
import SearchUsers from "./components/SearchUsers";
import AddUserButton from "./components/AddUserButton";

export default function Home() {
  return (
    <div className="container mx-auto px-4 ">
      {/* Background Circle */}
      <div
        className="circlePosition w-[300px] sm:w-[590px] h-[200px] sm:h-[400px] bg-[#ec5ff9] rounded-[100%] absolute 
        z-[-1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[100px] sm:blur-[150px]"
      ></div>

      {/* Header */}
      <div className="center m-auto w-[90%] sm:w-[70%]">
        <div className="centerText">
          <h2 className="text-[36px] sm:text-[50px] font-bold text-[#f323db] text-center mt-8 sm:mt-[30px] mb-4 sm:mb-[0.35rem]">
            User Manager Pro
          </h2>
          <p className="info text-center text-[16px] text-[#706f6f]">
            Easily Manage and Customize Users.
          </p>
        </div>
      </div>

      {/* Search and Add User Button */}
      <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-between mb-6 ">
        <div className="w-full justify-center sm:w-1/4">
          <SearchUsers />
        </div>
        <AddUserButton />
      </div>
      <div className="blurtext bg-[white] relative z-10 p-[20px] ">
        <p>Olia</p>
      </div>
    </div>
  );
}

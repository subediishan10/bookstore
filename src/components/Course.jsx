import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl ">
            We're delighted to have you{" "}
            <span className="text-pink-500">here!</span>
          </h1>
          <p className="mt-10">
            Emmet Abbreviation Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vel quo aliquid autem magni, eligendi placeat ex
            dolorum soluta mollitia impedit architecto voluptas provident
            molestiae earum maiores illum eius delectus sapiente.
          </p>
          <Link to="/">
            <button className=" cursor-pointer bg-pink-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
          {list.map((item) => {
            return <Cards item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Course;

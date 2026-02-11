import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
function Signup() {
  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <div
          id="my_modal_3"
          className="border border-base-content/10 shadow-md p-5 "
        >
          <div className="">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-lg">Signup</h3>
            {/**Name */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              {/**For daisy ui it is must cleaner code :border border-base-content/30 */}
              <hr className="border border-base-content/10" />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-80 px-3 py-2 outline-none rounded-md"
              />
            </div>
            {/*email*/}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              {/**For daisy ui it is must cleaner code :border border-base-content/30 */}
              <hr className="border border-base-content/10" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-2 outline-none rounded-md"
              />
            </div>
            {/*password*/}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <hr className="border border-base-content/10" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 outline-none rounded-md"
              />
            </div>
            {/*Button*/}
            <div className="flex justify-around mt-4 items-center">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p>
                Have account?{" "}
                <Link
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => {
                    document.getElementById("my_modal_3").showModal();
                  }}
                >
                  Login
                </Link>{" "}
                <Login />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

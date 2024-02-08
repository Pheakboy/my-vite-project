import React from "react";

const Contact = () => {
  return (
    <div className="w-full bg-white py-16 px-4 ease-in-out duration-100">
      <div className="container mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800 transform transition-transform hover:scale-105">
            Contact Us
          </h1>
        </header>{" "}
        <form className="max-w-xl mx-auto p-10 bg-white rounded-md shadow-2xl transform transition-transform hover:scale-105">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-all"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-all"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-all"
            ></textarea>
          </div>
          <div className="text-center">
            <button className="bg-gradient-to-r from-[#00df9a] to-[#32a8a4] hover:from-[#32a8a4] hover:to-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white transition-transform transform ease-in-out shadow-md focus:outline-none focus:ring focus:border-blue-300">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

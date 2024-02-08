import { Link } from "react-router-dom";
const NewLatter = () => {
  return (
    <div className="w-full md:h-72 py-6 text-white ">
      <div className="mx-w-[1240px]   mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 ml-8 my-4 ">
          <h1 className="md:text-4xl sm:text-3xl text-3xl font-bold py-2">
            What tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and get the latest updates and news.</p>
        </div>
        <div className="my-4 mr-3">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Your email address"
              className="flex w-[90%] p-3  rounded-md text-black mr-1"
            />
            <button className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 bg-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-auto transition-transform transform hover:scale-105 ease-in-out border">
              Subscribe
            </button>
          </div>
          <p className="mx-6">
            We care both the protection of your data.
            <Link to="/policy" className="text-[#00df9a] mx-6">
              Read our privacy policy.{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewLatter;

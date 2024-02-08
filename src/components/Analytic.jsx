import Laptop from "../assets/laptop.jpg";
import { Link } from "react-router-dom";
const Analytic = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4 " src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTIC DASHBORD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            officiis, natus culpa sed sapiente blanditiis dolor alias ad debitis
            rerum odit voluptate. Molestiae exercitationem cum doloribus quos
            vitae, blanditiis aliquam.
          </p>
          <Link
            to="https://www.w3schools.com/"
            className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 bg-white w-[200px] rounded-md font-medium my-6 py-3 md:mx-auto transition-transform transform hover:scale-105 ease-in-out border border-black mx-auto text-center"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Analytic;

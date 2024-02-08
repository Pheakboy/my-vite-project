import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const Card = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Signle User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 ">1 Granted User</p>
            <p className="py-2 border-b mx-8 ">Send up t 2 GB</p>
          </div>
          <button className="bg-gradient-to-r from-[#00df9a] to-[#32a8a4] hover:from-[#32a8a4] hover:to-[#00df9a] w-full sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px] rounded-md font-medium my-6 mx-auto py-3 text-white transition-transform transform hover:scale-105 ease-in-out shadow-md focus:outline-none focus:ring focus:border-blue-300">
            Started Tril
          </button>
        </div>
        <div className="w-full bg-gray-200 shadow-2xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-center text-4xl font-bold">$179</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8 ">2 Granted User</p>
            <p className="py-2 border-b mx-8 ">Send up t 5 GB</p>
          </div>
          <button className="bg-gradient-to-r from-[#00df9a] to-[#32a8a4] hover:from-[#32a8a4] hover:to-[#00df9a] w-full sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px] rounded-md font-medium my-6 mx-auto py-3 text-white transition-transform transform hover:scale-105 ease-in-out shadow-md focus:outline-none focus:ring focus:border-blue-300">
            Started Trail
          </button>
        </div>
        <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Multiple User</h2>
          <p className="text-center text-4xl font-bold">$299</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">10 TB Storage</p>
            <p className="py-2 border-b mx-8 ">More than 2  Granted User</p>
            <p className="py-2 border-b mx-8 ">Send up t 100 GB</p>
          </div>
          <button className="bg-gradient-to-r from-[#00df9a] to-[#32a8a4] hover:from-[#32a8a4] hover:to-[#00df9a] w-full sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px] rounded-md font-medium my-6 mx-auto py-3 text-white transition-transform transform hover:scale-105 ease-in-out shadow-md focus:outline-none focus:ring focus:border-blue-300">
            Started Trail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

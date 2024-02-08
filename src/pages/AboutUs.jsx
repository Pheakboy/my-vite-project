import img1 from "../assets/MyPic.jpg";
import img2 from "../assets/MyImg.jpg";

const AboutUs = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="container  mx-auto my-8 shadow-lg">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800">About Us</h1>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="team-member bg-white p-8 rounded-lg shadow-md transition transform hover:scale-105">
            <div className="mb-4">
              <img
                src={img1}
                alt="Team Member 1"
                className="w-full h-auto rounded-full"
              />
            </div>
            <h2 className="text-xl font-semibold text-center text-white rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
              SOT SOPHEAKTRA
            </h2>
            <p className="text-gray-600 text-center font-medium ">Web Designer</p>
          </div>
          <div className="team-member bg-white p-8 rounded-lg shadow-md transition transform hover:scale-105">
            <div className="mb-4">
              <img
                src={img2}
                alt="Team Member 2"
                className="w-full h-auto rounded-full"
              />
            </div>
            <h2 className="text-2xl font-semibold text-center rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
              SOT SOPHEAKTRA
            </h2>
            <p className="text-gray-600 text-center font-medium">Frontend Developer</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

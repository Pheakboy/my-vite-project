import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 md:py-16">
      <div className="container mx-auto grid grid-cols-1 sm:flex-col md:grid-cols-3 gap-8 text-gray-300">
        <div className="col-span-1 md:col-span-2 text-center sm:mx-auto">
          <h2 className="text-3xl font-bold text-[#00df9a]  sm:mb-3">
            <a href="#">React.</a>
          </h2>
          <p className="mb-4">
            Supercharge your web development with React. Learn, build, and
            innovate with our powerful tools and community support.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-[#00df9a]">
              Documentation
            </a>
            <a href="#" className="text-[#00df9a]">
              Community
            </a>
            <Link to='https://www.w3schools.com/'className="text-[#00df9a]">Get Started</Link>
          </div>
        </div>

        <div className="col-span-1 text-center">
          <h3 className="text-2xl font-bold mb-4 sm:mx-auto">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-[#00df9a]">
              Twitter
            </a>
            <a href="#" className="text-[#00df9a]">
              GitHub
            </a>
            <a href="#" className="text-[#00df9a]">
              LinkedIn
            </a>
            <a href="#" className="text-[#00df9a]">
              FaceBook
            </a>
          </div>
        </div>
      </div>
      <p className="border-gray-600 mt-10 pt-4 text-center">
        &copy; 2024 CDDE. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

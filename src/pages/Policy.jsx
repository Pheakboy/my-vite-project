const Policy = () => {
  return (
    <div className="w-full bg-white py-10 px-4">
      <div className="container mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-700 ">Policy Page</h1>
        </header>
        <section className="max-w-2xl mx-auto bg-white p-8 rounded-md shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <p className="text-white font-medium rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
           {/* kom sl ke mnak eng ot sby te */}
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>  
          {/* Add more content for Privacy Policy as needed */}
        </section>
        <section className="max-w-2xl mx-auto bg-white p-8 mt-8 rounded-md shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
          <p className="text-white font-medium rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          {/* Add more content for Terms of Service as needed */}
        </section>
        <section className="max-w-2xl mx-auto bg-white p-8 mt-8 rounded-md shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Cookie Policy</h2>
          <p className="text-white font-medium rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          {/* Add more content for Cookie Policy as needed */}
        </section>
      </div>
    </div>
  );
};

export default Policy;

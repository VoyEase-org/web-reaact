import React from 'react';

const BlogOne = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 h-80">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-6xl font-bold">Burj Khalifa</h1>
          <p className="mt-4 text-xl max-w-2xl">
            Discover the architectural marvel that touches the sky. Burj Khalifa is the tallest structure in the world, a symbol of Dubai's vision and ambition.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-16 px-4 md:px-8 max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Image 1 */}
          <img src="https://th.bing.com/th/id/OIP.9D2Zx-Pjqo_66W6-C8F7sAHaE8?rs=1&pid=ImgDetMain" alt="Burj Khalifa 1" className="w-full h-64 object-cover rounded-lg shadow-md" />
          {/* Image 2 */}
          <img src="https://th.bing.com/th/id/R.d84e9e011b0471ba5a8a8f21efd76e7c?rik=97oqXn%2fY7UbRkw&riu=http%3a%2f%2fwww.e-architect.co.uk%2fimages%2fjpgs%2fdubai%2fburj_khalifa_a190110_4.jpg&ehk=LmS1%2fvVC0IqAiYeIvK0CfAxkCXWvq1n0VBhZW7rAtew%3d&risl=&pid=ImgRaw&r=0" alt="Burj Khalifa 2" className="w-full h-64 object-cover rounded-lg shadow-md" />
          {/* Image 3 */}
          <img src="https://facts.net/wp-content/uploads/2020/08/burj-khalifa-dubai.jpg" alt="Burj Khalifa 3" className="w-full h-64 object-cover rounded-lg shadow-md" />
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4 md:px-8 max-w-screen-lg mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold mb-6">About Burj Khalifa</h2>
            <p className="text-gray-700 mb-4">
              Burj Khalifa is a mega-tall skyscraper located in Dubai, United Arab Emirates. Standing at a height of 828 meters (2,717 feet), it is the tallest building in the world, surpassing previous record holders. Construction began in 2004, and the building was completed in 2010.
            </p>
            <p className="text-gray-700 mb-4">
              The Burj Khalifa has 163 floors, and its design combines both modern architecture and cultural influences from the region. The building is home to luxury apartments, offices, restaurants, and the world's highest observation deck, offering breathtaking views of the city and beyond.
            </p>
            <p className="text-gray-700 mb-4">
              Designed by the architectural firm Skidmore, Owings & Merrill, the Burj Khalifa also holds numerous records such as the tallest free-standing structure, the building with the most floors, and the highest outdoor observation deck.
            </p>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Quick Facts</h3>
            <ul className="list-disc pl-4 text-gray-700 space-y-2">
              <li>Height: 828 meters (2,717 feet)</li>
              <li>Floors: 163</li>
              <li>Location: Dubai, UAE</li>
              <li>Completed: 2010</li>
              <li>Architect: Adrian Smith (SOM)</li>
              <li>Function: Mixed-use (residential, commercial, observation deck)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogOne;

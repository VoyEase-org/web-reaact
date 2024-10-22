import React from 'react';

const Blog = () => {
  return (
    <div className="bg-gray-100">
     
      <div className="relative bg-navy-600 flex">
       
        <div className="w-2/5 bg-navy-600 text-white flex flex-col justify-center items-start px-8 py-20">
          <h1 className="text-5xl font-bold">Welcome to Our Blog</h1>
          <p className="mt-4 text-xl max-w-lg">
            Explore our latest posts, tips, and insights on everything from web development to tech news. Stay updated and inspired!
          </p>
          <button className="mt-10 bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600">
            Book Now &rarr;
          </button>
        </div>

       
        <div className="w-3/5">
          <img
            src="https://via.placeholder.com/800x600" 
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="py-16 px-4 md:px-8 max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Famous Landmarks</h2>

        {/* Blog Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-56 bg-gray-200">
              <img src="https://th.bing.com/th/id/R.e768452e372f9ba4c3e8177706449d89?rik=ru4sDvjVt3%2bCDQ&riu=http%3a%2f%2fwww.e-architect.co.uk%2fimages%2fjpgs%2fdubai%2fburj_khalifa_a190110_5.jpg&ehk=1a3n3svmfGKQiay6qAbtbktdGAl6s3WIokqIIDFXgfo%3d&risl=&pid=ImgRaw&r=0" alt="Burj Khalifa" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Burj Khalifa: The Tallest Structure</h3>
              <p className="mt-4 text-gray-600">
                Standing tall in Dubai, the Burj Khalifa is the tallest structure in the world, offering a breathtaking view from its observation deck.
              </p>
              <a href="/blog-one" className="text-blue-500 hover:underline mt-4 block">Read More →</a>
            </div>
          </div>

          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-56 bg-gray-200">
              <img src="https://th.bing.com/th/id/R.7e963fb4eb81e4d97faac7b5e182b59d?rik=VKCw8e11L9SyGw&riu=http%3a%2f%2fwww.thehistoryhub.com%2fwp-content%2fuploads%2f2014%2f10%2fGreat-Pyramid-of-Giza-Images.jpg&ehk=I42M50edxNl48kUbAwyVgaygN9qf3l9KNwHMw4ySrts%3d&risl=&pid=ImgRaw&r=0" alt="Pyramids of Giza" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Pyramids of Giza: Ancient Marvels</h3>
              <p className="mt-4 text-gray-600">
                These ancient pyramids in Egypt are some of the oldest and most remarkable architectural feats in human history.
              </p>
              <a href="#" className="text-blue-500 hover:underline mt-4 block">Read More →</a>
            </div>
          </div>

         
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-56 bg-gray-200">
              <img src="https://th.bing.com/th/id/OIP.xIzy3SdLcZt4MUppDOYsBwHaLG?rs=1&pid=ImgDetMain" alt="Eiffel Tower" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Eiffel Tower: Paris' Icon</h3>
              <p className="mt-4 text-gray-600">
                One of the most famous landmarks in the world, the Eiffel Tower stands as a symbol of love and elegance in the heart of Paris.
              </p>
              <a href="#" className="text-blue-500 hover:underline mt-4 block">Read More →</a>
            </div>
          </div>

         
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-56 bg-gray-200">
              <img src="https://travel2next.com/wp-content/uploads/2020/10/famous-landmarks-asia-2-1024x681.jpg" alt="Twin Towers" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Petronas Twin Towers: Malaysia's Pride</h3>
              <p className="mt-4 text-gray-600">
                Located in Kuala Lumpur, these twin skyscrapers represent the architectural brilliance and modernity of Malaysia.
              </p>
              <a href="#" className="text-blue-500 hover:underline mt-4 block">Read More →</a>
            </div>
          </div>

          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-56 bg-gray-200">
              <img src="https://th.bing.com/th/id/OIP.sJ_1dtgEJaLdBWXiHxEnHAAAAA?rs=1&pid=ImgDetMain" alt="Taj Mahal" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Taj Mahal: A Monument of Love</h3>
              <p className="mt-4 text-gray-600">
                Built by Mughal Emperor Shah Jahan, the Taj Mahal is a symbol of eternal love and one of the most beautiful structures in the world.
              </p>
              <a href="#" className="text-blue-500 hover:underline mt-4 block">Read More →</a>
            </div>
          </div>

          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-56 bg-gray-200">
              <img src="https://upload.wikimedia.org/wikipedia/en/a/a5/Liberty-statue-from-below_cropped.jpg" alt="Statue of Liberty" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Statue of Liberty: Freedom's Beacon</h3>
              <p className="mt-4 text-gray-600">
                A gift from France, the Statue of Liberty stands tall in New York as a symbol of freedom and democracy.
              </p>
              <a href="#" className="text-blue-500 hover:underline mt-4 block">Read More →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import CardFeature from "../../partials/CardFeature";
import CardEvent from "../../partials/CardEvent";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow">
          <div className="relative">
            {/* Hero Section */}
            <div className="relative h-screen">
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <img
                src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
                alt="Cycling hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <div className="max-w-3xl">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                    Ride Beyond Limits
                  </h1>
                  <p className="text-xl md:text-2xl text-white mb-8">
                    Discover the world on two wheels with our expert guides and
                    community
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                      to="/road-biking"
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition transform hover:scale-105"
                    >
                      Road Biking
                    </Link>
                    <Link
                      to="/mountain-biking"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition transform hover:scale-105"
                    >
                      Mountain Biking
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Sections */}
            <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Explore Cycling Disciplines
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                  Whether you prefer smooth pavement or rugged trails, we've got
                  you covered
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Road Biking Card */}
                <CardFeature
                  image={
                    "https://images.unsplash.com/photo-1531045535792-b515d59c3d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
                  }
                  alt={"Road biking"}
                  title={"Road Biking"}
                  description={"Speed, endurance, and the open road"}
                  toLink={"/road-biking"}
                  btnTextColor={"text-green-700"}
                />

                {/* Mountain Biking Card */}
                <CardFeature
                  image={
                    "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
                  }
                  alt={"Road biking"}
                  title={"Mountain biking"}
                  description={" Trails, adrenaline, and outdoor adventure"}
                  toLink={"/mountain-biking"}
                  btnTextColor={"text-blue-700"}
                />

                {/* <div className="relative group overflow-hidden rounded-2xl shadow-xl h-96">
                  <img
                    src="https://images.unsplash.com/photo-1531045535792-b515d59c3d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
                    alt="Road biking"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">Road Biking</h3>
                    <p className="mb-4">Speed, endurance, and the open road</p>
                    <Link
                      to="/road-biking"
                      className="inline-block bg-white text-green-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition"
                    >
                      Explore →
                    </Link>
                  </div>
                </div> */}

                {/* <div className="relative group overflow-hidden rounded-2xl shadow-xl h-96">
                  <img
                    src="https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
                    alt="Mountain biking"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">Mountain Biking</h3>
                    <p className="mb-4">
                      Trails, adrenaline, and outdoor adventure
                    </p>
                    <Link
                      to="/mountain-biking"
                      className="inline-block bg-white text-blue-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition"
                    >
                      Explore →
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-gray-900 text-white py-16">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Upcoming Cycling Events
                  </h2>
                  <p className="mt-4 max-w-2xl mx-auto text-gray-400">
                    Join our community rides and competitions
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Event 1 */}
                  <CardEvent
                    image={
                      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    }
                    alt={"Alpine Challenge"}
                    title={"Alpine Challenge"}
                    location={"Road"}
                    locBgColor={"bg-green-900"}
                    locTextColor={"text-green-300"}
                    date={"June 15-17, 2023"}
                    place={"Swiss Alps"}
                  />

                  {/* Event 2 */}
                  <CardEvent
                    image={
                      "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    }
                    alt={"Trail Masters"}
                    title={"Trail Masters"}
                    location={"Mountain"}
                    locBgColor={"bg-blue-900"}
                    locTextColor={"text-blue-300"}
                    date={"July 8-9, 2023"}
                    place={"Moab, Utah"}
                  />

                  {/* Event 3 */}
                  <CardEvent
                    image={
                      "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    }
                    alt={"Urban Sprint"}
                    title={"Urban Sprint"}
                    location={"Road"}
                    locBgColor={"bg-green-900"}
                    locTextColor={"text-green-300"}
                    date={"August 5, 2023"}
                    place={"New York City"}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;

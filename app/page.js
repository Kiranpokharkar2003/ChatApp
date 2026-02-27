import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#282c34] text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center py-24 px-6 md:px-12 lg:px-24 xl:px-32 relative overflow-hidden">
        <div className="container mx-auto text-center md:text-left flex md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              MyChatApp - Chat with your friends and more!
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-10 leading-relaxed drop-shadow-md max-w-xl">
              Welcome to MyChatApp, the fun and easy way to connect with your
              friends and family. Stay in touch, share stories and laughs, and
              create lasting memories - all in one place.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
              <a
                href="your-github-link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-gray-500 hover:bg-gray-700 hover:border-transparent text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2" // Corrected attribute
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github mr-2"
                >
                  <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6 0-1.2-.5-2-1-2.2C18 10.3 16.2 10 15 9.5c-.3-.1-.5-.2 1-.8 2.8-.5 5.8-1.3 5.8-5 0-1.1-.3-2-1-2 0 0-1 0-3.2 1.6 0-.3-.1-.6-.1-.9 0-2 1-3 3.1-3 1.5 0 3 1 3 2.6 0 1.5 1 2.4 2 3.1 1 0 2-1.2 2-3 0-1.3-.5-2-1-2C11 6.5 10 7 9 8c-.1.4-.1.7-.1 1 0 1.3 1 2.2 2 2.9.7.1 1.4.3 2 1 .1 1.5 1 2.8 1.8 3.7l.3.5v5c0 .9.5 2 1 2h.1z"></path>
                </svg>
                View on GitHub
              </a>
              <Link
                href="/chat"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md inline-flex items-center"
              >
                Start Chatting
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 hidden md:block">
            <Image
              src="/public/images/chat-app.png" // Replace with your image path
              alt="Chat Illustration"
              width={500} // Adjust width as needed
              height={400} // Adjust height as needed
              priority
            />
          </div>
        </div>
      </section>

      {/* Animated Image Section */}
      {/* <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <Image
          src="/next/images/Image2.jpg" // Replace with your image path
          alt="Chat Illustration"
          fill
          style={{ objectFit: 'contain' }}
          className="animate-float"
          priority
        />
      </div> */}

      {/* Features Section */}
      <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center">
            Key Features
          </h2>
          <div className="flex flex-col md:flex-row md:justify-center gap-6 md:gap-8">
            {/* Feature Cards */}
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0v3.75m6.375-3.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0v3.75m-9.75 0h16.5"
                    />
                  </svg>
                ),
                title: "Instant Messaging",
                description:
                  "Send and receive messages instantly with real-time delivery and read receipts.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 1.5l-3 6m3 6h10.5m0-6l3-6"
                    />
                  </svg>
                ),
                title: "Secure & Private",
                description:
                  "End-to-end encryption ensures your conversations remain private and secure.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2 text-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 12V6a3 3 0 00-3-3H6a3 3 0 00-3 3v6m12 3v6a3 3 0 00-3 3H6a3 3 0 00-3-3v-6m12-3V9m-6 3h6m-6 3H6"
                    />
                  </svg>
                ),
                title: "Group Chats",
                description:
                  "Create and manage groups for seamless communication with multiple people.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2 text-indigo-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 20.25c-4.97 0-9-3.694-9-8.25s4.03-8.25 9-8.25 9 3.694 9 8.25-4.03 8.25-9 8.25z"
                    />
                  </svg>
                ),
                title: "User Friendly",
                description:
                  "Our app is designed with a simple and intuitive interface for easy navigation and use.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2 text-pink-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-15V4.058a3 3 0 00-3-3H6a3 3 0 00-3 3v16.942a3 3 0 003 3h10.5a3 3 0 003-3V4.5z"
                    />
                  </svg>
                ),
                title: "Cross-Platform Support",
                description:
                  "Access MyChatApp on all your devices, including smartphones, tablets, and desktops.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-full md:w-1/3"
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-lg md:text-xl font-bold text-gray-800">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            What Our Users Say
          </h2>
          <div className="flex flex-col md:flex-row md:justify-center gap-6 md:gap-8">
            {[
              {
                name: "John Doe",
                quote:
                  "MyChatApp has made staying in touch with my family so much easier. I love the group chat feature!",
              },
              {
                name: "Jane Smith",
                quote:
                  "The security and privacy features are top-notch. I feel confident using MyChatApp for all my communication needs.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/3 text-center"
              >
                <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
                <p className="text-gray-600 font-bold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-6 md:px-12 lg:px-24 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
            Ready to Connect?
          </h2>
          <p className="text-lg md:text-xl mb-10 leading-relaxed drop-shadow-md">
            Download MyChatApp today and start connecting with the world.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
            Download Now
          </button>
        </div>
      </section>

      {/* Footer Section (Integrated directly) */}
      <footer className="bg-gray-900 text-white py-8 px-4 md:px-12">
        <div className="container mx-auto flex flex-col items-center space-y-4">
          {/* Logo/Brand */}
          <Link href="/" className="text-2xl font-bold">
            MyChatApp
          </Link>

          {/* Copyright */}
          <p className="text-sm">
            &copy; {new Date().getFullYear()} MyChatApp. All rights reserved.
          </p>

          {/* Social Icons (Optional) */}
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12 2.163c3.204 0 3.584.012 5.049.06a5.972 5.972 0 014.335 4.336c.047 1.465.059 1.845.059 5.049s-.012 3.584-.06 5.049a5.972 5.972 0 01-4.335 4.335c-1.465.047-1.845.059-5.049.059s-3.584-.012-5.049-.06a5.972 5.972 0 01-4.335-4.335c-.047-1.465-.059-1.845-.059-5.049s.012-3.584.06-5.049a5.972 5.972 0 014.335-4.335c1.465-.047 1.845-.059 5.049-.059zM12 .163C6.475.163 1.162 5.475 1.162 11s5.313 10.837 10.838 10.837 10.837-5.313 10.837-10.837S17.525.163 12 .163zm0 5.41a5.411 5.411 0 100 10.822 5.411 5.411 0 000-10.822zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
              </svg>
            </a>
            {/* Add other social icons */}
          </div>
        </div>
      </footer>
      {/* ... (rest of the code - Image and Footer - remains the same) */}
    </div>
  );
}

export const metadata = {
  title: "Home - MyChatApp",
  description: "Its Begeing of chatting with someone ",
};

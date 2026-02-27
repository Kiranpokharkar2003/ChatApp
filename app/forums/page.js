import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import { config } from '@fortawesome/fontawesome-svg-core';
import { Button } from "@/components/ui/button"

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function ForumsPage() {
  const forumTopics = [
    {
      title: 'Python',
      description: 'Discuss everything related to Python',
      icon: '/python.svg',
      slug : 'python-Discuss',
    },
    {
      title: 'JavaScript',
      description: 'Learn and share JavaScript knowledge.',
      icon: '/javascript.svg',
      slug : 'javascript-Discuss',
    },
    {
      title: 'React',
      description: 'Build amazing user interfaces with React.',
      icon: '/react.svg',
      slug : 'react-Discuss',
    },
    {
      title: 'CSS',
      description: 'Explore the world of designing and CSS.',
      icon: '/css.svg',
      slug : 'css-Discuss',
    },
    {
      title: 'Web-Development',
      description: 'Discuss front-end, back-end, and full-stack web development.',
      icon: '/web-development.svg',
      slug : 'web-development-Discuss',
    },
  ];

  return (
    <div className="bg-gray-600 min-h-screen py-12">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center text-white mb-12">
          Discussion Forums
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {forumTopics.map((topic) => (
            <div key={topic.title} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                <img
                  src={topic.icon}
                  alt={topic.title + ' Icon'}
                  className="h-16 w-16"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                {topic.title}
              </h2>
              <p className="text-gray-600 text-center">{topic.description}</p>
              <div className="mt-4 text-center">
                <Link href={`/forum/${topic.slug}`}>
                  <Button className ='px-4 border border-slate-300 py-2'>Discuss now</Button>
                  <FontAwesomeIcon icon={faComments} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
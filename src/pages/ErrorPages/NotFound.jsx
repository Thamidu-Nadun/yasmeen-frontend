import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
      <div className="flex gap-x-4">
        <Link
          to="/"
          className="px-4 py-2 border border-transparent bg-blue-600 text-white rounded hover:bg-blue-50 hover:border-blue-600 hover:text-blue-600 transition"
        >
          Go Home
        </Link>
        <Link
          to="/"
          className="px-4 py-2 bg-blue-50 border border-blue-600 text-blue-600 rounded hover:bg-blue-700 hover:text-white transition"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

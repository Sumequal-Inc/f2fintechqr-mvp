'use client';

import AssignmentIcon from '@mui/icons-material/Assignment';

interface LoanTemplateProps {
  title: string;
  pdf: string;
  video: string;
}

export default function LoanTemplate({ title, pdf, video }: LoanTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-8 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-5xl font-extrabold text-white mb-8 text-center drop-shadow-lg">
        {title}
      </h2>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* PDF Section */}
        <div className="bg-white bg-opacity-90 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-gray-300 hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            📄 Product Document
          </h3>
          <div className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-md bg-gray-100 flex items-center justify-center h-72">
            <iframe
              src={pdf}
              className="w-full h-full rounded-lg"
              title={`${title} PDF`}
            />
          </div>
          <button
            className="mt-4 w-full py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium rounded-lg shadow-md hover:scale-105 hover:from-blue-700 transition duration-300"
            onClick={() => window.open(pdf, '_blank')}
          >
            📥 Download PDF
          </button>
        </div>

        {/* Video Section */}
        <div className="bg-white bg-opacity-90 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-gray-300 hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            🎥 Product Video
          </h3>
          <div className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-md bg-gray-100 flex items-center justify-center h-72">
            <iframe
              src={video}
              className="w-full h-full rounded-lg"
              title={`${title} Video`}
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Back Button */}
      <button
        className="mt-8 px-8 py-3 text-lg font-semibold bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-700 hover:scale-105 transition duration-300"
        onClick={() => window.history.back()}
      >
        ⬅️ Go Back
      </button>

      {/* Apply Now Button */}
      <a
        href="https://f2fintech.com/application-form"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 px-8 py-3 text-lg font-semibold bg-gradient-to-r from-green-500 to-green-300 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 hover:scale-105 transition duration-300"
      >
        <AssignmentIcon className="mr-2" />
        Apply Now
      </a>
    </div>
  );
}

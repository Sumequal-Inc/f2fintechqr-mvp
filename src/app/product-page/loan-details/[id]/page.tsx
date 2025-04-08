'use client';
import { useParams, useRouter } from 'next/navigation';

const loanData: { [key: string]: { title: string; pdf: string; video: string } } = {
  'professional-loan': {
    title: 'Professional Loan',
    pdf: 'https://f2fintech.in/professionalloan',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  'personal-loan': {
    title: 'Personal Loan',
    pdf: 'https://f2fintech.in/personalloanpdf',
    video: 'https://www.youtube.com/embed/BxRf5Myv3to',
  },
  'business-loan': {
    title: 'Business Loan',
    pdf: 'https://f2fintech.in/businessloanpdf',
    video: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
  },
  'home-loan': {
    title: 'Home Loan',
    pdf: 'https://f2fintech.in/homeloan',
    video: 'https://www.youtube.com/embed/hY7m5jjJ9mM',
  },
  'doctor-loan': {
    title: 'Doctor Loan',
    pdf: 'https://f2fintech.in/doctorloanpdf',
    video: 'https://www.youtube.com/embed/V-_O7nl0Ii0',
  },
  'finance-literacy-programme': {
    title: 'Finance Literacy Programme',
    pdf: 'https://f2fintech.in/flp/',
    video: 'https://www.youtube.com/embed/Ee02bjAkwGg',
  },
};

export default function LoanDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const loan = loanData[id];

  if (!loan) {
    return (
      <div className="p-10 text-center text-xl text-red-600">
        Loan type not found 🚫
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white p-6 sm:p-12 relative">

      {/* 🧭 Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/20 transition"
      >
        <span className="text-lg">←</span>
        <span className="hidden sm:inline text-sm font-medium">Back</span>
      </button>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300 drop-shadow-lg">
        {loan.title}
      </h1>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* PDF Card */}
        <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition flex flex-col justify-between min-h-[360px]">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">📄 View Loan Details (PDF)</h2>
            <p className="text-white/80 mb-6">
              Learn more about the loan, its features, and eligibility by checking out the detailed PDF guide.
            </p>
            <a
              href={loan.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Open PDF ↗
            </a>
          </div>

          {/* 🎯 Apply Now Button */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://f2fintech.com/application-form"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Apply Now 🚀
            </a>
          </div>
        </div>

        {/* Video Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold mb-4 text-white">🎥 Watch Loan Overview</h2>
          <p className="text-white/80 mb-6">
            Get a quick and engaging overview of this loan product through our short video explainer.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20 aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={loan.video}
              title={loan.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

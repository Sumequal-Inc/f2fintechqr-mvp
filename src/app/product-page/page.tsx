'use client';

import { useRouter } from 'next/navigation';

const products = [
  {
    title: "Professional Loan",
    description: "Unlock the potential of your business with our tailored professional loans designed to fuel growth and drive success.",
    icon: "💼",
  },
  {
    title: "Personal Loan",
    description: "Unlock your financial potential with our tailored personal loans, paving the way to your dreams with ease and confidence.",
    icon: "👤",
  },
  {
    title: "Business Loan",
    description: "Empower your business dreams with tailored financial solutions - seize growth opportunities with our flexible business loans.",
    icon: "🏢",
  },
  {
    title: "Home Loan",
    description: "Turn the key to your future with our personalized home loan options, designed to open the door to your ideal living space.",
    icon: "🏡",
  },
  {
    title: "Doctor Loan",
    description: "Unlock your medical aspirations with our specialized Doctor Loan, tailored to support your professional journey.",
    icon: "🩺",
  },
  {
    title: "Finance Literacy Programme",
    description: "Transform your financial know-how with our Finance Literacy Programme—empowering you to navigate personal finance confidently.",
    icon: "📖",
  },
];

export default function ProductPage() {
  const router = useRouter();

  const handleReadMore = (product: string) => {
    const route = product.toLowerCase().replace(/\s+/g, '-');
    router.push(`/product-page/loan-details/${route}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-10">
      <h1 className="text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg">
        Choose Your Loan Type
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl overflow-hidden p-6 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            {/* Icon */}
            <div className="absolute top-4 left-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-full text-4xl shadow-md">
              {product.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-white mt-16">{product.title}</h3>

            {/* Description */}
            <p className="text-white/80 text-sm mb-6">{product.description}</p>

            {/* Read More Button */}
            <button
              onClick={() => handleReadMore(product.title)}
              className="mt-auto px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:bg-gradient-to-l hover:scale-105 transition-transform duration-300"
            >
              Read More →
            </button>

            {/* Background Glowing Effect */}
            <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 opacity-30 blur-2xl rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

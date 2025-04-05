// app/product-page/loan-details/[slug]/page.tsx
'use client';
import { useParams } from 'next/navigation';
import LoanTemplate from '../../../components/LoanTemplate';

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
  const id = params.id as string;

  const loan = loanData[id];

  if (!loan) return <div className="p-10 text-center text-xl text-red-600">Loan type not found 🚫</div>;

  return <LoanTemplate title={loan.title} pdf={loan.pdf} video={loan.video} />;
}

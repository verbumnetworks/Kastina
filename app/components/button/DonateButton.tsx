'use client';

import Link from 'next/link';

export default function DonateButton({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/support"
      className={`inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition duration-300 ${className}`}
    >
      Support Us
    </Link>
  );
}

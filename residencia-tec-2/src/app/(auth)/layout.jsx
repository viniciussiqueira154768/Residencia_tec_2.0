'use client';

import Image from 'next/image';
import { AuthSidebar } from '../components/AuthSidebar';

export default function AuthLayout({ children }) {
  return (
    <main className="flex min-h-screen h-screen overflow-hidden bg-white dark:bg-gray-900">


      <div style={{ flexBasis: '45%' }} className="hidden lg:block h-full z-0 relative">
        <AuthSidebar />
      </div>


      <div
        className={`
          flex flex-1 flex-col justify-center items-center p-8
          bg-white text-gray-900 dark:bg-gray-900 dark:text-white
          h-full overflow-y-auto z-10 relative 
          lg:shadow-[-10px_0_20px_-5px_rgba(0,0,0,0.1)] dark:lg:shadow-none
        `}
        style={{ flexBasis: '65%' }}
      >

        <div className="w-full flex flex-col items-center">

          <div className="mb-6 relative h-24 w-48">
            <Image
              src="/logo.svg"
              alt="WebPower Logo"
              fill
              priority
            />
          </div>

          <div className="w-full">
            {children}
          </div>

        </div>
      </div>
    </main >
  );
}
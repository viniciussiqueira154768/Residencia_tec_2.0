'use client';

import Image from 'next/image'; 
import { AuthSidebar } from '../components/AuthSidebar'; 

export default function AuthLayout({ children }) {
  return (
    <main className="flex min-h-screen h-screen overflow-hidden">
            
      
      <div style={{ flexBasis: '45%' }} className="hidden lg:block h-full">
        <AuthSidebar />
      </div>
      
      
      <div 
        className="flex flex-1 flex-col justify-center items-center p-8 bg-white text-gray-900 dark:bg-gray-900 dark:text-white h-full overflow-y-auto"
        style={{ flexBasis: '55%' }}
      >
        <div className="w-full max-w-sm">
        
          
          <div className="mb-8 text-center relative h-32 w-full">
             <Image
              src="/logo.svg" 
              alt="WebPower Logo"
              fill

              priority
            />
          </div>
          
          {children}
        </div>
      </div>
    </main>
  );
}
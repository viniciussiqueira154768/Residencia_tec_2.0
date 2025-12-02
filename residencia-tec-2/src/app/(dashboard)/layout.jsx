import { Sidebar } from '../components/Sidebar';
import Image from 'next/image';
export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">

      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">

        <header className="h-20 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-end px-8">

          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold text-gray-700 dark:text-gray-200">John Alfredo</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Desenvolvedor Fullstack</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold">
              <Image src="/avatar.svg" alt="Avatar" width={50} height={50} />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
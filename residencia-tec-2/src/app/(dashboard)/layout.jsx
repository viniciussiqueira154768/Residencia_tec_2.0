import { Sidebar } from '../components/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Painel Esquerdo Fixo */}
      <Sidebar />

      {/* Área de Conteúdo Principal */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* Aqui entrará o Header depois (Data, Hora, Avatar) */}
        <header className="h-20 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-end px-8">
            {/* Placeholder do Header - Faremos na próxima etapa */}
            <div className="flex items-center gap-4">
                <div className="text-right hidden md:block">
                    <p className="text-sm font-bold text-gray-700 dark:text-gray-200">John Alfredo</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Desenvolvedor Fullstack</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold">
                    JA
                </div>
            </div>
        </header>

        {/* Conteúdo das Páginas (Ponto, Justificativa, etc) */}
        <div className="flex-1 overflow-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
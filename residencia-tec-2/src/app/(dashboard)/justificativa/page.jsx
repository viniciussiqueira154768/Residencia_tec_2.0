'use client';

import { useState } from 'react';
import { Upload, FileText, Trash2 } from 'lucide-react'; 
import { Clock } from '../../components/Clock';
import { CalendarJustificativa } from '../../components/CustomCalendar';

export default function JustificativaPage() {
  
  const [selectedRange, setSelectedRange] = useState({ start: null, end: null });
  const [justificativa, setJustificativa] = useState("");
  const [arquivo, setArquivo] = useState(null); 

  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setArquivo(file);
    }
  };

 
  const handleRemoveFile = (e) => {
    e.preventDefault(); 
    setArquivo(null);
  };

 
  const handleEnviar = () => {
   
    if (!selectedRange.start) {
      alert("Por favor, selecione o dia (ou período) da falta no calendário.");
      return;
    }
    if (!justificativa.trim()) {
      alert("Por favor, escreva o motivo da sua justificativa.");
      return;
    }
    
    const temAnexo = arquivo ? `📄 Anexo: ${arquivo.name}` : "⚠️ Sem anexo";

    
    const options = { day: '2-digit', month: '2-digit' };
    const dataTexto = selectedRange.start.toLocaleDateString('pt-BR', options);

   
    alert(`
      ✅ JUSTIFICATIVA ENVIADA!
      -------------------------
      Data: ${dataTexto}
      Motivo: ${justificativa}
      ${temAnexo}
    `);
    
    
    setJustificativa("");
    setArquivo(null);
  };

  return (
    <div className="max-w-5xl mx-auto pb-10">
      
      <Clock />

      <h1 className="text-2xl font-medium text-gray-800 dark:text-white mb-6">
        Abono de faltas:
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        
        <div className="flex-1 w-full">
          <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            Marque o dia
            {selectedRange.start && (
               <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-sans">
                 Data selecionada
               </span>
            )}
          </h2>
          <CalendarJustificativa onRangeSelect={setSelectedRange} />
        </div>

        
        <div className="flex-1 w-full">
          <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Justifique
          </h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700 h-[380px] flex flex-col justify-between transition-all">
            
            
            <textarea 
              value={justificativa}
              onChange={(e) => setJustificativa(e.target.value)}
              className="w-full h-32 resize-none bg-transparent border-none focus:ring-0 text-gray-600 dark:text-gray-300 placeholder-gray-400 text-sm p-0 leading-relaxed"
              placeholder="Digite aqui o motivo da sua falta (ex: consulta médica, problemas pessoais...)"
            ></textarea>

            
            <div className="mt-2">
              <p className="text-xs text-gray-400 mb-2 text-center">Anexar laudo ou atestado (Opcional)</p>
              
              <div className="relative">
               
                <input 
                  type="file" 
                  id="file-upload" 
                  className="hidden" 
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" 
                />
                
                <label 
                  htmlFor="file-upload"
                  className={`w-full border-2 border-dashed rounded-xl py-4 flex flex-col items-center justify-center cursor-pointer transition-all group
                    ${arquivo 
                      ? 'border-purple-400 bg-purple-50 dark:bg-purple-900/20' 
                      : 'border-gray-300 dark:border-gray-600 hover:border-purple-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  {arquivo ? (
                    
                    <div className="flex items-center gap-3 px-4 w-full justify-between">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="bg-purple-100 p-2 rounded-lg">
                            <FileText className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="text-left overflow-hidden">
                            <p className="text-sm font-bold text-purple-700 dark:text-purple-300 truncate max-w-[150px]">
                                {arquivo.name}
                            </p>
                            <p className="text-xs text-gray-500">
                                {(arquivo.size / 1024).toFixed(1)} KB
                            </p>
                        </div>
                      </div>
                      
                     
                      <button 
                        onClick={handleRemoveFile}
                        className="p-2 hover:bg-red-100 rounded-full text-gray-400 hover:text-red-500 transition-colors z-10"
                        title="Remover arquivo"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    
                    <>
                      <Upload className="w-6 h-6 mb-1 text-gray-400 group-hover:text-purple-600 transition-colors" />
                      <span className="text-lg font-medium text-gray-400 group-hover:text-purple-600 transition-colors">
                        Clique para enviar arquivo
                      </span>
                      <span className="text-xs text-gray-400 mt-1">PDF, Imagem ou Documento</span>
                    </>
                  )}
                </label>
              </div>
            </div>

          </div>
        </div>
      </div>

      
      <div className="mt-10 flex justify-center">
        <button 
          onClick={handleEnviar}
          className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 text-white font-bold text-lg py-3 px-24 rounded-full shadow-lg shadow-purple-200 dark:shadow-none transition-all transform hover:-translate-y-1 active:scale-95"
        >
          Enviar Justificativa
        </button>
      </div>

    </div>
  );
}
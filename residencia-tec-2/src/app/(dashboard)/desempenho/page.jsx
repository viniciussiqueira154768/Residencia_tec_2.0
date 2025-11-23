'use client';

import { Clock, CircleAlert, Plus, Filter } from 'lucide-react'; 
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function DesempenhoPage() {
  
  
  const data = [
    { name: 'Sem 1', normais: 40, extras: 4 },
    { name: 'Sem 2', normais: 42, extras: 6 },
    { name: 'Sem 3', normais: 38, extras: 2 },
    { name: 'Sem 4', normais: 40, extras: 5 },
  ];

  return (
    <div className="max-w-5xl mx-auto pb-10">
      
      
      <div className="flex items-center mb-8">
        <Filter className="w-5 h-5 text-gray-500 mr-2" />
        <div className="relative">
            <span className="text-gray-500 text-sm border-b-2 border-gray-200 pb-1 px-1 font-medium">Semanal</span>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        
        
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-3xl shadow-sm flex flex-col justify-center">
          <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-sm">Horas trabalhadas</h3>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-purple-600 flex items-center justify-center bg-white dark:bg-gray-700">
                <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-3xl font-extrabold text-gray-900 dark:text-white">12 Horas</span>
          </div>
        </div>

        
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-3xl shadow-sm flex flex-col justify-center">
          <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-sm">Horas Extras</h3>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-gray-900 dark:border-white flex items-center justify-center bg-white dark:bg-gray-700 relative">
                <Clock className="w-6 h-6 text-gray-900 dark:text-white" />
                
                <div className="absolute bottom-0 right-0 bg-white rounded-full">
                    <Plus className="w-3 h-3 text-gray-900" />
                </div>
            </div>
            <span className="text-3xl font-extrabold text-gray-900 dark:text-white">5 Horas</span>
          </div>
        </div>

       
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-3xl shadow-sm flex flex-col justify-center">
          <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-sm">Atrasos</h3>
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 rounded-full border-2 border-gray-900 dark:border-white flex items-center justify-center bg-white dark:bg-gray-700">
                <CircleAlert className="w-6 h-6 text-gray-900 dark:text-white" />
            </div>
            <span className="text-3xl font-extrabold text-gray-900 dark:text-white">2 vezes</span>
          </div>
        </div>
      </div>

      
      <h2 className="text-xl font-bold text-black dark:text-white mb-4 pl-1">Gráfico de desempenho</h2>

      
      <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-[2rem] shadow-sm">
        <p className="text-center text-gray-500 mb-8 font-medium">Banco de Horas - John (Semanal)</p>

        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              barSize={55} 
            >
              <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} stroke="#e5e7eb" opacity={0.5} />
              
              <XAxis 
                dataKey="name" 
                axisLine={true} 
                tickLine={false} 
                tick={{fill: '#4b5563', fontSize: 12, fontWeight: 500}}
                dy={10}
                stroke="#9ca3af"
              />
              
              <YAxis 
                axisLine={true} 
                tickLine={false} 
                tick={{fill: '#4b5563', fontSize: 12}}
                label={{ 
                    value: 'Quantidade de Horas', 
                    angle: -90, 
                    position: 'insideLeft', 
                    fill: '#6b7280', 
                    fontSize: 12,
                    dx: 0
                }}
                stroke="#9ca3af"
              />
              
              <Tooltip 
                cursor={{fill: 'rgba(0,0,0,0.05)'}}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              
              <Legend 
                verticalAlign="top" 
                align="right"
                iconType="rect"
                wrapperStyle={{ paddingBottom: '30px', fontSize: '12px' }}
              />
              
             
              <Bar dataKey="normais" name="Horas Normais" stackId="a" fill="#a78bfa" radius={[0, 0, 0, 0]} />
            
              <Bar dataKey="extras" name="Horas Extras" stackId="a" fill="#7c3aed" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}
'use client';

import { AuthButton } from "@/app/components/AuthButton";


export default function Recovery(){
    return (
        <>
        <h1 className="text-3xl font-bold mb-2 text-center text-gray-800 dark:text-white">
            Recuperar Senha
        </h1>
        
        
        <h3 className="text-center text-gray-600 dark:text-gray-400 mb-8 text-sm 
               border border-gray-300 dark:border-gray-600 
               rounded-lg p-4 bg-gray-100 dark:bg-gray-800">
            Email de recuperação enviado com sucesso!
        </h3>

        </>
    )
}
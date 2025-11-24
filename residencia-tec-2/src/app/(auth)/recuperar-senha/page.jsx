// src/app/(auth)/recuperar-senha/page.js
'use client';

import { Mail } from 'lucide-react'; 
import { useRouter } from 'next/navigation';

import { AuthInput } from '../../components/AuthInput';
import { AuthButton } from '../../components/AuthButton';

export default function RecuperarSenhaPage() {
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
   
    router.push('/recuperar-senha-validacao');
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-2 text-center text-gray-800 dark:text-white">
        Recuperar senha
      </h1>
      
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8 text-sm">
        Digite seu e-mail para receber o link de redefinição.
      </p>
    
      <form className="space-y-6" onSubmit={handleSubmit}>
        <AuthInput 
          icon={Mail} 
          type="email"
          placeholder="Digite seu endereço de e-mail"
          name="email"
        />
        
        <AuthButton>Enviar</AuthButton>
      </form>
    </>
  );
}
// app/(auth)/recuperar-senha/page.js

import { AuthButton } from '../../components/AuthButton';

export default function RecuperarSenhaPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-center">Recuperar senha</h1>
      
      <form className="space-y-6 mt-8">
        <div className="relative">
          <input 
            type="email"
            placeholder="Digite seu endereço de e-mail"
            className="w-full rounded-lg py-3 px-4 
                       bg-gray-100 border border-gray-300 text-gray-900
                       dark:bg-gray-800 dark:border-gray-600 dark:text-white
                       focus:outline-none focus:border-purple-500 dark:focus:border-purple-400
                       dark:focus:bg-gray-900"
            name="email"
          />
        </div>
        <AuthButton>Enviar</AuthButton>
      </form>
    </>
  );
}
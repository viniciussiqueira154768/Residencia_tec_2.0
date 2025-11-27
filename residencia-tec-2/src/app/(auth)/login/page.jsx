'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail } from 'lucide-react';
import { AuthInput } from '../../components/AuthInput';
import { PasswordInput } from '../../components/PasswordInput';
import { AuthButton } from '../../components/AuthButton';


export default function LoginPage() {

  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Fazendo login...");

    router.push('/ponto');
  };

  return (
    <>
      <Image
        src="/curvas2.svg"
        alt="efeito"
        width={350} height={350}
        className="absolute top-0 right-0 pointer-events-none"
      />

      <Image
        src="/curvas1.svg"
        alt="efeito"
        width={500}
        height={427}
        className="absolute bottom-0 left-[-150px]"
      />

      <div className="w-[420px] mx-auto">

        <h1 className="font-poppins font-medium text-4xl text-center text-[#8C00C6] 
        dark: text-[#ffffff]">
          Seja Bem-vindo!
        </h1>

        <form className="space-y-6 mt-20" onSubmit={handleLogin}>
          <AuthInput
            icon={Mail}
            type="email"
            placeholder="E-mail"
            name="email"
            required
          />

          <PasswordInput
            placeholder="Senha"
            name="password"
            required
          />

          <div className="flex items-center justify-between w-full mt-2">

            <div className="flex items-center gap-1 text-[19px] font-medium text-[#5A5A5A] dark:text-[#ffffff]">
              Esqueceu a senha?
              <Link
                href="/recuperar-senha"
                className="font-bold text-[#8C00C6] hover:underline"
              >
                Clique aqui
              </Link>
            </div>

            <label className="flex items-center gap-1 text-[19px] font-medium text-[#5A5A5A] dark:text-[#ffffff]">
              <input
                type="checkbox"
                className="w-4 h-4 rounded accent-purple-600 border-gray-300"
              />
              Lembrar
            </label>

          </div>

          <AuthButton type="submit">Entrar</AuthButton>

        </form>
      </div>
    </>
  );
}

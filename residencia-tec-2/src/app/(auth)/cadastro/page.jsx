'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { User, Mail } from 'lucide-react';
import { AuthInput } from '../../components/AuthInput';
import { PasswordInput } from '../../components/PasswordInput';
import { AuthButton } from '../../components/AuthButton';

export default function CadastroPage() {
  const router = useRouter();
  
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/auth/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        router.push('/conta-criada');
      } else {
        alert(`❌ Erro: ${data.erro}`);
      }
    } catch (error) {
      alert("Erro de conexão com o servidor.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex flex-col items-center w-full relative">
      
     
      <Image
        src="/curvas3.svg"
        alt="efeito"
        width={407} height={427}
        className="absolute top-59 right-0 left-205 pointer-events-none"
      />

      <Image
        src="/curvas4.svg"
        alt="efeito"
        width={500}
        height={427}
        className="absolute bottom-125 left-[-98px]"
      />

      <div className="w-[420px] max-w-full text-center z-10"> 

        <div className="mb-8">
           
        </div>

        <p className="text-xl font-poppins font-bold text-[#8C00C6] dark:text-[#ffffff] mb-8">
          Novo aqui? Cadastre-se!
        </p>

        
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          <AuthInput
            icon={User}
            type="text"
            placeholder="Nome completo"
            name="name"
            
            value={formData.name}
            onChange={handleChange}
            required
          />

          <AuthInput
            icon={Mail}
            type="email"
            placeholder="E-mail"
            name="email"
           
            value={formData.email}
            onChange={handleChange}
            required
          />

          <PasswordInput
            placeholder="Senha"
            name="password"
            
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="pt-2">
            <AuthButton type="submit" disabled={loading}>
              {loading ? "Criando conta..." : "Criar conta"}
            </AuthButton>
          </div>
        </form>
      </div>
    </div>
  );
}
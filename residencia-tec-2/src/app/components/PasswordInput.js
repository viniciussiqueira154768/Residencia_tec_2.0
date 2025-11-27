// app/components/PasswordInput.js
'use client';

import { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';

export function PasswordInput({ placeholder = "Senha", ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-[420px] h-10">
      <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
      <input 
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className="w-[420px] bg-transparent border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 py-3 pl-10 pr-10 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400"
        {...props}
      />
      <button 
        type="button" 
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}

export function AuthButton({ children }) {
  return (
    <button 
      type="submit"
      className="rounded-[29px] font-poppins font-bold text-[#8C00C6] text-[24px] w-[430px] h-[60px] bg-gradient-to-r 
      from-[#D3A1F8] to-[#F6DDFB] shadow-md mx-auto block relative overflow-hidden
      dark: bg-gradient-to-r from-[#4B0082] dark:to-[#210B53] dark:text-white"
    >
      <div className="absolute inset-0 opacity-20 mix-blend-overlay"></div>
      {children}
    </button>
  );
}
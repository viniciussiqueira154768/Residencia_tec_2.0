export function AuthInput({ icon: Icon, type = "text", placeholder, ...props }) {
  return (
    <div className="relative">
      <Icon size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-[#ffffff]" />
      <input 
        type={type}
        placeholder={placeholder}
        className="w-[420px] bg-transparent border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 
        dark:placeholder-gray-400 py-3 pl-10 pr-4 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400"
        {...props}
      />
    </div>
  );
}
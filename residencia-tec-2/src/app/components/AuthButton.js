// app/components/AuthButton.js

export function AuthButton({ children }) {
  return (
    <button 
      type="submit"
      className="w-full text-white font-bold py-3 rounded-lg shadow-lg transition duration-200 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 dark:from-purple-600 dark:to-indigo-700 dark:hover:from-purple-700 dark:hover:to-indigo-800"
    >
      {children}
    </button>
  );
}
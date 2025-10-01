export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Landing Page</h1>
        <nav>
          <a href="#" className="text-gray-600 hover:text-blue-500 px-3">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-500 px-3">Sobre</a>
          <a href="#" className="text-gray-600 hover:text-blue-500 px-3">Contato</a>
        </nav>
      </div>
    </header>
  );
}
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">Sistema de Gerenciamento</h1>
      </header>

      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Bem-vindo ao seu sistema
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl">
          Gerencie seus dados, usuários e processos de forma simples, rápida e eficiente.
        </p>

        <div className="flex gap-4">
          <Link href="/dashboard">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition">
              Acessar Dashboard
            </button>
          </Link>

          <Link href="/login">
            <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-xl shadow hover:bg-gray-300 transition">
              Login
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© {new Date().getFullYear()} Sistema de Gerenciamento</p>
      </footer>
    </main>
  );
}

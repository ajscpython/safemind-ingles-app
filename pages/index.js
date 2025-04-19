import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl text-center">
        <div className="flex justify-center mb-4">
          <Image src="/logo-safemind.jpeg" alt="Logo Safemind" width={120} height={120} />
        </div>
        <h1 className="text-2xl font-bold">Safemind-Inglês</h1>
        <p className="mt-2 font-semibold">Aprenda inglês com a metodologia que transforma pensamento em resultado.</p>
        <Link href="/aluno" className="mt-4 inline-block">
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Acessar Plataforma
          </button>
        </Link>
        <div className="mt-6 text-sm">
          <Link href="/sobre" className="text-blue-600 hover:underline mr-4">Sobre o Curso</Link>
          <Link href="/contato" className="text-blue-600 hover:underline">Contato</Link>
        </div>
      </div>
    </div>
  );
}

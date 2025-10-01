export default function MainContent() {
  return (
    <main className="pt-20"> {/* Padding para não ficar embaixo do header fixo */}
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Coluna de Texto */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Uma Jornada Visual Incrível
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            <img
              src="https://picsum.photos/200"
              alt="Imagem Flutuante"
              className="float-left mr-4 mb-4 rounded-lg shadow-md w-1/3"
            />
            Este layout demonstra o poder do CSS moderno com Tailwind. A imagem à esquerda está usando a propriedade `float`, permitindo que o texto flua naturalmente ao seu redor. Isso é ideal para artigos e postagens de blog.
          </p>
          <div className="mt-6">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xl px-4 py-2 rounded-md box-decoration-clone shadow-lg">
              Este texto usa box-decoration-break para manter o estilo do background quando quebra em múltiplas linhas.
            </span>
          </div>
        </div>

        {/* Coluna de Imagem */}
        <div className="flex items-center justify-center">
          <img
            src="https://picsum.photos/800/600"
            alt="Imagem Principal"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </main>
  );
}
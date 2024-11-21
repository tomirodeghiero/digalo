import { FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-5 sm:flex-row sm:justify-between items-center">
          <div className="text-center">
            &copy; {new Date().getFullYear()} Dígalo. Todos los derechos reservados.
          </div>
          <li>
            <a
              href="https://github.com/Proyecto-2024-MMNPPR/unrc-proyecto-signlanguage-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition duration-200"
            >
              <FaGithub size={40} />
            </a>
          </li>
        </div>
        <div className="mt-4 text-center text-white/60">
          <p>💻 Desarrollado por Grupo de Proyecto UNRC 2024:</p>
          <p className="font-semibold text-white">
            Franco Machuca, Nicolás Mercado, Valentino Natali, Gisel Vanina Pautasso, Stefanía Pautasso & Rodeghiero Tomás
          </p>
        </div>
      </div>
    </footer>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-dark-bg text-white py-6 text-center border-t border-gray-700">
      <p className="text-sm">
        © {new Date().getFullYear()} LinerTattoo. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
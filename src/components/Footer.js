import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-dark-bg flex px-10 justify-between text-white py-6 border-t border-gray-700">
      <p className="text-sm">
        © {new Date().getFullYear()}{" "}
        <Link
          href={"https://www.instagram.com/liner.tattoo/?igsh=dGxlMmc1YW5qeWt6#"}
          className="cursor-pointer hover:text-yellow-500"
        >
          LinerTattoo
        </Link>
        . Todos los derechos reservados.
      </p>
      <p className="text-sm">
        Developed by{" "}
        <Link
          href={"https://www.instagram.com/alex_rico10/?hl=es"}
          className="cursor-pointer hover:text-yellow-500"
        >
          Alex Rico
        </Link>
      </p>
    </footer>
  );
};

export default Footer;

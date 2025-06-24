import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-dark-bg flex flex-col md:flex-row px-6 md:px-10 justify-between items-center text-white py-6 border-t border-gray-700 gap-2 md:gap-0">
      <p className="text-sm text-center md:text-left">
        © {new Date().getFullYear()}{" "}
        <Link
          href="https://www.instagram.com/liner.tattoo/?igsh=dGxlMmc1YW5qeWt6#"
          className="cursor-pointer hover:text-yellow-500"
        >
          LinerTattoo
        </Link>
      </p>
      <p className="text-sm text-center md:text-right">
        Developed by{" "}
        <Link
          href="https://www.instagram.com/alex_rico10/?hl=es"
          className="cursor-pointer hover:text-yellow-500"
        >
          Alex Rico
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
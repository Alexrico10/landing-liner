import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark-bg text-white flex flex-col">
      <main className="flex-grow w-full mx-auto px-4">
        <Navbar />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

//max-w-5xl

import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark-bg text-white flex flex-col">
      <main className="flex-grow w-full max-w-5xl mx-auto px-4">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;

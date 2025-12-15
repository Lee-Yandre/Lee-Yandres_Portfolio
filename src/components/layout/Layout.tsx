import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackgroundOrbs from "../ui/BackgroundOrbs";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <BackgroundOrbs />
      <Navbar />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

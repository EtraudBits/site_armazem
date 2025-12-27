import Header from "../Header";
import Footer from "../Footer";
import WhatsAppButton from "../WhatsAppButton";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

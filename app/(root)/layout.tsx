import { Navbar } from "@/components/general/Navbar";
import { Toaster } from "@/components/ui/sonner"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <Navbar />
      {children}
      <Toaster />
    </div>
  );
}

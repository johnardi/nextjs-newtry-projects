import Navbar from "../components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <main className="font-work-sans">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}

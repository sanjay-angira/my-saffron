import Header from "@/components/Header";
import Home from "@/components/home/Home";

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--cream)' }}>
      <Header />
      <Home />
    </div>
  );
}

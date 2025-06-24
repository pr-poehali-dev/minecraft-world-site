import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4">
        <Hero />
        <ProductGrid />
      </div>
    </div>
  );
};

export default Index;

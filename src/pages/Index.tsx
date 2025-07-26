import Header from "@/components/Header";
import OpeningHours from "@/components/OpeningHours";
import ContactInfo from "@/components/ContactInfo";
import MenuSection from "@/components/MenuSection";
import { menuData } from "@/data/menuData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            Willkommen bei Schicht Wechsel
          </h2>
          <p className="text-xl lg:text-2xl mb-8">
            Authentische türkische Küche in Neckarsulm
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:07132999264"
              className="bg-secondary hover:bg-secondary/90 text-black px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Jetzt bestellen: 07132 999 2664
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <OpeningHours />
          <ContactInfo />
          <div className="lg:col-span-1">
            <div className="bg-card p-6 rounded-lg border-primary/20 border text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Frisch zubereitet</h3>
              <p className="text-muted-foreground">
                Alle unsere Gerichte werden täglich frisch zubereitet mit hochwertigen Zutaten 
                und traditionellen Rezepten.
              </p>
            </div>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-primary mb-4">Unsere Speisekarte</h2>
            <p className="text-xl text-muted-foreground">Entdecken Sie unsere Vielfalt</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <MenuSection title="Döner" items={menuData.doner} />
            <MenuSection title="Pizzen - 30cm" items={menuData.pizzas} />
            <MenuSection title="Fast Food" items={menuData.fastFood} />
            <MenuSection title="Pide und Seele" items={menuData.pideSeele} />
            <MenuSection title="Pizzabrot" items={menuData.pizzabrot} />
            <MenuSection title="Suppen" items={menuData.suppen} />
            <MenuSection title="Salate" items={menuData.salate} />
            
            {/* Drinks Section */}
            <div className="lg:col-span-2">
              <MenuSection 
                title="Getränke" 
                items={menuData.getranke.map((item, index) => ({
                  id: index + 100,
                  name: item.name,
                  description: item.size,
                  price: item.price
                }))} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-primary/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-2">Schicht Wechsel</h4>
              <p className="text-muted-foreground">Authentische türkische Küche</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-2">Kontakt</h4>
              <p className="text-muted-foreground">Tel: 07132 999 2664</p>
              <p className="text-muted-foreground">Gottlieb-Daimler-Straße 35</p>
              <p className="text-muted-foreground">74172 Neckarsulm</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-2">Öffnungszeiten</h4>
              <p className="text-muted-foreground text-sm">Mo-Do: 10:30-03:00</p>
              <p className="text-muted-foreground text-sm">Fr-Sa: 10:30-04:00</p>
              <p className="text-muted-foreground text-sm">So: 10:30-00:00</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © 2024 Schicht Wechsel Neckarsulm. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-card shadow-lg border-b-2 border-primary">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Schicht Wechsel" className="h-20 w-20 mr-4" />
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                Schicht Wechsel
              </h1>
              <p className="text-muted-foreground">Neckarsulm</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col lg:flex-row gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:07132999264" className="hover:text-primary transition-colors">
                07132 999 2664
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Gottlieb-Daimler-Straße 35, 74172 Neckarsulm</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Täglich geöffnet</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
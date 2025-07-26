import { Phone, MapPin, Navigation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactInfo = () => {
  const handleCall = () => {
    window.location.href = "tel:07132999264";
  };

  const handleDirections = () => {
    window.open("https://maps.google.com/?q=Gottlieb-Daimler-Straße+35,+74172+Neckarsulm", "_blank");
  };

  return (
    <Card className="bg-card border-primary/20">
      <CardHeader className="text-center">
        <CardTitle className="text-primary text-2xl">Kontakt & Anfahrt</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold">Telefon</p>
              <p className="text-primary">07132 999 2664</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold">Adresse</p>
              <p className="text-muted-foreground">Gottlieb-Daimler-Straße 35</p>
              <p className="text-muted-foreground">74172 Neckarsulm</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Button onClick={handleCall} className="w-full bg-primary hover:bg-primary/90 text-white">
            <Phone className="h-4 w-4 mr-2" />
            Jetzt anrufen
          </Button>
          
          <Button onClick={handleDirections} variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
            <Navigation className="h-4 w-4 mr-2" />
            Route planen
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
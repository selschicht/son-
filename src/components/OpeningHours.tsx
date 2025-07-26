import { Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OpeningHours = () => {
  const hours = [
    { day: "Montag - Donnerstag", time: "10:30 - 03:00 Uhr" },
    { day: "Freitag + Samstag", time: "10:30 - 04:00 Uhr" },
    { day: "Sonntag", time: "10:30 - 00:00 Uhr" },
  ];

  return (
    <Card className="bg-card border-primary/20">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-primary">
          <Clock className="h-5 w-5" />
          Öffnungszeiten
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {hours.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
              <span className="font-medium">{item.day}</span>
              <span className="text-primary font-semibold">{item.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default OpeningHours;
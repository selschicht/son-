import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MenuItem {
  id: number;
  name: string;
  description?: string;
  price: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  bgColor?: string;
}

const MenuSection = ({ title, items, bgColor = "bg-primary" }: MenuSectionProps) => {
  return (
    <Card className="bg-card border-primary/20">
      <CardHeader className={`${bgColor} text-white rounded-t-lg`}>
        <CardTitle className="text-center text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-start py-2 border-b border-border last:border-b-0">
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{item.id}. {item.name}</h4>
                {item.description && (
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                )}
              </div>
              <span className="text-primary font-bold text-lg ml-4">{item.price}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuSection;
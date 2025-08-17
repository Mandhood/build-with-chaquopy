import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Settings, Code2, Smartphone } from "lucide-react";

const Header = () => {
  return (
    <Card className="bg-gradient-to-r from-card to-card/80 border-border/50 shadow-lg backdrop-blur-sm">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-python-blue to-python-purple flex items-center justify-center shadow-lg shadow-python-blue/25">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-python-green to-python-yellow flex items-center justify-center">
              <Smartphone className="w-3 h-3 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-python-blue to-python-purple bg-clip-text text-transparent">
              PyMobile IDE
            </h1>
            <p className="text-sm text-muted-foreground">Python development environment</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="bg-secondary/50 hover:bg-secondary border-border/50">
            <FileText className="w-4 h-4 mr-1" />
            Examples
          </Button>
          <Button variant="outline" size="sm" className="bg-secondary/50 hover:bg-secondary border-border/50">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Header;
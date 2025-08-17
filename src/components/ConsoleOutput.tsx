import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Terminal, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConsoleOutputProps {
  output: string[];
  onClear: () => void;
}

const ConsoleOutput = ({ output, onClear }: ConsoleOutputProps) => {
  return (
    <Card className="flex flex-col h-full bg-editor-bg border-border/50 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border/50 bg-gradient-to-r from-python-green/10 to-python-yellow/10">
        <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Terminal className="w-5 h-5 text-python-green" />
          Console Output
        </h2>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onClear}
          className="bg-secondary/50 hover:bg-secondary border-border/50"
        >
          <Trash2 className="w-4 h-4 mr-1" />
          Clear
        </Button>
      </div>

      {/* Console content */}
      <ScrollArea className="flex-1 p-4">
        {output.length === 0 ? (
          <div className="text-muted-foreground/60 text-sm font-mono">
            Console output will appear here...
          </div>
        ) : (
          <div className="space-y-1">
            {output.map((line, index) => (
              <div key={index} className="font-mono text-sm">
                {line.startsWith('>>>') ? (
                  <span className="text-python-blue">{line}</span>
                ) : line.startsWith('Error:') || line.startsWith('Traceback') ? (
                  <span className="text-python-red">{line}</span>
                ) : line.includes('Hello') || line.includes('awesome') ? (
                  <span className="text-python-green">{line}</span>
                ) : line.includes('[') && line.includes(']') ? (
                  <span className="text-python-yellow">{line}</span>
                ) : (
                  <span className="text-foreground">{line}</span>
                )}
              </div>
            ))}
          </div>
        )}
      </ScrollArea>
    </Card>
  );
};

export default ConsoleOutput;
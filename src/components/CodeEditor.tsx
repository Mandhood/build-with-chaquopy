import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Play, Save, Download, RotateCcw } from "lucide-react";

interface CodeEditorProps {
  onExecute: (code: string) => void;
}

const CodeEditor = ({ onExecute }: CodeEditorProps) => {
  const [code, setCode] = useState(`# Welcome to Python IDE
# Write your Python code here

def hello_world():
    print("Hello, World!")
    return "Python is awesome!"

# Call the function
result = hello_world()
print(f"Result: {result}")

# Try some math
numbers = [1, 2, 3, 4, 5]
squared = [n**2 for n in numbers]
print(f"Original: {numbers}")
print(f"Squared: {squared}")
`);

  const handleExecute = () => {
    onExecute(code);
  };

  const handleClear = () => {
    setCode("");
  };

  const lineNumbers = code.split('\n').map((_, i) => i + 1);

  return (
    <Card className="flex flex-col h-full bg-editor-bg border-border/50 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border/50 bg-gradient-to-r from-python-blue/10 to-python-purple/10">
        <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-python-green animate-pulse" />
          Python Editor
        </h2>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleClear}
            className="bg-secondary/50 hover:bg-secondary border-border/50"
          >
            <RotateCcw className="w-4 h-4 mr-1" />
            Clear
          </Button>
          <Button 
            size="sm"
            onClick={handleExecute}
            className="bg-gradient-to-r from-python-green to-python-blue hover:from-python-green/90 hover:to-python-blue/90 text-primary-foreground shadow-lg"
          >
            <Play className="w-4 h-4 mr-1" />
            Run Code
          </Button>
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 flex bg-editor-bg">
        {/* Line numbers */}
        <div className="flex flex-col py-4 px-3 text-xs text-muted-foreground/60 bg-editor-line select-none border-r border-border/30">
          {lineNumbers.map((num) => (
            <div key={num} className="leading-6 text-right">
              {num}
            </div>
          ))}
        </div>

        {/* Code area */}
        <div className="flex-1 relative">
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-full resize-none border-0 bg-transparent text-foreground font-mono text-sm leading-6 focus-visible:ring-0 focus-visible:ring-offset-0 p-4 rounded-none"
            placeholder="Start coding in Python..."
            spellCheck={false}
            style={{
              caretColor: 'hsl(var(--python-green))',
            }}
          />
        </div>
      </div>
    </Card>
  );
};

export default CodeEditor;
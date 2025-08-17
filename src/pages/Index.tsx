import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import CodeEditor from "@/components/CodeEditor";
import ConsoleOutput from "@/components/ConsoleOutput";

const Index = () => {
  const [output, setOutput] = useState<string[]>([]);

  const executeCode = (code: string) => {
    // Simulate Python code execution
    const lines = [
      ">>> Running Python code...",
      "",
    ];

    // Simple simulation of Python output
    if (code.includes("hello_world")) {
      lines.push("Hello, World!");
      lines.push("Result: Python is awesome!");
    }
    
    if (code.includes("squared")) {
      lines.push("Original: [1, 2, 3, 4, 5]");
      lines.push("Squared: [1, 4, 9, 16, 25]");
    }

    if (code.includes("print") && !code.includes("hello_world")) {
      // Extract print statements and simulate output
      const printMatches = code.match(/print\([^)]+\)/g);
      if (printMatches) {
        printMatches.forEach(match => {
          const content = match.match(/print\(["']?([^"')]+)["']?\)/);
          if (content) {
            lines.push(content[1]);
          }
        });
      }
    }

    lines.push("");
    lines.push(">>> Execution completed");

    setOutput(prev => [...prev, ...lines]);
    
    toast({
      title: "Code executed successfully",
      description: "Check the console output below",
    });
  };

  const clearOutput = () => {
    setOutput([]);
  };

  return (
    <div className="min-h-screen bg-background p-4 space-y-4">
      <Header />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[calc(100vh-140px)]">
        <CodeEditor onExecute={executeCode} />
        <ConsoleOutput output={output} onClear={clearOutput} />
      </div>
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

function App() {
  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Books page club</h1>
        <ThemeSwitcher />
      </div>
      
      <Button>Click me</Button>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import { Moon, Sun, MonitorSmartphone } from "lucide-react";
import { getTheme, setTheme, type Theme } from "@/lib/utils";

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<Theme>("system");

  useEffect(() => {
    setCurrentTheme(getTheme());
  }, []);

  const handleThemeChange = (theme: Theme) => {
    setTheme(theme);
    setCurrentTheme(theme);
  };

  return (
    <div className="flex items-center gap-4 rounded-md border p-4">
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <Sun className="size-4" />
          <button
            className={`text-sm font-medium ${currentTheme === "light" ? "text-primary" : "text-muted-foreground"}`}
            onClick={() => handleThemeChange("light")}
          >
            Light
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <MonitorSmartphone className="size-4" />
          <button
            className={`text-sm font-medium ${currentTheme === "system" ? "text-primary" : "text-muted-foreground"}`}
            onClick={() => handleThemeChange("system")}
          >
            System
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <Moon className="size-4" />
          <button
            className={`text-sm font-medium ${currentTheme === "dark" ? "text-primary" : "text-muted-foreground"}`}
            onClick={() => handleThemeChange("dark")}
          >
            Dark
          </button>
        </div>
      </div>
    </div>
  );
} 
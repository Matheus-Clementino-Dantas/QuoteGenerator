import { useState, useEffect } from "react";
import Button from "./Button";
import { Moon, Sun } from "lucide-react";

function ToggleMode() {
  const [colorMode, setColorMode] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const html = document.documentElement;

    if (colorMode === "light") {
      html.classList.add("light");
    } else {
      html.classList.remove("light");
    }

    localStorage.setItem("theme", colorMode);
  }, [colorMode]);

  function toggleTheme() {
    setColorMode((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <div className="fixed top-3 right-3">
      <Button aria="Change the color mode" onClick={toggleTheme}>
        {colorMode === "light" ? (
          <Sun className="fill-yellow-400 stroke-yellow-400" />
        ) : (
          <Moon className="fill-indigo-300 stroke-indigo-300" />
        )}
      </Button>
    </div>
  );
}

export default ToggleMode;

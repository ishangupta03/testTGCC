import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      {theme === "light" ? (
        <Image
        height={24}
        width={24}
          src="./theme-button.png"
          onClick={() => setTheme("dark")}
          className="h-6 w-6 lg:block"
          alt="Switch to dark theme"
        />
      ) : (
        <Image
          src="https://user-images.githubusercontent.com/64256342/151415459-adf26d5f-ad89-4a4a-85b4-477ee85d0b61.png"
          onClick={() => setTheme("light")}
          className="h-6 w-6 lg:block"
          height={24}
          width={24}
          alt="Switch to light theme"
        />
      )}
    </div>
  );
};

export default ThemeChanger;

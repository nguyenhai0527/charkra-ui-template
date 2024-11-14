"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { IconButton } from "@chakra-ui/react";
import { useTheme } from "next-themes";

const ColorModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={theme}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorPalette={theme === "light" ? "blue" : "yellow"}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

export default ColorModeToggle;

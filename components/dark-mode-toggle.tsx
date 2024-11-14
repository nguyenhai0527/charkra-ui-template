"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Icon, IconButton } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { BsMoonFill } from "react-icons/bs";
import { PiSunBold } from "react-icons/pi";

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
          colorPalette={theme === "light" ? "purple" : "cyan"}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <Icon fontSize="20px" color="white">
              <PiSunBold />
            </Icon>
          ) : (
            <Icon fontSize="20px" color="white">
              <BsMoonFill />
            </Icon>
          )}
        </IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

export default ColorModeToggle;

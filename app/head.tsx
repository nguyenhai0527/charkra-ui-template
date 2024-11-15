"use client";

import { usePathname } from "next/navigation";

export default function Head() {
  const pathname = usePathname();
  return (
    <>
      <title>
        {pathname === "/"
          ? "Takuya Matsuyama"
          : pathname.split("/")[1].toUpperCase() + " | NGUYEN CHI HAI"}
      </title>
    </>
  );
}

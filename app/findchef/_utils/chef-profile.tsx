import React from "react";

export function ChefProfile() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <img
        src="/chef.png"
        alt="Chef"
        width={150}
        height={150}
        className="rounded-md"
        style={{ aspectRatio: "100/100", objectFit: "cover" }}
      />
      <div>
        <h1 className="text-2xl font-bold">Chef Julia Delacroix</h1>
        <p className="text-muted-foreground">
          Renowned for her innovative and delectable cuisine, Chef Julia
          Delacroix has been delighting diners for over a decade. With a passion
          for fresh.
        </p>
      </div>
    </div>
  );
}

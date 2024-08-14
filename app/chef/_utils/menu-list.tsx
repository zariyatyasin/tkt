import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusIcon, MinusIcon } from "lucide-react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface SelectedItem extends MenuItem {
  quantity: number;
}

interface MenuProps {
  menu: MenuItem[];
  selectedItems: SelectedItem[];
  handleAddToBooking: (item: MenuItem, quantity: number) => void;
}

export function Menu({ menu, selectedItems, handleAddToBooking }: MenuProps) {
  return (
    <div className="grid gap-4">
      <h2 className="text-xl font-bold">Menu</h2>
      <div className="grid gap-4">
        {menu.map((item) => (
          <div
            key={item.id}
            className="flex shadow-none  border-b pb-2 items-center gap-4"
          >
            <div className="flex-1 p-2">
              <h3 className=" text-base md:text-lg font-bold">{item.name}</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {item.description}
              </p>
              <div className="flex items-center justify-between mt-2">
                <div className="font-bold">${item.price}</div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAddToBooking(item, -1)}
                  >
                    <MinusIcon className="h-4 w-4" />
                  </Button>

                  <span>
                    {selectedItems.find((i) => i.id === item.id)?.quantity ?? 0}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAddToBooking(item, 1)}
                  >
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

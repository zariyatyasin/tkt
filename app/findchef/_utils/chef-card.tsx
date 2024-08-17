import { Button } from "@/components/ui/button";
import { ChefHat } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ChefCardProps {
  name: string;
  cuisines: string[];
  id: string;
  profileImage: string;
}

export default function ChefCard({
  name,
  cuisines,
  id,
  profileImage,
}: ChefCardProps) {
  return (
    <div className="bg-background rounded-xl overflow-hidden shadow-lg">
      <div className="relative">
        <img
          src={
            profileImage ||
            "https://res.cloudinary.com/ddrjnijut/image/upload/v1723878189/chef_wkroiu.png"
          }
          width={400}
          height={300}
          alt="Chef Profile"
          className="w-full h-48 object-cover"
          style={{ aspectRatio: "400/300", objectFit: "cover" }}
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
          5.0
        </div>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-muted-foreground">{cuisines.join(", ")}</p>
        <div className="flex items-center justify-between">
          <Link href={"/findchef/" + name + "?_id=" + id}>
            <Button size="sm">
              {" "}
              <ChefHat className=" h-4 w-4" />
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { MinusIcon, PlusIcon, XIcon } from "lucide-react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface SelectedItem extends MenuItem {
  quantity: number;
}

interface BookingDetails {
  address: string;
  phone: string;
  email: string;
  date: string;
  time: string;
}

export default function Page() {
  const menu: MenuItem[] = [
    {
      id: 1,
      name: "Grilled Salmon with Lemon Dill Sauce",
      description:
        "Fresh Atlantic salmon fillet grilled to perfection, served with a creamy lemon dill sauce.",
      price: 35.99,
    },
    {
      id: 2,
      name: "Beef Tenderloin Filet Mignon",
      description:
        "Juicy and tender beef tenderloin filet, pan-seared and finished in the oven.",
      price: 49.99,
    },
    {
      id: 3,
      name: "Roasted Vegetable Lasagna",
      description:
        "Layers of fresh vegetables, creamy béchamel, and melted cheese, baked to perfection.",
      price: 28.99,
    },
    {
      id: 4,
      name: "Herb-Crusted Rack of Lamb",
      description:
        "Succulent rack of lamb coated in a flavorful herb crust, served with a red wine reduction.",
      price: 42.99,
    },
    {
      id: 5,
      name: "Seared Scallops with Pea Puree",
      description:
        "Perfectly seared sea scallops served on a bed of creamy pea puree, garnished with crispy prosciutto.",
      price: 38.99,
    },
  ];

  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    address: "",
    phone: "",
    email: "",
    date: "",
    time: "",
  });

  const handleAddToBooking = (item: MenuItem, quantity: number) => {
    setSelectedItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        const updatedQuantity = existingItem.quantity + quantity;
        if (updatedQuantity <= 0) {
          return prevItems.filter((i) => i.id !== item.id);
        } else {
          return prevItems.map((i) =>
            i.id === item.id ? { ...i, quantity: updatedQuantity } : i
          );
        }
      } else {
        return quantity > 0 ? [...prevItems, { ...item, quantity }] : prevItems;
      }
    });
  };

  const handleRemoveFromBooking = (item: MenuItem) => {
    setSelectedItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
  };

  const handleBookingDetailsChange = (
    field: keyof BookingDetails,
    value: string
  ) => {
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const totalCost = selectedItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-10">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-9xl mx-auto ">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img
              src="/chef.png"
              alt="Chef"
              width={150}
              height={150}
              className=" rounded-full "
              style={{ aspectRatio: "100/100", objectFit: "cover" }}
            />
            <div>
              <h1 className="text-2xl font-bold  ">Chef Julia Delacroix</h1>
              <p className="text-muted-foreground  ">
                Renowned for her innovative and delectable cuisine, Chef Julia
                Delacroix has been delighting diners for over a decade. With a
                passion for fresh.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="text-xl font-bold">Menu</h2>
            <div className="grid gap-4">
              {menu.map((item) => (
                <Card
                  key={item.id}
                  className="flex border-b items-center gap-4"
                >
                  <div className="flex-1 p-2">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="font-bold">${item.price}</div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleAddToBooking(item, 1)}
                        >
                          <PlusIcon className="h-4 w-4" />
                        </Button>
                        <span>
                          {selectedItems.find((i) => i.id === item.id)
                            ?.quantity ?? 0}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleAddToBooking(item, -1)}
                        >
                          <MinusIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <span>Items</span>
                  <span>{selectedItems.length}</span>
                </div>
                <div className="flex flex-col gap-2">
                  {selectedItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-muted-foreground">
                          x{item.quantity}
                        </span>
                      </div>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveFromBooking(item)}
                      >
                        <XIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span>Total Cost</span>
                <span className="font-bold">${totalCost.toFixed(2)}</span>
              </div>
              <Button>Book now</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Booking Details</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={bookingDetails.address}
                  onChange={(e) =>
                    handleBookingDetailsChange("address", e.target.value)
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={bookingDetails.phone}
                  onChange={(e) =>
                    handleBookingDetailsChange("phone", e.target.value)
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={bookingDetails.email}
                  onChange={(e) =>
                    handleBookingDetailsChange("email", e.target.value)
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={bookingDetails.date}
                    onChange={(e) =>
                      handleBookingDetailsChange("date", e.target.value)
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={bookingDetails.time}
                    onChange={(e) =>
                      handleBookingDetailsChange("time", e.target.value)
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

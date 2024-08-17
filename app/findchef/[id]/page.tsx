"use client";

import { useState } from "react";

import React from "react";

import { ChefProfile } from "../_utils/chef-profile";
import { Menu } from "../_utils/menu-list";
import { BookingSummary } from "../_utils/booking-summary";
import { BookingDetails } from "../_utils/booking-confirm";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CalendarIcon, TagIcon, XIcon } from "lucide-react";
import KnowTheChef from "../_utils/know-the-chef";

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

export default function Page({ searchParams }: { searchParams: any }) {
  console.log(searchParams._id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
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

  const totalCost = selectedItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleBookingSubmit = async (details: BookingDetails) => {
    if (selectedItems.length === 0) {
      alert("Please select at least one item before booking.");
      return;
    }
    const requestData = {
      address: details.address,
      phone: details.phone,
      email: details.email,
      date: details.date,
      time: details.time,
      items: selectedItems,
      totalCost,
      chefName: "Yasin",
      chefId: 3434,
    };

    console.log(requestData);
  };
  const galleryImages = [
    "/chef.png",
    "/chef.png",
    "/chef.png",
    "/chef.png",
    "/chef.png",
    "/chef.png",
  ];
  return (
    <div className="container  py-10">
      <div className=" relative grid    md:grid-cols-12 gap-12 md:gap-16 max-w-6xl mx-auto justify-between ">
        <div className=" col-span-1 md:col-span-7 flex flex-col gap-6">
          <div className="">
            <ChefProfile />
          </div>
          <div className="grid gap-4">
            <Menu
              menu={menu}
              selectedItems={selectedItems}
              handleAddToBooking={handleAddToBooking}
            />

            {/* image Gallery  */}
            <KnowTheChef
              images={galleryImages}
              onImageClick={handleImageClick}
              isModalOpen={isModalOpen}
              selectedImage={selectedImage}
              onModalClose={handleModalClose}
            />
          </div>
        </div>
        <div
          className=" col-span-1 md:col-span-5
         flex flex-col   gap-6  "
        >
          <BookingSummary
            selectedItems={selectedItems}
            totalCost={totalCost}
            handleRemoveFromBooking={handleRemoveFromBooking}
          />
          <BookingDetails onSubmit={handleBookingSubmit} />
        </div>
      </div>
    </div>
  );
}

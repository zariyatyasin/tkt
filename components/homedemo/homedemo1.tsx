"use client";
import { useEffect, useState } from "react";
import Connectus from "../connectus/connect-us";
import Contact from "../contact/contact";
import Discoverus from "../discoverus/discover-us";
import Faq from "../faq/faq";
import Footer from "../footer/footer";
import Header from "../header/header";
import Hero from "../hero/hero";
import Howitswork from "../how-its-work/how-its-work";
import MeetChef from "../meet-chef/meet-chef";
import Partners from "../partners/partners";
import Servery from "../servey/servery";
import Whyus from "../why-us/why-us";
import { motion, useScroll } from "framer-motion";
import { GetAllChef } from "@/app/findchef/_utils/action";
import ChefCard from "@/app/findchef/_utils/chef-card";
import { Button } from "../ui/button";
import Link from "next/link";
interface Chef {
  _id: string;
  profileImage: string;
  name: string;
  cuisines: string[];
}

interface ChefsResponse {
  data: Chef[];
}

export default function HomeDemo1() {
  const [chefs, setChefs] = useState<Chef[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fetchChefs = async () => {
    try {
      const result = await GetAllChef();

      if (result && result.data) {
        setChefs(result.data);
      } else {
        throw new Error("Failed to fetch chefs.");
      }
    } catch (err) {
      setError(
        "An error occurred while fetching chefs. Please try again later."
      );
      console.error("Error fetching chefs:", err);
    }
  };

  useEffect(() => {
    fetchChefs();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden ">
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto  py-24 px-6 ">
          <h2 className="text-3xl text-center  sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Featured Chefs
          </h2>
          <div className="   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {error ? (
              <div className="text-red-500 text-center">{error}</div>
            ) : (
              chefs
                ?.slice(0, 4)
                .map((chef) => (
                  <ChefCard
                    profileImage={chef.profileImage}
                    key={chef._id}
                    name={chef.name}
                    id={chef._id}
                    cuisines={chef.cuisines}
                  />
                ))
            )}
          </div>
          {/* <div className="  text-center py-16">
            <Link href={"/findchef"}>
              <Button>View All</Button>
            </Link>
          </div> */}
        </div>

        <Partners />

        <Howitswork />
        <Whyus />
        <Faq />

        <Contact />
        <Footer />
      </main>
      {/* <Discoverus /> */}
    </div>
  );
}

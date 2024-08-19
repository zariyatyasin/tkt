"use client";
import { useEffect, useState } from "react";
import Contact from "../contact/contact";
import Faq from "../faq/faq";
import Footer from "../footer/footer";
import Hero from "../hero/hero";
import Howitswork from "../how-its-work/how-its-work";
import Partners from "../partners/partners";
import Whyus from "../why-us/why-us";
import { GetAllChef } from "@/app/findchef/_utils/action";
import ChefCard from "@/app/findchef/_utils/chef-card";
import { Skeleton } from "@/components/ui/skeleton";

interface Chef {
  _id: string;
  profileImage: string;
  name: string;
  cuisines: string[];
}

export default function HomeDemo1() {
  const [chefs, setChefs] = useState<Chef[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchChefs();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto py-24 px-6">
          <h2 className="text-3xl text-center sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Featured Chefs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {isLoading ? (
              <>
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-4"
                  >
                    <Skeleton className="h-[150px] w-[150px] rounded-md" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                ))}
              </>
            ) : error ? (
              <div className="text-red-500 text-center w-full">{error}</div>
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
        </div>

        <Partners />
        <Howitswork />
        <Whyus />
        <Faq />
        <Contact />
      </main>
    </div>
  );
}

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yzjEqRA6Hyf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

export default function Landing() {
  return (
    <div className="w-full min-h-[70vh] bg-[url('/chef.png')] bg-cover bg-center bg-no-repeat">
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center h-full">
        <div className="max-w-2xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary ">
            Find the Perfect Chef for Your Event
          </h1>
          <p className=" text-gray-900 md:text-xl">
            Discover talented local chefs and book them for your next gathering,
            whether it's a private dinner, corporate event, or special occasion.
          </p>
          <form className="flex items-center w-full max-w-xl">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Enter your location"
                className="w-full rounded-l-md pr-12 focus:ring-2 focus:ring-primary"
              />
              <Button
                type="submit"
                className="absolute right-0 top-0 h-full rounded-l-none rounded-r-md bg-primary text-primary-foreground"
              >
                <SearchIcon className="h-5 w-5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

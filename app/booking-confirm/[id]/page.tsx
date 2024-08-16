import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="w-full min-h-screen   text-gray-950 flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl   rounded-xl overflow-hidden">
        <div className=" ">
          <div className="  p-8 flex flex-col items-start justify-center gap-4">
            <div className="text-gray-950 text-4xl font-bold">
              Booking Confirmed
            </div>
            <p className="text-gray-950 text-lg">
              Your booking with Chef Olivia has been successfully confirmed.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="bg-gray-100 rounded-lg p-4 flex flex-col gap-2">
                <div className="text-gray-950 font-bold">Chef</div>
                <div className="text-gray-950 text-2xl font-bold">
                  Olivia Smith
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex flex-col gap-2">
                <div className="text-gray-950 font-bold">Date &amp; Time</div>
                <div className="text-gray-950 text-2xl font-bold">
                  June 15, 2023 - 7:00 PM
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 w-full">
              <div className="text-gray-950 font-bold">Items Booked</div>
              <div className="text-gray-950 text-lg">
                - 3 Course Meal (Quantity: 2)
                <br />- Wine Pairing (Quantity: 1)
                <br />- Dessert (Quantity: 1)
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 w-full">
              <div className="text-gray-950 font-bold">Total Price</div>
              <div className="text-gray-950 text-lg">$150.00</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 w-full">
              <div className="text-gray-950 font-bold">Special Requests</div>
              <div className="text-gray-950 text-lg">
                Vegetarian meal, no dairy products.
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 w-full">
              <div className="text-gray-950 font-bold">Need Help?</div>
              <div className="text-gray-950 text-lg">
                Call our support line at +1 (555) 123-4567
              </div>
            </div>
            <div className="flex gap-4 w-full">
              <Button
                variant="outline"
                className="flex-1 text-gray-950 hover:bg-white hover:text-[#00b894]"
              >
                View Upcoming Bookings
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-white text-[#00b894] hover:bg-[#00b894] hover:text-gray-950"
              >
                Leave Feedback
              </Button>
            </div>
          </div>
          {/* <div className="relative">
            <img
              src="/placeholder.svg"
              width={800}
              height={600}
              alt="Chef"
              className="object-cover w-full h-full"
              style={{ aspectRatio: "800/600", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-80" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

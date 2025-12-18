import Image from "next/image";
import {
  addBooking,
  editBooking,
  getBooking,
  removeBooking,
} from "@/lib/booking";

export default async function Home() {
  return (
    <div className="bg-black text-white">
      <main className="py-17">
        <div className="bg-white text-black ">
          <h1 className=" pt-10 font-bold md:text-4xl text-2xl pb-8 justify-center flex">
            Booking
          </h1>
          <form action={addBooking} className="md:ml-30 md:pt-10 md:flex-row">
            <div className="mx-auto w-fit grid grid-cols-[150px_1fr] gap-y-3 items-center">
              <label>Name : </label>
              <input
                className="border-2 rounded-xs border-black text-black m-4 md:w-50 h-9"
                name="name"
                required
              />
              <label>Phone number:</label>
              <input
                className="text-black border-black border-2 ml-4 md:w-50 h-9"
                name="phone"
                required
              />
              <label>Number of people:</label>
              <input
                className="text-black border-black border-2 ml-4 md:w-50 h-9"
                name="people"
                required
              />
              <label>Hour:</label>
              <input
                className="text-black border-black border-2 ml-4 md:w-50 h-9"
                name="hour"
                required
              />
              <button className="block mx-auto mb-7 mt-4 w-92 bg-j-emeraude text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

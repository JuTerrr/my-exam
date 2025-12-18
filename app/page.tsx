import Image from "next/image";
import {
  addBooking,
  editBooking,
  getBooking,
  removeBooking,
} from "@/lib/booking";

export default async function Home() {
  const articles = await getBooking();
  return (
    <div className="bg-black text-white">
      <main className="py-17">
        <div className="bg-white text-black ">
          <h1 className=" pt-20 font-bold md:text-4xl text-2xl pb-8 justify-center flex ">
            Booking
          </h1>
          <div>
            <form
              action={addBooking}
              className="md:ml-30 md:pt-10 flex flex-col md:flex-row"
            >
              <label className="m-4">
                Name:
                <input
                  className="border-2 rounded-xs border-black text-black m-4 md:w-50 h-7"
                  name="name"
                />
              </label>
              <label className="m-4">
                Phone number:
                <textarea
                  className="text-black border-black border-2 ml-4 md:w-150 h-9"
                  name="phone"
                />
              </label>
              <label className="m-4">
                Number of people:
                <textarea
                  className="text-black border-black border-2 ml-4 md:w-150 h-9"
                  name="people"
                />
              </label>
              <label className="m-4">
                Hour:
                <textarea
                  className="text-black border-black border-2 ml-4 md:w-150 h-9"
                  name="hour"
                />
              </label>
              <button className="m-3 border-3 p-1 md:w-20 w-s bg-j-emeraude text-white">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

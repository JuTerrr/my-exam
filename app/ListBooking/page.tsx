import Image from "next/image";
import NavLinks from "@/components/Navbar";
import {
  addBooking,
  editBooking,
  getBooking,
  removeBooking,
} from "@/lib/booking";

export default async function ListBooking() {
  const articles = await getBooking();
  return (
    <div className="pt-20">
      {articles.map((a) => (
        <div key={a.id} className="flex justify-center gap-1 ">
          <form className="md:w-3xl w-100 min-h-20 border-2 rounded m-4 grid grid-cols-13">
            <div className="col-span-12 row-span-2">
              <label className="m-4 underline">
                Name:
                <input
                  name="name"
                  className=" m-1 col-start-1"
                  defaultValue={a.name}
                />
              </label>
              <label className="m-4 underline">
                Phone number:
                <input
                  name="phone"
                  className=" m-1 col-start-2"
                  defaultValue={a.phone}
                />
              </label>
              <label className="m-4 underline">
                Number of people:
                <input
                  name="people"
                  className=" m-1 col-start-1"
                  defaultValue={a.people}
                />
              </label>
              <label className="m-4 underline">
                Hour:
                <input
                  name="hour"
                  className="m-1  col-start-2"
                  defaultValue={a.hour}
                />
              </label>
              <input type="hidden" name="id" value={a.id} />
            </div>

            <div className="pt-3 col-span-1 flex justify-end">
              <a
                href="/Manage"
                className="m-1 border-3 p-1 w-40 bg-j-emeraude text-white"
              >
                Edit
              </a>
            </div>
          </form>
        </div>
      ))}
    </div>
  );
}

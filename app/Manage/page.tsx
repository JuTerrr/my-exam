import Image from "next/image";
import {
  addBooking,
  editBooking,
  getBooking,
  removeBooking,
} from "@/lib/booking";

export default async function Manage() {
  const articles = await getBooking();
  return (
    <div className="pt-20">
      {articles.map((a) => (
        <div key={a.id} className="flex justify-center gap-1 ">
          <form className="md:w-3xl w-150 min-h-20 border-2 rounded m-4 grid grid-cols-13">
            <div className="col-span-12 row-span-2">
              <label className="m-4 underline">
                Name:
                <input
                  name="name"
                  className=" m-1 col-start-1 border-white border"
                  defaultValue={a.name}
                />
              </label>
              <label className="m-4 underline ">
                Phone number:
                <input
                  name="phone"
                  className=" m-1 col-start-2 border-white border"
                  defaultValue={a.phone}
                />
              </label>
              <label className="m-4 underline">
                Number of people:
                <input
                  name="people"
                  className=" m-1 col-start-2 border-white border"
                  defaultValue={a.people}
                />
              </label>
              <label className="m-4 underline">
                Hour:
                <input
                  name="hour"
                  className="m-1  col-start-2 border-white border"
                  defaultValue={a.hour}
                />
              </label>
              <input type="hidden" name="id" value={a.id} />
            </div>

            <div className="pt-3 col-span-1 flex-col justify-end">
              <button
                className="m-1 border-3 p-1 w-20 bg-j-emeraude text-white "
                formAction={removeBooking}
              >
                Delete
              </button>
              <button
                className=" m-1 border-3 p-1 w-20 bg-j-emeraude text-white"
                formAction={editBooking}
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      ))}
    </div>
  );
}

import { useState } from "react";
import Counter from "./Counter";

export default function Example() {
  let people = [
    "Leslie Alexander",
    "Michael Foster",
    "Dries Vincent",
    "Lindsay Walton",
    "Courtney Henry",
    "Tom Cook",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <ul className="text-center w-[100%] divide-y divide-gray-100 bg-amber-600 bg-opacity-50 p-4">
      {people.map((person, index) => (
        <li
          key={person}
          onClick={() => {
            setSelectedIndex(index);
          }}
          className={
            selectedIndex === index
              ? "list-group-item bg-amber-900"
              : "list-group-item"
          }
        >
          <div className="flex items-center gap-4">
            <Counter />
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className=" text-sm font-semibold leading-6 text-gray-50">
                  {person}
                </p>
              </div>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <div className="mt-1 flex items-center gap-x-1.5"> </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

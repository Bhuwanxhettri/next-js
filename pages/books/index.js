import Link from "next/link";
import React from "react";
import { books } from "../../data/utils";

const index = () => {
  return (
    <div>
      <h1>book details</h1>

      <div className="mx-auto bg-slate-300">
        {books?.map((book, id) => {
          return (
            <>
              <div key={id}>
                <h1 className="text-xl font-bold text-red-700">{book.name}</h1>
                <h2>{book.description}</h2>
                <Link href={`books/${book.id}`}>
                  <button className="bg-gray-700 text-white font-medium p-5">
                    Link
                  </button>
                </Link>

                <hr></hr>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default index;

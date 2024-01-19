import Image from "next/image";
import Link from "next/link";
import React from "react";

export const BlogsCard = ({title, date}) => {
  return (
    <Link href="/about">
      <div class=" mx-auto">
        <div class="bg-[#E8E8EA] shadow-md border border-gray-200 rounded-lg max-w-[390px] mb-5 p-5">
          {/* <a href="#"> */}
          <img
            class="rounded-t-lg"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
          {/* </a> */}
          <div class="p-5">
            {/* <a href="#"> */}
            <h5 class="text-gray-900 font-bold  mb-2 cursor-pointer">
              {title}
            </h5>
            {/* </a> */}

            <p className="text-{#97989F}">{date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

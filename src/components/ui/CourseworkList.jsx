"use client";

import Image from "next/image";
import MockImg from "@/assets/mock_pdf.svg";
import { COURSEWORK_ITEMS } from "@/constants";
import { useTabsStore } from "@/app/store/useStore";

export default function CourseworkList({
  title,
  items = null,
  useMock = true,
}) {
  const { activeTab } = useTabsStore();
  const itemsToRender = !useMock
    ? items
    : COURSEWORK_ITEMS.filter((item) => item?.type === activeTab);

  return (
    Boolean(itemsToRender?.length) && (
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-secondary-text mb-4">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {itemsToRender?.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow flex">
              {/* First Column: Image */}
              <div className="w-1/3 flex items-center justify-center">
                <Image
                  src={MockImg}
                  alt={item.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              {/* Second Column: Text Content */}
              <div className="w-2/3 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
                {/* Add other details here if needed */}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  );
}

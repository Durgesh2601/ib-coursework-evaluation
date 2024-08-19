"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import CourseworkForm from "@/components/ui/CourseworkForm";
import CourseworkList from "@/components/ui/CourseworkList";
import Header from "@/components/ui/Header";
import HomePageImg from "@/assets/img1.svg";
import Coursework from "./coursework/page";
import { getLabelbyFormValue } from "@/utils";
import { SELECT_FIELDS } from "@/constants";
import { useRefetchStoredData } from "./store/useStore";

export default function Home() {
  const [storedItems, setStoredItem] = useState(null);
  const { refetch } = useRefetchStoredData();
  useEffect(() => {
    const parsedItems = JSON.parse(localStorage.getItem("uploadedFiles"));
    if (!parsedItems) return;
    const formattedItems = parsedItems?.map(
      ({
        essay_title = "",
        coursework_type = "",
        subject = "",
        words_count = "",
      }) => {
        const subjectLabel = getLabelbyFormValue(
          SELECT_FIELDS.subject.options,
          subject
        );
        const courseWorkTypeLabel = getLabelbyFormValue(
          SELECT_FIELDS.coursework_type.options,
          coursework_type
        );
        const formattedData = {
          title: essay_title,
          description: `${subjectLabel} | ${courseWorkTypeLabel} | ${words_count} words`,
        };
        return formattedData;
      }
    );
    setStoredItem(formattedItems);
  }, [refetch]); // trigger this on storing new item

  return (
    <main className="flex-1 lg:p-8 bg-blue-50 min-h-screen">
      <div className="px-2 grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8">
        {/* First Column: Header and CourseworkForm */}
        <div className="lg:col-span-2 ">
          <Header />
          <CourseworkForm />
        </div>
        {/* Second Column: Image */}
        <div className="hidden lg:flex items-end justify-center">
          <Image
            src={HomePageImg}
            alt="Coursework Image"
            width={290}
            height={528}
          />
        </div>
      </div>
      <CourseworkList
        title="My coursework"
        items={storedItems}
        useMock={false}
      />
      <Coursework />
    </main>
  );
}

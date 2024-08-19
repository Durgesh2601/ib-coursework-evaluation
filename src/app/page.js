import Sidebar from "@/components/Sidebar";
import CourseworkForm from "@/components/ui/CourseworkForm";
import CourseworkList from "@/components/ui/CourseworkList";
import Header from "@/components/ui/Header";
import Tabs from "@/components/ui/Tabs";
import HomePageImg from "@/assets/img1.svg";
import Image from "next/image";
import { COURSEWORK_ITEMS } from "@/constants";

export default function Home() {
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

      <CourseworkList title="My coursework" items={COURSEWORK_ITEMS} />
    </main>
  );
}

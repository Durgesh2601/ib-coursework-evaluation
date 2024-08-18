import Sidebar from "@/components/Sidebar";
import CourseworkForm from "@/components/ui/CourseworkForm";
import CourseworkList from "@/components/ui/CourseworkList";
import Header from "@/components/ui/Header";
import Tabs from "@/components/ui/Tabs";
import HomePageImg from "@/assets/img1.svg";
import Image from "next/image";
import { COURSEWORK_ITEMS } from "@/constants";

export default function Home() {
  const exploreTabs = [
    {
      label: "IA Example",
      content: <CourseworkList items={COURSEWORK_ITEMS} />,
    },
    {
      label: "EE Example",
      content: <CourseworkList items={COURSEWORK_ITEMS} />,
    },
  ];

  return (
    <main className="flex">
      <Sidebar />
      <main className="flex-1 p-4 lg:p-8 bg-blue-50 min-h-screen">
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

        <section className="mt-6 lg:mt-12">
          <h2 className="text-2xl font-bold text-secondary-text mb-4">
            Explore coursework
          </h2>
          <Tabs tabs={exploreTabs} />
        </section>
      </main>
    </main>
  );
}

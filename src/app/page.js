import Sidebar from "@/components/Sidebar";
import CourseworkForm from "@/components/ui/CourseworkForm";
import CourseworkList from "@/components/ui/CourseworkList";
import Header from "@/components/ui/Header";
import Tabs from "@/components/ui/Tabs";
import HomePageImg from "@/assets/img1.svg";
import Image from "next/image";

export default function Home() {
  const myCourseworkItems = [
    {
      title: "How does the temperature of a Copper...",
      description: "Physics | IA Example | 388 words",
    },
  ];

  const exploreTabs = [
    {
      label: "IA Example",
      content: <CourseworkList items={myCourseworkItems} />,
    },
    {
      label: "EE Example",
      content: <CourseworkList items={myCourseworkItems} />,
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
          <div className="flex items-end justify-center">
            <Image
              src={HomePageImg}
              alt="Coursework Image"
              width={290}
              height={528}
            />
          </div>
        </div>

        <CourseworkList title="My coursework" items={myCourseworkItems} />

        <section className="mt-6 lg:mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Explore coursework
          </h2>
          <Tabs tabs={exploreTabs} />
        </section>
      </main>
    </main>
  );
}

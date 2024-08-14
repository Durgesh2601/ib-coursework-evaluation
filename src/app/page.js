import Sidebar from "@/components/Sidebar";
import CourseworkForm from "@/components/ui/CourseworkForm";
import CourseworkList from "@/components/ui/CourseworkList";
import FileUpload from "@/components/ui/FileUpload";
import Header from "@/components/ui/Header";
import Tabs from "@/components/ui/Tabs";

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
        <Header />
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <FileUpload />
          <CourseworkForm />
        </section>
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

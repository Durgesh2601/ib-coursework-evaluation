import Tabs from "@/components/ui/Tabs";
import { EXPLORE_TABS } from "@/constants";

export default function Coursework() {
  return (
    <section className="mt-6 lg:mt-12">
      <h2 className="text-2xl font-bold text-secondary-text mb-4">
        Explore coursework
      </h2>
      <Tabs tabs={EXPLORE_TABS} />
    </section>
  );
}

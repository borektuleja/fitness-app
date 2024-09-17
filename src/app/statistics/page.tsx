import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

import H from "@/components/H";
import P from "@/components/P";
import { PageSection } from "@/components/Page";

import { fetchToken } from "@/loaders/auth.loaders";
import { fetchStatistics } from "@/loaders/statistics.loaders";

import ChartWrapper from "./components/ChartWrapper";
import StatisticsTable from "./components/StatisticsTable";

const PowerliftingChart = dynamic(() => import("./components/PowerliftingChart"), { ssr: false });
const WeightliftingChart = dynamic(() => import("./components/WeightliftingChart"), { ssr: false });

export default async function Page() {
  await fetchToken() || redirect("/login");
  const statistics = await fetchStatistics();
  return (
    <PageSection>
      <header>
        <H className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-rose-500">Statistický přehled</H>
      </header>
      <P className="text-justify">Následující tabulka nabízí podrobný přehled výkonů jednotilivých členů tréninkové skupiny. Ve srovnání níže jsou uvedeny grafy, které vizuálně znázorňují výkony skupiny jako celku a vzájemné porovnání mezi atlety.</P>
      <StatisticsTable data={statistics} />
      <div className="flex flex-wrap gap-8">
        <ChartWrapper title="Silový trojboj">
          <PowerliftingChart data={statistics} />
        </ChartWrapper>
        <ChartWrapper title="Vzpírání">
          <WeightliftingChart data={statistics} />
        </ChartWrapper>
      </div>
    </PageSection>
  );
}

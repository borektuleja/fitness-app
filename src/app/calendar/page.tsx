import { redirect } from "next/navigation";
import { Suspense } from "react";

import Calendar from "@/components/Calendar";
import CalendarSkeleton from "@/components/CalendarSkeleton";
import H from "@/components/H";
import { PageSection } from "@/components/Page";

import { fetchToken } from "@/loaders/auth.loaders";

import Settings from "./components/Settings";

export default async function Page({
  searchParams
}: {
  searchParams?: { year?: string, month?: string }
}) {
  await fetchToken() || redirect("/login");
  const today = new Date(Date.now());
  const year = Number(searchParams?.year ?? today.getFullYear());
  const month = Number(searchParams?.month ?? today.getMonth() + 1);
  return (
    <PageSection>
      <header>
        <H>
          <span>Kalendář </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-rose-500">tréninků</span>
        </H>
      </header>
      <div className="flex flex-col gap-4">
        <Settings year={year} month={month} />
        <Suspense key={month} fallback={<CalendarSkeleton />}>
          <Calendar year={year} month={month} />
        </Suspense>
      </div>
    </PageSection>
  );
}

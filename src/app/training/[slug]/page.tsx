import { notFound } from "next/navigation";
import { Suspense } from "react";

import H from "@/components/H";
import { PageSection } from "@/components/Page";

import { makeContentNodes } from "@/helpers/plan.helpers";

import { fetchPlan } from "@/loaders/plan.loaders";

import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import RenderNode from "./components/RenderNode";

export default async function Page({
  params
}: {
  params: { slug: string }
}) {
  const date = new Date(params.slug);
  const { id, content, scheduledOn } = await fetchPlan(date.getFullYear(), date.getMonth() + 1, date.getDate()) || notFound();
  const nodes = makeContentNodes(content);
  return (
    <PageSection>
      <header>
        <H>{`Trénink ${scheduledOn.toLocaleDateString()}`}</H>
      </header>
      <div className="w-full max-w-6xl p-4 border border-neutral-700/80 rounded-lg flex flex-col bg-neutral-700/20">
        {nodes.map((node, index) => (
          <RenderNode node={node} key={index} />
        ))}
      </div>
      <CommentForm id={id} />
      <Suspense>
        <CommentList id={id} />
      </Suspense>
    </PageSection>
  );
}

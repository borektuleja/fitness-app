"use client";

import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

import type { StatisticsDto } from "@/loaders/statistics.loaders";

export default function WeightliftingChart({
  data
}: {
  data: StatisticsDto[]
}) {
  return (
    <BarChart data={data} width={960} height={320} margin={{ bottom: 48 }} barGap={4} barCategoryGap={16}>
      <CartesianGrid strokeDasharray="3" />
      <XAxis dataKey="fullname" angle={-20} textAnchor="end" />
      <YAxis />
      <Tooltip cursor={{ fill: "transparent" }} content={<ChartTooltip />} />
      <Legend verticalAlign="top"/>
      <Bar dataKey="cleanAndJerk" fill="#E94F37" name="Nadhoz (kg)" />
      <Bar dataKey="squatSnatch" fill="#EFA00B" name="Trh (kg)" />
    </BarChart>
  );
}

function ChartTooltip({
  label,
  payload
}: {
  label?: string,
  payload?: any
}) {
  return payload.length ? (
    <div className="p-2 border border-neutral-700/80 rounded-md flex flex-col bg-neutral-950/80">
      <span className="text-white text-sm font-medium tracking-wider">
        {label}
      </span>
      {payload[0] ? (
        <span className="text-white text-sm font-medium tracking-wider">
          {`${payload[0].name}: ${payload[0].value}`}
        </span>
      ) : null }
      {payload[1] ? (
        <span className="text-white text-sm font-medium tracking-wider">
          {`${payload[1].name}: ${payload[1].value}`}
        </span>
      ) : null }
    </div>
  ) : null;
}

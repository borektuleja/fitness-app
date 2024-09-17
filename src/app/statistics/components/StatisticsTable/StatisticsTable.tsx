"use client";

import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import React from "react";

import Scroll from "@/components/Scroll";
import Table, { TableBody, TableHead, TableTd, TableTh, TableTr } from "@/components/Table";

import { makeIndexTransition, safeDiv } from "@/helpers/statistics.helpers";

import type { StatisticsDto } from "@/loaders/statistics.loaders";

import * as styles from "./styles";

export default function StatisticsTable({
  data
}: {
  data: StatisticsDto[]
}) {
  const [index, setIndex] = React.useState(1);
  const account = data[index];
  return (
    <div className={styles.wrapper}>
      <div className={styles.settings}>
        <span className={styles.icon} onClick={() => setIndex((current) => makeIndexTransition(current - 1, data.length))}>
          <ArrowBigLeft />
        </span>
        <span className={styles.label}>Přehled atleta</span>
        <span className={styles.icon} onClick={() => setIndex((current) => makeIndexTransition(current + 1, data.length))}>
          <ArrowBigRight />
        </span>
      </div>
      <Scroll className="max-w-3xl">
        <Table className="grid-cols-[repeat(4,_minmax(max-content,_1fr))]">
          <TableHead>
            <TableTr>
              <TableTh />
              <TableTh>{account.fullname}</TableTh>
              <TableTh>Reálně</TableTh>
              <TableTh>Ideálně</TableTh>
            </TableTr>
          </TableHead>
          <TableBody>
            <TableTr>
              <TableTd className="text-red-400">Back Squat</TableTd>
              <TableTd className="text-red-400">{account.backSquat}</TableTd>
              <TableTd className="text-red-400">{safeDiv(account.backSquat, account.backSquat)}</TableTd>
              <TableTd className="text-red-400">1,00</TableTd>
            </TableTr>
            <TableTr>
              <TableTd className="text-red-400">Front Squat</TableTd>
              <TableTd className="text-red-400">{account.frontSquat}</TableTd>
              <TableTd className="text-red-400">{safeDiv(account.frontSquat, account.backSquat)}</TableTd>
              <TableTd className="text-red-400">0,85</TableTd>
            </TableTr>
            <TableTr>
              <TableTd className="text-red-400">Deadlift</TableTd>
              <TableTd className="text-red-400">{account.deadlift}</TableTd>
              <TableTd className="text-red-400">{safeDiv(account.deadlift, account.backSquat)}</TableTd>
              <TableTd className="text-red-400">1,2-1,3</TableTd>
            </TableTr>
            <TableTr>
              <TableTd className="text-red-400">Power Clean</TableTd>
              <TableTd className="text-red-400">{account.powerClean}</TableTd>
              <TableTd className="text-red-400">{safeDiv(account.powerClean, account.backSquat)}</TableTd>
              <TableTd className="text-red-400">0,7</TableTd>
            </TableTr>
            <TableTr>
              <TableTd className="text-red-400">Power Snatch</TableTd>
              <TableTd className="text-red-400">{account.powerSnatch}</TableTd>
              <TableTd className="text-red-400">{safeDiv(account.powerSnatch, account.backSquat)}</TableTd>
              <TableTd className="text-red-400">0,55</TableTd>
            </TableTr>
            <TableTr>
              <TableTd className="text-red-400">Bench Press</TableTd>
              <TableTd className="text-red-400">{account.benchPress}</TableTd>
              <TableTd className="text-red-400">{safeDiv(account.benchPress, account.backSquat)}</TableTd>
              <TableTd className="text-red-400">Power Clean</TableTd>
            </TableTr>
            <TableTr>
              <TableTd className="text-green-400">Overhead Squat</TableTd>
              <TableTd className="text-green-400">{account.overHeadSquat}</TableTd>
              <TableTd className="text-green-400">{safeDiv(account.overHeadSquat, account.frontSquat)}</TableTd>
              <TableTd className="text-green-400">0,90</TableTd>
            </TableTr>
            <TableTr>
              <TableTd className="text-green-400">Clean And Jerk</TableTd>
              <TableTd className="text-green-400">{account.cleanAndJerk}</TableTd>
              <TableTd className="text-green-400">{safeDiv(account.cleanAndJerk, account.frontSquat)}</TableTd>
              <TableTd className="text-green-400">0,90</TableTd>
            </TableTr>
            <TableTr>
              <TableTd className="text-green-400">Squat Clean</TableTd>
              <TableTd className="text-green-400">{account.squatClean}</TableTd>
              <TableTd className="text-green-400">{safeDiv(account.squatClean, account.frontSquat)}</TableTd>
              <TableTd className="text-green-400">{">"}0,90</TableTd>
            </TableTr>
            <TableTr>
              <TableTd className="text-green-400">Jerk</TableTd>
              <TableTd className="text-green-400">{account.jerk}</TableTd>
              <TableTd className="text-green-400">{safeDiv(account.jerk, account.frontSquat)}</TableTd>
              <TableTd className="text-green-400">{">"}0,90</TableTd>
            </TableTr>
            <TableTr>
              <TableTd className="text-green-400">Squat Snatch</TableTd>
              <TableTd className="text-green-400">{account.squatSnatch}</TableTd>
              <TableTd className="text-green-400">{safeDiv(account.squatSnatch, account.frontSquat)}</TableTd>
              <TableTd className="text-green-400">0,72</TableTd>
            </TableTr>
            <TableTr>
              <TableTd className="text-green-400">Squat Clean Thruster</TableTd>
              <TableTd className="text-green-400">{account.squatCleanThruster}</TableTd>
              <TableTd className="text-green-400">{safeDiv(account.squatCleanThruster, account.frontSquat)}</TableTd>
              <TableTd className="text-green-400">0,75-0,77</TableTd>
            </TableTr>
          </TableBody>
        </Table>
      </Scroll>
    </div>
  );
}

import { Apple, ArrowUpDown, Handshake, LandPlot, Lightbulb, NotebookPen, PersonStanding, Trophy } from "lucide-react";

import H from "@/components/H";
import P from "@/components/P";
import { PageSection, PageTags } from "@/components/Page";
import Tag from "@/components/Tag";

export default function Page() {
  return (
    <PageSection>
      <header>
        <H className="text-center">
          <span>Fitness plan </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-rose-500">for<br />CrossFit athletes</span>
        </H>
      </header>
      <P className="text-justify">Tréninková skupina pod vedením Mgr. Lukáše Káňi. Členové této skupiny jsou aktivními závodníky v CrossFit soutěžích v ČR, ale také v zahraničí. V minulosti členové této skupiny sklidily úspěch v kategoriích Teen, Scaled, Team, Rx i Masters. Tréninky jsou uzpůsobeny jak pro atlety elitní, tak i pro pokročilé.</P>
      <PageTags className="max-w-6xl md:self-auto">
        <Tag icon={<ArrowUpDown />} label="Budovat všestranost" />
        <Tag icon={<PersonStanding />} label="Flexibilita jako ohebnost či pružnost" />
        <Tag icon={<Lightbulb />} label="Liberální a svědomitý přístup k trénování" />
        <Tag icon={<NotebookPen />} label="Motorické dovednosti a jejich rozvoj" />
        <Tag icon={<Handshake />} label="Přátelství jako základní stavební kámen" />
        <Tag icon={<Apple />} label="Strava, spánek, dostatečná regenerace" />
        <Tag icon={<Trophy />} label="Vlohy / nadání / talent" />
        <Tag icon={<LandPlot />} label="Zdatnost jako individuální připravenost" />
      </PageTags>
    </PageSection>
  );
}

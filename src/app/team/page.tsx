import { BriefcaseBusiness, Cake, CircleCheck, Facebook, Goal, Instagram, Mail, Phone, User } from "lucide-react";

import H from "@/components/H";
import P from "@/components/P";
import { PageSection, PageTags } from "@/components/Page";
import Qualification from "@/components/Qualification";
import Tag from "@/components/Tag";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-20">
      <PageSection className="w-full max-w-7xl items-start">
        <header>
          <H className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-rose-500">Mgr. Lukáš Káňa</H>
        </header>
        <P className="text-justify">Lukáš, po vystudování magisterského studia oboru Tělesná výchova a sport, se věnoval 5let praxi ve svém oboru. Ovšem jeho srdce jej i přesto táhlo do Colliery CrossFit Ostrava, kde je od samého vzniku (2014). V minulosti se věnoval aktivně atletice, ať už jako atlet (SSK Vítkovice - hod oštěpem, 10 let), tak i jako trenér mládeže (Atletika Poruba, 5 let). Jeho zkušenosti využívá v přípravě talentovaných náctiletých atletů v Colliery CrossFit Ostrava, dále na CrossFit Kids lekcích a také jako hlavní trenér B-F-L-M-P-S-V-Z Training. V Colliery CrossFit Ostrava se dále věnuje skupinovým lekcím CrossFit, Metabolic, Core Strenght a CrossFit Weightlifting.</P>
        <PageTags>
          <Tag icon={<Cake />} label="13. 12. 1986" />
          <Tag icon={<BriefcaseBusiness />} label="Coach Colliery CrossFit Ostrava" />
          <Tag icon={<BriefcaseBusiness />} label="Ředitel CollieryMade Games" />
          <Tag icon={<User />} label="190 cm / 102 kg" />
          <Tag icon={<Goal />} label="Colliery CrossFit Ostrava" />
          <Tag icon={<CircleCheck />} label="Vedoucí pracovník pro skupinové lekce" />
          <Tag icon={<CircleCheck />} label="Šéftrenér BFLMPSVZ Training" />
          <Tag icon={<CircleCheck />} label="CrossFit Weighlifting" />
          <Tag icon={<CircleCheck />} label="CrossFit Adaptive" />
        </PageTags>
        <div className="flex flex-wrap justify-center self-center gap-x-32 gap-y-8">
          <Qualification label="Magisterské studium (2014)" content="OU PDF, Katedra tělesné výchovy a sportu" />
          <Qualification label="Bakalářské studium (2011)" content="OU PDF, Katedra tělesné výchovy a sportu" />
        </div>
        <PageTags>
          <Tag icon={<Phone />} label="+420 776 122 293" />
          <Tag icon={<Mail />} label="bambus.lukhino@email.cz" />
          <Tag icon={<Facebook />} label="Facebook" />
          <Tag icon={<Instagram />} label="Instagram" />
        </PageTags>
      </PageSection>
    </div>
  );
}

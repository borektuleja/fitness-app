import H from "@/components/H";
import P from "@/components/P";
import { PageSection } from "@/components/Page";

import LoginForm from "./components/LoginForm";

export default function Page() {
  return (
    <PageSection>
      <header>
        <H>Přihlásit se</H>
      </header>
      <P className="text-center">Hlavní část systému je dostupná pouze pro členy tréninkové skupiny a další pověřené osoby. Pro vstup do systému se musíte přihlásit.</P>
      <LoginForm />
    </PageSection>
  );
}

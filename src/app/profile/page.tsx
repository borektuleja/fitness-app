import { Info, Settings, ShieldAlert } from "lucide-react";
import { notFound, redirect } from "next/navigation";

import H from "@/components/H";
import { PageSection, PageTab } from "@/components/Page";
import Tab from "@/components/Tab";

import { fetchToken } from "@/loaders/auth.loaders";
import { fetchUser } from "@/loaders/user.loaders";

import LogoutForm from "./components/LogoutForm";
import PasswordForm from "./components/PasswordForm";
import UserForm from "./components/UserForm";

export default async function Page() {
  const token = await fetchToken() || redirect("/login");
  const user = await fetchUser(token.associate) || notFound();
  return (
    <PageSection>
      <header>
        <H>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-rose-500">Uživatelský </span>
          <span>profil</span>
        </H>
      </header>
      <PageTab>
        <Tab icon={<Info />} label="Nastavení uživatelských údajů" />
        <UserForm user={user} />
      </PageTab>
      <PageTab>
        <Tab icon={<ShieldAlert />} label="Zabezpečení účtu" />
        <PasswordForm />
      </PageTab>
      <PageTab>
        <Tab icon={<Settings />} label="Systémové nastavení" />
        <LogoutForm />
      </PageTab>
    </PageSection>
  );
}

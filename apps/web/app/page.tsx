"use client";
import { signIn, useSession } from "next-auth/react";
import Dashboard from "./dashboard";
import Welcome from "./welcome";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <main>{session ? <Dashboard /> : <Welcome />}</main>
    </div>
  );
}

"use client";
import { signIn, useSession } from "next-auth/react";
import Dashboard from "./dashboard";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <main>
        {session ? (
          <Dashboard />
        ) : (
          <button
            onClick={() => signIn("github")}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Sign in with GitHub
          </button>
        )}
      </main>
    </div>
  );
}

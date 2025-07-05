"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { RepoList } from "./components/RepoList";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {session ? (
          <>
            <p>Signed in as {session.user?.name}</p>
            {session.user?.image ? (
              <Image
                className="rounded-full ring-2"
                src={session.user?.image}
                alt="User's avatar"
                width={80}
                height={80}
              />
            ) : (
              ""
            )}
            <button
              onClick={() => signOut()}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Sign out
            </button>
            <a
              href="/templates/new"
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              <span className="inline-block">
                {/* Plus icon using Tailwind/heroicons */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </span>
              Create Template
            </a>
            <RepoList />
          </>
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

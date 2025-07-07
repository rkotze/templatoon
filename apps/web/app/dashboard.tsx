"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) return "";

  return (
    <div className="min-h-screen flex">
      {/* Sidebar / Navbar */}
      <nav className="w-64 bg-gradient-to-br from-purple-900 via-indigo-900 to-fuchsia-900 text-white flex flex-col items-center py-8 gap-4">
        {session.user?.image && (
          <Image
            className="rounded-full ring-2"
            src={session.user.image}
            alt="User's avatar"
            width={64}
            height={64}
          />
        )}
        <p className="font-semibold">{session.user?.name}</p>
        <ul className="flex flex-col gap-4 w-full px-4">
          <li>
            <a
              href="/dashboard"
              className="block py-2 px-4 rounded hover:bg-white/10 transition"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/templates"
              className="block py-2 px-4 rounded hover:bg-white/10 transition"
            >
              Templates
            </a>
          </li>
          {/* Add more nav links as needed */}
        </ul>
        <button
          onClick={() => signOut()}
          className="mt-auto bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Sign out
        </button>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 flex justify-center items-start p-8 bg-gradient-to-br from-purple-900 via-indigo-900 to-fuchsia-900">
        <div
          className="w-full rounded-2xl shadow p-8
          bg-white/90 dark:bg-gray-900/80
          text-gray-900 dark:text-white
          backdrop-blur-md
          transition-colors
        "
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <a
              href="/templates/new"
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
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
              Create Template
            </a>
          </div>
          {/* Place your dashboard content here */}
          <div>
            <p>Welcome to your dashboard!</p>
          </div>
        </div>
      </main>
    </div>
  );
}

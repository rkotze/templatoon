import { signIn } from "next-auth/react";

export default function Welcome() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-fuchsia-900">
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-10 max-w-md w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white mb-4 text-center">
          Welcome to Templatoon
        </h1>
        <p className="text-white/80 mb-8 text-center">
          Templatoon helps you manage, create, and share code templates with
          your team. Organize your workflow, speed up development, and keep your
          best practices in one place.
        </p>
        <button
          onClick={() => signIn("github")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition text-lg"
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}

import Image from "next/image";
import { Inter } from "next/font/google";
import { SignInBtn } from "./components/SignInBtn";
import type { User } from "@clerk/nextjs/api";
import { UserButton, UserProfile, currentUser } from "@clerk/nextjs/app-beta";
import { SignOutBtn } from "./components/SignOutBtn";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const user: User | null = await currentUser();

  return (
    <main className="w-full flex h-screen items-center justify-center">
      {!!user ? (
        <>
          <UserProfile />
          <UserButton />
        </>
      ) : (
        <SignInBtn />
      )}
    </main>
  );
}

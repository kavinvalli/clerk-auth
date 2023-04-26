import { SignUp } from "@clerk/nextjs/app-beta";

export default function SignUpPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <SignUp />
    </div>
  );
}

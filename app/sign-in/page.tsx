import { SignIn } from "@clerk/nextjs/app-beta";
import { dark } from "@clerk/themes";

export default function SignInPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <SignIn
        appearance={{
          baseTheme: dark,
          layout: {
            logoImageUrl:
              "https://cdn.hashnode.com/res/hashnode/image/upload/v1643737600667/mNxbCBZ5F.png?w=1000&h=250&fit=crop&crop=entropy&auto=compress,format&format=webp",
          },
          variables: {
            colorPrimary: "#f66666",
          },
        }}
      />
    </div>
  );
}

import { signIn } from "@/lib/auth-client";
import { Button, toast } from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";

const SocialLogin = () => {
  const handleGoogleLogin = async () => {
    const data = await signIn.social({
      provider: "google",
    });

    toast.success("লগইন সফল হয়েছে");
  };

  const handleGithubLogin = async () => {
    const data = await signIn.social({
      provider: "github",
    });
    toast.success("লগইন সফল হয়েছে");
  };

  return (
    <>
      <Button
        onClick={handleGoogleLogin}
        className="w-full rounded-md"
        variant="outline"
      >
        <Icon icon="devicon:google" />
        Google দিয়ে চালিয়ে যান
      </Button>
      <Button
        onClick={handleGithubLogin}
        className="w-full rounded-md"
        variant="outline"
      >
        <Icon icon="mdi:github" />
        GitHub দিয়ে চালিয়ে যান
      </Button>
    </>
  );
};

export default SocialLogin;

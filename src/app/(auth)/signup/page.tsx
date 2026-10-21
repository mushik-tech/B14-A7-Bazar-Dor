"use client";
import { signUp } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  Separator,
  Surface,
  TextField,
  toast,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

const SignUpPage = () => {
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsPending(true);

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    const { data, error } = await signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=3",
      callbackURL: "/signin",
    });

    if (error) {
      toast.danger(error.message);
      setIsPending(false);
      return;
    }

    if (data) {
      toast.success("অ্যাকাউন্ট তৈরি করা হয়েছে, লগইন করুন");
      router.push("/signin");
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 px-5 md:px-0">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold">অ্যাকাউন্ট তৈরি করুন</h1>
        <p className="text-sm text-gray-500">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      <div className="rounded-2xl border bg-surface p-6">
        <Surface className="w-full">
          <Form onSubmit={onSubmit}>
            <Fieldset className="w-full">
              <Fieldset.Group>
                <TextField
                  isRequired
                  name="name"
                  validate={(value) => {
                    if (value.length < 3) {
                      return "Name must be at least 3 characters";
                    }
                    return null;
                  }}
                >
                  <Label>নাম</Label>
                  <Input placeholder="যেমন: রহিম উদ্দিন" />
                  <FieldError />
                </TextField>
                <TextField isRequired name="email" type="email">
                  <Label>ইমেইল</Label>
                  <Input placeholder="john@example.com" />
                  <FieldError />
                </TextField>

                <TextField
                  isRequired
                  minLength={8}
                  name="password"
                  type="password"
                  value={password}
                  onChange={setPassword}
                  validate={(value) => {
                    if (value.length < 8) {
                      return "Password must be at least 8 characters";
                    }
                    return null;
                  }}
                >
                  <Label>পাসওয়ার্ড</Label>
                  <Input placeholder="কমপক্ষে ৮ অক্ষর" />
                  <FieldError />
                </TextField>

                <TextField
                  isRequired
                  minLength={8}
                  name="confirmPassword"
                  type="password"
                  validate={(value) => {
                    if (value !== password) {
                      return "পাসওয়ার্ড দুটি মিলছে না";
                    }
                    return null;
                  }}
                >
                  <Label>পাসওয়ার্ড নিশ্চিত করুন</Label>
                  <Input placeholder="আবার লিখুন" />
                  <FieldError />
                </TextField>
              </Fieldset.Group>
              <Fieldset.Actions>
                <Button
                  type="submit"
                  isPending={isPending}
                  className="w-full bg-[#05893E] rounded-lg"
                >
                  {isPending ? "অপেক্ষা করুন..." : "অ্যাকাউন্ট তৈরি করুন"}
                </Button>
              </Fieldset.Actions>
            </Fieldset>
          </Form>

          <div className="my-5 flex w-full items-center gap-3">
            <Separator className="flex-1" variant="secondary" />
            <span className="shrink-0 text-sm text-gray-500">অথবা</span>
            <Separator className="flex-1" variant="secondary" />
          </div>

          <div className="flex gap-2">
            <Button className="w-full rounded-md" variant="outline">
              <Icon icon="devicon:google" />
              Google দিয়ে চালিয়ে যান
            </Button>
            <Button className="w-full rounded-md" variant="outline">
              <Icon icon="mdi:github" />
              GitHub দিয়ে চালিয়ে যান
            </Button>
          </div>

          <p className="text-center mt-4 text-sm">
            অ্যাকাউন্ট আছে?
            <span className="text-green-500 font-semibold"> সাইন ইন করুন</span>
          </p>
        </Surface>
      </div>

      <p className="text-gray-500 text-center mt-6">← হোম পেজে ফিরে যান</p>
    </div>
  );
};

export default SignUpPage;

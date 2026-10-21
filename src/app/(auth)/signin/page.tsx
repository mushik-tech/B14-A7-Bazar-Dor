"use client";
import SocialLogin from "@/Components/Auth/SocialLogin";
import { signIn } from "@/lib/auth-client";
import { Eye, FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  InputGroup,
  Label,
  Separator,
  Surface,
  TextArea,
  TextField,
  toast,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const SignInPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    const { data, error } = await signIn.email({
      email: userData.email,
      password: userData.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.danger(error.message);
      return;
    }

    if (data) {
      toast.success("লগইন সফল হয়েছে");
    }
  };
  return (
    <div className="max-w-lg mx-auto my-10 px-5 md:px-0">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold">সাইন ইন</h1>
        <p className="text-sm text-gray-500">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      <div className="rounded-2xl border bg-surface p-6">
        <Surface className="w-full">
          <Form onSubmit={onSubmit}>
            <Fieldset className="w-full">
              <Fieldset.Group>
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
              </Fieldset.Group>
              <Fieldset.Actions>
                <Button
                  type="submit"
                  className="w-full bg-[#05893E] rounded-lg"
                >
                  সাইন ইন
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
            <SocialLogin></SocialLogin>
          </div>

          <p className="text-center mt-4 text-sm">
            অ্যাকাউন্ট নেই?
            <span className="text-green-500 font-semibold">
              <Link href={"/signup"}>সাইন আপ করুন</Link>
            </span>
          </p>
        </Surface>
      </div>

      <p className="text-gray-500 text-center mt-6">
        <Link href={"/"}>← হোম পেজে ফিরে যান</Link>
      </p>
    </div>
  );
};

export default SignInPage;

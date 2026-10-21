"use client";

import { signOut, useSession } from "@/lib/auth-client";
import {
  Button,
  Card,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  Surface,
  TextField,
  toast,
} from "@heroui/react";
import Image from "next/image";
import { redirect } from "next/navigation";

const MyProfile = () => {
  const { data } = useSession();

  const handleSignOut = async () => {
    const { data, error } = await signOut();

    if (error) {
      toast.danger(error.message);
      return;
    }

    if (data) {
      toast.success("সফলভাবে সাইন আউট হয়েছে");
      redirect('/')
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-10 px-5 md:px-0">
      <div className="">
        <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
        <p className="text-sm text-gray-500">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>

      <Card className="flex flex-row rounded-xl border my-6 py-8 justify-between items-center">
        <div className="flex gap-3 items-center">
          <Image
            src={
              data?.user.image ||
              "https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
            }
            alt="profile picture"
            height={70}
            width={70}
            className="rounded-lg"
          ></Image>
          <div>
            <h1 className="text-[17px] font-semibold">{data?.user?.name}</h1>
            <p className="text-gray-600">{data?.user?.email}</p>
          </div>
        </div>
        <div>
          <Button
            variant="outline"
            className={"text-danger font-semibold border-danger rounded-lg"}
            onClick={() => handleSignOut()}
          >
            ↩ সাইন আউট
          </Button>
        </div>
      </Card>

      <div className="rounded-2xl border bg-surface p-6">
        <h1 className="font-bold mb-8">তথ্য</h1>
        <Surface className="w-full">
          <Form
          //  onSubmit={onSubmit}
          >
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
              </Fieldset.Group>
              <Fieldset.Actions>
                <Button
                  type="submit"
                  className="w-full bg-[#05893E] rounded-lg"
                >
                  আপডেট
                </Button>
              </Fieldset.Actions>
            </Fieldset>
          </Form>
        </Surface>
      </div>
    </div>
  );
};

export default MyProfile;

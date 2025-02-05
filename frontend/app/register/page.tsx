"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Eye, EyeClosed } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address." }) // Ensures valid email format
    .min(1, { message: "Enter your email address." }), // Optional length validation
  password: z.string().min(1, { message: "Enter your password" }),
});

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="h-screen">
      <div className="h-full w-full flex justify-between items-center">
        <div className="flex-1 relative h-full bg-slate-500">
          <Image
            src={"/images/1.jpg"}
            fill
            alt="login image"
            className="object-cover object-center brightness-75"
          />
        </div>
        <div className="flex-1 h-full">
          <div className="flex flex-col px-[10%] justify-center w-full h-full">
            <h1 className="text-6xl">Login</h1>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 mt-10"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          className="placeholder:opacity-70"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type={showPassword ? "" : "password"}
                          className="placeholder:opacity-70"
                          placeholder="Enter your password"
                          {...field}
                        />
                      </FormControl>
                      {showPassword ? (
                        <Eye
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-2 bottom-2 cursor-pointer"
                        />
                      ) : (
                        <EyeClosed
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-2 bottom-2 cursor-pointer"
                        />
                      )}

                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <Button type="submit">Login</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

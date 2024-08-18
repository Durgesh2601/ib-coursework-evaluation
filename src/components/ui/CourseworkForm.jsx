"use client";

import { useState } from "react";
import FileUpload from "./FileUpload";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel } from "./form";
import { Input } from "./input";
import { Button } from "./button";
import { SELECT_FIELDS } from "@/constants";
import ButtonIcon from "@/assets/btn_icon.svg";
import Image from "next/image";

export default function CourseworkForm() {
  const [file, setFile] = useState({});
  const form = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-light-bg p-8 rounded-3xl shadow-lg mt-8 space-y-6 border border-light-border"
      >
        <FileUpload setFile={setFile} />
        <div>
          <FormLabel className="block text-secondary-text mb-2">
            Select your course & subjects
          </FormLabel>
          <div className="flex space-x-4">
            {Object.keys(SELECT_FIELDS).map((fieldKey) => (
              <FormField
                key={fieldKey}
                control={form.control}
                name={fieldKey}
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="w-full p-3 border rounded-lg">
                        <SelectValue
                          placeholder={
                            SELECT_FIELDS[fieldKey]?.placeholder || "Select"
                          }
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {SELECT_FIELDS[fieldKey]?.options?.map(
                          ({ value, label }) => (
                            <SelectItem key={value} value={value}>
                              {label}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            ))}
          </div>
        </div>
        <FormField
          control={form.control}
          name="essay_title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-secondary-text mb-2">
                Enter your essay title*
              </FormLabel>
              <Input
                className="w-full p-3 border rounded-lg"
                placeholder="Enter your essay title"
                {...field}
                onChange={field.onChange}
              />
            </FormItem>
          )}
        />
        <Button variant="outline" className="rounded-2xl pl-2" size="lg">
          <Image src={ButtonIcon} alt="button-Icon" className="mx-2" />
          Evaluate your Score
        </Button>
      </form>
    </Form>
  );
}

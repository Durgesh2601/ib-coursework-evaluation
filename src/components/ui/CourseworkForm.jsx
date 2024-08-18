"use client";

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

export default function CourseworkForm() {
  const form = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-3xl shadow-lg mt-8 space-y-6 border border-light-border"
      >
        <FileUpload />
        <div>
          <FormLabel className="block text-gray-700 mb-2">
            Select your course & subjects
          </FormLabel>
          <div className="flex space-x-4">
            <FormField
              control={form.control}
              name="coursework_type"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger className="w-full p-3 border rounded-lg">
                      <SelectValue placeholder="Select Coursework Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ia">IA Example</SelectItem>
                      <SelectItem value="ee">EE Example</SelectItem>
                      <SelectItem value="io">IO Example</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger className="w-full p-3 border rounded-lg">
                      <SelectValue placeholder="Select Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="physics">Physics</SelectItem>
                      <SelectItem value="chemistry">Chemistry</SelectItem>
                      <SelectItem value="mathematics">Mathematics</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="essay_title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-gray-700 mb-2">
                Enter your essay title*
              </FormLabel>
              <Input
                className="w-full p-3 border rounded-lg"
                placeholder="Enter your essay title"
                {...field}
              />
            </FormItem>
          )}
        />
        <Button variant="outline">Evaluate your Score</Button>
      </form>
    </Form>
  );
}

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
import { v4 as uuidv4 } from "uuid";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Input } from "./input";
import { Button } from "./button";
import { SELECT_FIELDS } from "@/constants";
import ButtonIcon from "@/assets/btn_icon.svg";
import Image from "next/image";
import EvaluationDisplay from "../EvaluationDisplay";

export default function CourseworkForm() {
  const [file, setFile] = useState(null);
  const [showEvaluation, setShowEvaluation] = useState(false);
  const form = useForm({
    defaultValues: {
      essay_title: "",
      coursework_type: "",
      subject: "",
    },
  });

  const onSubmit = (values) => {
    if (!file) {
      form.setError("file", {
        type: "custom",
        message: "File is required",
      });
      return;
    }
    const storedData = JSON.parse(localStorage.getItem("uploadedFiles")) || [];
    const newEntry = {
      ...values,
      file,
      id: uuidv4(),
    };
    storedData.push(newEntry);
    localStorage.setItem("uploadedFiles", JSON.stringify(storedData));
    // Dummy evaluation data
    const evaluationData = {
      file: file.name,
      overallScore: 85,
      date: new Date().toISOString(),
      scores: [
        { criteria: "Criteria A", value: 90 },
        { criteria: "Criteria B", value: 80 },
        { criteria: "Criteria C", value: 85 },
      ],
    };
    const evaluationResults =
      JSON.parse(localStorage.getItem("evaluationResults")) || [];
    evaluationResults.push(evaluationData);
    localStorage.setItem(
      "evaluationResults",
      JSON.stringify(evaluationResults)
    );
    setShowEvaluation(true);
  };

  return (
    <>
      {showEvaluation ? (
        <EvaluationDisplay
          fileData={file}
          setShowEvaluation={setShowEvaluation}
          setFile={setFile}
          reset={form.reset}
        />
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="bg-light-bg p-8 rounded-3xl shadow-lg mt-8 space-y-6 border border-light-border"
          >
            <FormField
              control={form.control}
              name="file"
              render={() => (
                <FormItem>
                  <FileUpload setFile={setFile} />
                  <FormMessage>
                    {form.formState.errors.file?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

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
                    rules={{ required: "This field is required" }}
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
                        <FormMessage>
                          {form.formState.errors[fieldKey]?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            </div>

            <FormField
              control={form.control}
              name="essay_title"
              rules={{ required: "Title is required" }}
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
                  <FormMessage>
                    {form.formState.errors.essay_title?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <Button variant="outline" className="rounded-2xl pl-2" size="lg">
              <Image src={ButtonIcon} alt="button-Icon" className="mx-2" />
              Evaluate your Score
            </Button>
          </form>
        </Form>
      )}
    </>
  );
}

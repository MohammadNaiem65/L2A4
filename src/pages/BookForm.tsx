import FormField from "@/components/shared/FormField";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { IBook } from "@/interfaces/book.interface";
import { cn } from "@/lib/utils";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { Form, useSubmit } from "react-router";

type FormValues = Omit<IBook, "_id" | "available">;

const GENRE = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
];

export default function BookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>();
  const submit = useSubmit();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    submit(data, { encType: "application/json", method: "POST" });
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto border p-4 shadow-lg rounded-sm"
    >
      <h2 className="text-2xl text-center mb-8">Book Details</h2>

      {/* Title */}
      <FormField
        label="Title"
        error={
          errors.title
            ? { message: (errors.title as { message?: string }).message }
            : undefined
        }
      >
        <Input
          {...register("title", { required: "Title is required" })}
          id="title"
          type="text"
          name="title"
          placeholder="Book title"
          className={cn(
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 block w-full p-2.5",
            errors.title &&
              "focus:border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500 focus:ring-red-500"
          )}
        />
      </FormField>

      {/* Description */}
      <FormField
        label="Description"
        className="mt-3"
        error={
          errors.description
            ? { message: (errors.description as { message?: string }).message }
            : undefined
        }
      >
        <Textarea
          {...register("description", { required: "Description is required" })}
          id="description"
          name="description"
          placeholder="Book description..."
          className={cn(
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 block w-full p-2.5",
            errors.description &&
              "focus:border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500 focus:ring-red-500"
          )}
        />
      </FormField>

      {/* Author */}
      <FormField
        label="Author"
        className="mt-3"
        error={
          errors.author
            ? { message: (errors.author as { message?: string }).message }
            : undefined
        }
      >
        <Input
          {...register("author", { required: "Author is required" })}
          id="author"
          type="text"
          name="author"
          placeholder="John Doe"
          className={cn(
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 block w-full p-2.5",
            errors.author &&
              "focus:border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500 focus:ring-red-500"
          )}
        />
      </FormField>

      {/* Genre */}
      <FormField
        label="Genre"
        className="mt-3"
        error={
          errors.genre
            ? { message: (errors.genre as { message?: string }).message }
            : undefined
        }
      >
        <Controller
          name="genre"
          control={control}
          defaultValue={GENRE[0]}
          rules={{ required: "Genre is required" }}
          render={({ field }) => (
            <Select
              onValueChange={field.onChange}
              defaultValue={GENRE[0]}
              value={field.value}
            >
              <SelectTrigger
                className={cn(
                  "w-full focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 rounded-sm bg-gray-50",
                  errors.genre &&
                    "focus:border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500 focus:ring-red-500"
                )}
              >
                <SelectValue placeholder={GENRE[0]} />
              </SelectTrigger>
              <SelectContent className="w-full">
                {GENRE.map((genre) => (
                  <SelectItem key={genre} value={genre}>
                    {genre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </FormField>

      <FormField
        label="ISBN"
        className="mt-3"
        error={
          errors.isbn
            ? { message: (errors.isbn as { message?: string }).message }
            : undefined
        }
      >
        <Input
          {...register("isbn", {
            required: "ISBN is required",
            minLength: { value: 8, message: "Invalid ISBN" },
          })}
          id="isbn"
          type="text"
          name="isbn"
          placeholder="xxxx-xxxx"
          className={cn(
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 block w-full p-2.5",
            errors.isbn &&
              "focus:border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500 focus:ring-red-500"
          )}
        />
      </FormField>

      <FormField
        label="Copies"
        className="mt-3"
        error={
          errors.copies
            ? { message: (errors.copies as { message?: string }).message }
            : undefined
        }
      >
        <Input
          {...register("copies", {
            required: "Copies is required",
            min: { value: 1, message: "Minimum value is 1" },
          })}
          id="copies"
          type="number"
          name="copies"
          placeholder="100"
          className={cn(
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 block w-full p-2.5",
            errors.copies &&
              "focus:border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500 focus:ring-red-500"
          )}
        />
      </FormField>

      <Button
        size="lg"
        type="submit"
        className="mx-auto mt-5 block px-6 bg-[#6366F1] border-2 border-transparent hover:bg-transparent hover:border-[#6366F1] hover:text-[#6366F1] cursor-pointer"
      >
        Submit
      </Button>
    </Form>
  );
}

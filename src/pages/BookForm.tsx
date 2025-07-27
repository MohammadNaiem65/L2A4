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
import { Form } from "react-router";

export default function BookForm() {
  return (
    <Form
      method="post"
      className="max-w-md mx-auto border p-4 shadow-lg rounded-sm"
    >
      <h2 className="text-2xl text-center mb-8">Book Details</h2>

      <FormField label="Title">
        <Input
          id="title"
          type="text"
          name="title"
          placeholder="Book title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 block w-full p-2.5 "
        />
      </FormField>

      <FormField label="Description" className="mt-3">
        <Textarea
          id="description"
          name="description"
          placeholder="Book description..."
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 block w-full p-2.5 "
        />
      </FormField>

      <FormField label="Author" className="mt-3">
        <Input
          id="author"
          type="text"
          name="author"
          placeholder="John Doe"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 block w-full p-2.5 "
        />
      </FormField>

      <FormField label="Genre" className="mt-3">
        <Select>
          <SelectTrigger className="w-full focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 rounded-sm bg-gray-50">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent className="w-full">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </FormField>

      <FormField label="ISBN" className="mt-3">
        <Input
          id="isbn"
          type="text"
          name="isbn"
          placeholder="xxxx-xxxx"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 block w-full p-2.5 "
        />
      </FormField>

      <FormField label="Copies" className="mt-3">
        <Input
          id="copies"
          type="number"
          name="copies"
          placeholder="100"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 block w-full p-2.5 "
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

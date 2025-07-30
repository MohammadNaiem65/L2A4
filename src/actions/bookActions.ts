import store from "@/app/store";
import apiSlice from "@/features/api/apiSlice";
import { redirect } from "react-router";

export async function postBookAction({ request }: { request: Request }) {
  const formData = await request.json();

  formData.available = true;

  store.dispatch(apiSlice.endpoints.postBook.initiate(formData));

  return redirect("/");
}

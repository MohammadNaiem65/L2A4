import store from "@/app/store";
import apiSlice from "@/features/api/apiSlice";

export async function postBookAction({ request }: { request: Request }) {
  const formData = await request.json();

  formData.available = true;

  try {
    const result = await store.dispatch(
      apiSlice.endpoints.postBook.initiate(formData)
    );

    if (result?.error) {
      return { error: result.error };
    }

    return result.data;
  } catch (error) {
    return { error };
  }
}

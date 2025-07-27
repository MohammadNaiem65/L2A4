import GenreSelector from "./header/GenreSelector";
import SortbySelector from "./header/SortbySelector";

export default function Header() {
  return (
    <div className="mb-10 py-4 border-b border-black flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Books:</h1>

      <div className="flex items-center justify-between gap-x-5">
        <GenreSelector />

        <SortbySelector />
      </div>
    </div>
  );
}

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router";

export default function GenreSelector() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentGenre = searchParams.get("genre") || "ALL";

  const GENRE = [
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY",
  ];

  const handleGenreChange = (value: string) => {
    const newSearchParams = new URLSearchParams(searchParams);

    // Remove page parameter to reset pagination
    newSearchParams.delete("page");

    if (value === "ALL") {
      // Remove genre parameter if ALL is selected
      newSearchParams.delete("genre");
    } else {
      // Set new genre parameter
      newSearchParams.set("genre", value);
    }

    setSearchParams(newSearchParams);
  };

  return (
    <div className="flex items-center gap-x-2">
      <span className="font-semibold">Genre:</span>

      <Select value={currentGenre} onValueChange={handleGenreChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="ALL" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ALL">ALL</SelectItem>
          {GENRE.map((genre) => (
            <SelectItem key={genre} value={genre}>
              {genre}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

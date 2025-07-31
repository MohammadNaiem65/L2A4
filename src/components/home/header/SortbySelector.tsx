import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router";

export default function SortbySelector() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSort = searchParams.get("sort");

  const handleSortChange = (value: string) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (!value || value === "all") {
      // Remove sort and sortby parameters if no value is selected
      newSearchParams.delete("sort");
      newSearchParams.delete("sortby");
    } else {
      // Set sort and sortby parameters
      newSearchParams.set("sort", value);
      newSearchParams.set("sortby", "copies");
    }

    setSearchParams(newSearchParams);
  };

  return (
    <div className="flex items-center gap-x-2">
      <span className="font-semibold">Sort By:</span>

      <Select value={currentSort || ""} onValueChange={handleSortChange}>
        <SelectTrigger className="w-[130px]">
          <SelectValue placeholder="ALL" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">ALL</SelectItem>
          <SelectItem value="asc">Stock (Asc)</SelectItem>
          <SelectItem value="desc">Stock (Desc)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

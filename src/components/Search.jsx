import { IconButton } from "@hope-ui/solid";
import { IconSearch } from "../icons/IconSearch";
const Search = () => {
  return (
    <form>
      <input type="text" placeholder="Search">
      </input>
        <IconButton
          variant="outline"
          aria-label="Search"
          icon={<IconSearch />}
        />
    </form>
  );
};

export default Search;

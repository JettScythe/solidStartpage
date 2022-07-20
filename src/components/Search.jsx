import {
  FormControl,
  FormLabel,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
} from "@hope-ui/solid";
import { formatSearchProviderURL } from "../helpers/formatters";
import { useSearchProvider } from "../helpers/SearchProvider";
import { IconSearch } from "../icons/IconSearch";
import { createSignal } from "solid-js";

const openTabSearch = (searchProvider, searchTerm) => {
  const searchUrl = formatSearchProviderURL(searchProvider);
  const url = `${searchUrl}${searchTerm}`;
  window.open(url, "_blank");
};

const Search = () => {
  const [searchTerm, setSearchTerm] = createSignal("");
  const [state, { setSearchProvider }] = useSearchProvider();
  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <FormControl>
      <FormLabel for="search">Search</FormLabel>
      <InputGroup>
        <Input id="search" type="search" onChange={handleInput} />
        <InputRightElement>
          <IconButton
            variant="outline"
            aria-label="Search"
            icon={<IconSearch />}
            type="submit"
            onClick={() => openTabSearch(state(), searchTerm())}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default Search;

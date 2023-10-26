import {
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


const Search = () => {
  const [searchTerm, setSearchTerm] = createSignal("");
  const [state, { setSearchProvider }] = useSearchProvider();

  const openTabSearch = () => {
    const searchUrl = formatSearchProviderURL(state());
    const url = `${searchUrl}${(searchTerm())}`;
    window.open(url, "_blank");
  };

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };
  
  return (
    <form onSubmit={openTabSearch}>
      <FormLabel for="search" color="#fff">
        Search
      </FormLabel>
      <InputGroup>
        <Input
          id="search"
          type="search"
          bgColor="$card"
          onChange={handleInput}
        />
        <InputRightElement>
          <IconButton
            variant="outline"
            aria-label="Search"
            icon={<IconSearch />}
            type="submit"
          />
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default Search;

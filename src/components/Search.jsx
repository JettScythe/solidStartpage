import {
  FormControl,
  FormLabel,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
} from "@hope-ui/solid";
import { IconSearch } from "../icons/IconSearch";

const Search = () => {
  return (
    <FormControl>
      <FormLabel for="search">Search</FormLabel>
      <InputGroup>
        <Input id="search" type="search" />
        <InputRightElement>
          <IconButton
            variant="outline"
            aria-label="Search"
            icon={<IconSearch />}
            type="submit"
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default Search;

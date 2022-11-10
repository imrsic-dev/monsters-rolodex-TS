import { ChangeEventHandler, ChangeEvent } from "react";

import './search-box.styles.css';

/*interface ISearchBoxProp extends IChangeHandlerProps {
  className: string;
  placeholder?: string;
}

interface IChangeHandlerProps {
  onChangeHandler: (a: string) => void
} */

/* interface ISearchBoxProps {
  className: string;
  placeholder?: string;
}

interface ISearchBoxProps {
  onChangeHandler: (a: string) => void;
}

type CanadianAddress = {
  street: string;
  province: string;
}

type USAddress = {
  street: string;
  state: string;
}

type NorthAmericanAddress = CanadianAddress | USAddress;

const Address : NorthAmericanAddress = {
  street: 'ads',
  state: 'ert',
  // province: 'tz'
}
 */

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  //onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ className, placeholder, onChangeHandler }:SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;

type AutocompleteProps = {};
const Autocomplete = (props: AutocompleteProps) => {
  return (
    <div>
      <input type="text" placeholder="Enter text" />
      <ul id="autocomplete-list" className="autocomplete-items"></ul>
    </div>
  );
};

export { Autocomplete };

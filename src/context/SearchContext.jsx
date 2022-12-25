import { createContext, useCallback, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearchControls = () => {
  return useContext(SearchContext);
};

export function ProvideSearchControls({ children }) {
  const [search, setSearch] = useState("");

  //   For throttling the change of the query
  const updateSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  const clearSearch = useCallback(() => {
    setSearch("");
  }, []);

  const filterItems = useCallback(
    (data = [], isSubmission = false) => {
      if (search.length === 0) return data;
      if (isSubmission)
        return data.filter((item) =>
          Object.values(item.data).join(",").includes(search)
        );
      return data.filter((item) =>
        `${item.name},${item.description}`.includes(search)
      );
    },
    [search]
  );

  const searchControls = {
    updateSearch,
    clearSearch,
    filterItems,
    search,
    setSearch,
  };
  return (
    <SearchContext.Provider value={searchControls}>
      {children}
    </SearchContext.Provider>
  );
}

import { useEffect, useState, useCallback } from "react";

const useAsync = (asyncFunction, initialValue = null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);

  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(() => {
    setIsLoading(true);
    setStatus("pending");
    setValue(initialValue);
    setError(null);

    return asyncFunction()
      .then((response) => {
        setIsLoading(false);
        setValue(response);
        setStatus("success");
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
        setStatus("error");
      });
  }, [asyncFunction]);

  return { isLoading, status, value, error, execute };
};

export default useAsync;

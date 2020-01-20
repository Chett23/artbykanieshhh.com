import { useEffect, useState, useRef } from "react";

export const useFetch = (url, options) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    return () => {
      // called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));
    fetch(url, { ...options })
      .then(x => x.json())
      .then(y => {
        if (isCurrent.current) {
          setState({ data: y, loading: false });
        }
      })
      .catch(err => setState({data: err, loading: false}));
  }, [url, setState, options]);

  return state;
};
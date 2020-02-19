import { useEffect, useState, useRef } from "react";

export const useFetch = (url, options) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    return () => {
      // called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true, error: null }));
    fetch(url, {...options})
    .then(x => x.json())
    .then(y => {
      if (isCurrent.current) {
        setState({ data: y.data, loading: false, error: null });
        }
      })
      .catch(err => setState({ error: err, data: [], loading: false }));
  }, [url, setState, options]);
  
  return state;
};
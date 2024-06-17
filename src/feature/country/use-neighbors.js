import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadNeighborsByBorder, selectNeighbors } from "./country-slice";

export const useNeighbors = (borders) => {
  const dispatch = useDispatch();
  const neighbors = useSelector(selectNeighbors);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorder(borders));
    }
  }, [borders, dispatch]);

  return neighbors;
};

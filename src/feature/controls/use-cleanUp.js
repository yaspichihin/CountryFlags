import { useDispatch } from "react-redux";
import { resetControls } from "./controls-slice";

export const useClearControls = () => {
  const dispatch = useDispatch();
  const ClearControls = () => dispatch(resetControls());
  return ClearControls;
};

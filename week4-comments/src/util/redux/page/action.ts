import { pageActions } from ".";
import { getComments } from "../comments/actions";
import { formActions } from "../form";

export const changePage = ({ pageIndex }: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(pageActions.change({ pageIndex }));
      dispatch(getComments());
      dispatch(formActions.solved());
    } catch (err) {
      throw err;
    }
  };
};

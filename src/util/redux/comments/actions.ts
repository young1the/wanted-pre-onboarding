import ApiService from "../../../util/axios";
import { commentsActions } from ".";
import store from "..";
import { pageActions } from "../page";

export const getComments = () => {
  const { commentPerPage, pageIndex, init } = store.getState().page;
  return async (dispatch: any) => {
    try {
      dispatch(commentsActions.changeStatus({ status: "LOADING" }));
      const response = await ApiService.getComments({
        _page: pageIndex,
        _limit: commentPerPage,
      });
      const comments = response.data;
	  const totalAmount = response.headers["x-total-count"];
	  if (!init) {
		  dispatch(pageActions.init({totalAmount}))
	  }
      dispatch(
        commentsActions.get({
          comments,
        })
      );
    } catch (err) {
      dispatch(commentsActions.changeStatus({ status: "ERROR" }));
    }
  };
};

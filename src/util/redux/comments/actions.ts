import ApiService from "../../../util/axios";
import { commentsActions } from ".";
import store from "..";
import { pageActions } from "../page";

export const getComments = () => {
  const { commentPerPage, pageIndex, totalAmount } = store.getState().page;
  return async (dispatch: any) => {
    try {
      dispatch(commentsActions.changeStatus({ status: "LOADING" }));
      const response = await ApiService.getComments({
        _page: pageIndex,
        _limit: commentPerPage,
      });
      const comments = response.data;
      const newTotalAmount = response.headers["x-total-count"];
      dispatch(
        commentsActions.get({
          comments,
        })
      );
      if (totalAmount + "" !== newTotalAmount) {
        dispatch(pageActions.init({ totalAmount: newTotalAmount }));
      }
    } catch (err) {
      dispatch(commentsActions.changeStatus({ status: "ERROR" }));
    }
  };
};

import ApiService from "../../../util/axios";
import { commentsActions } from ".";
import { TComment } from "../../../types/comment";

export const getComments = () => {
  return async (dispatch : any) => {
    try {
      dispatch(commentsActions.changeStatus({status: "LOADING"}));
      const comments = await ApiService.getComments();
      dispatch(
        commentsActions.get({
          comments,
        })
      );
    } catch (err) {
      dispatch(commentsActions.changeStatus({status: "ERROR"}));
    }
  };
};

export const createComment = (comment: Omit<TComment, 'id'>) => {
  return async (dispatch : any) => {
    try {
      const data = await ApiService.postComment(comment);
      dispatch(
        commentsActions.post(data)
      );
    } catch (err) {
      throw err;
    }
  };
}

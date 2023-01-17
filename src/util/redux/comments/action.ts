import ApiService from "../../../util/axios";
import { commentsActions } from ".";

export const getComments = () => {
  return async (dispatch : any) => {
    try {
      const comments = await ApiService.getComments();
	  console.log(comments);
      dispatch(
        commentsActions.update({
          comments,
        })
      );
    } catch (err) {
      throw err;
    }
  };
};

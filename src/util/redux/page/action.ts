import { pageActions } from ".";
import { getComments } from "../comments/actions";

export const changePage = ({pageIndex} : any) => {
	return async (dispatch: any) => {
		try {
			dispatch(pageActions.change({pageIndex}));
			dispatch(getComments());
		} catch (err) {
			throw err;
		}
	}
}

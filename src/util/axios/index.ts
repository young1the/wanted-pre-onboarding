import axios from "axios";

import { BASE_URL, PATHS } from "../../constants/api";
import { PARAMS } from "../../constants/page";

interface IApiService {
  postComment(data: any): Promise<any>;
  getComments(params: any): Promise<any>;
  getCommentById(id: string): Promise<any>;
  putComment(id: string, data: any): Promise<any>;
  deleteComment(id: string, data: any): Promise<any>;
}

type TParams = {
  _page?: number;
  _limit?: number;
  _order?: string;
  _sort?: string;
};

class ApiService implements IApiService {
  private axiosInstance = axios.create({
    baseURL: BASE_URL,
  });

  public async postComment(data: any) {
    try {
      const response = await this.axiosInstance.post(PATHS.comment, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async getComments({
    _page = 1,
    _limit = PARAMS.COMMENT_PER_PAGE,
    _order = PARAMS.ORDER,
    _sort = PARAMS.SORT,
  }: TParams) {
    try {
      const response = await this.axiosInstance.get(PATHS.comment, {
        params: { _page, _limit, _order, _sort },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  public async getCommentById(id: string) {
    try {
      const response = await this.axiosInstance.get(PATHS.comment + `/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async putComment(data: any) {
    try {
      const response = await this.axiosInstance.put(
        PATHS.comment + `/${data.id}`,
        data
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async deleteComment(id: string) {
    try {
      const response = await this.axiosInstance.delete(
        PATHS.comment + `/${id}`,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new ApiService();

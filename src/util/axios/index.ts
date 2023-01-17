import axios from "axios";

import { BASE_URL, PATHS } from "../../constants/api";

interface IApiService {
  postComment(data: any): Promise<any>;
  getComments(): Promise<any>;
  getCommentById(id: string): Promise<any>;
  putComment(id: string, data: any): Promise<any>;
  deleteComment(id: string, data: any): Promise<any>;
}

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

  public async getComments() {
    try {
      const response = await this.axiosInstance.get(PATHS.comment);
      return response.data;
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

  public async putComment(id: string, data: any) {
    try {
      const response = await this.axiosInstance.put(
        PATHS.comment + `/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async deleteComment(id: string, data: any) {
    try {
      const response = await this.axiosInstance.delete(
        PATHS.comment + `/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new ApiService();

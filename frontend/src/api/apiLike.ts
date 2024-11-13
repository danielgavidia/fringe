import axiosClient from "./axiosClient";

export const apiGetLikes = (userId: string) => {
  axiosClient.get(`/like/${userId}`);
};

export const apiAddLike = (fromUserId: string, toUserId: string) => {
  axiosClient.post(`/like/add`, { fromUserId, toUserId });
};

export const apiDeleteLike = (id: string) => {
  axiosClient.post("/like/delete", { id });
};
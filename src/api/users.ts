import { AxiosClient } from '../utils/http-client';
import { queryOptions } from '@tanstack/react-query';

type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
};

type Response<T extends any> = {
  message: string;
  payload: T;
};

type FindManyParams = {
  limit: number;
  offset: number;
};

export const findManyUsers = async ({
  queryKey,
}: any): Promise<Response<User[]>> => {
  const [_, params] = queryKey;
  const { data } = await AxiosClient.get<Response<User[]>>('/users/', {
    params,
  });

  return data;
};

export const usersQueryOption = (params: FindManyParams) =>
  queryOptions({ queryKey: ['users', params], queryFn: findManyUsers });

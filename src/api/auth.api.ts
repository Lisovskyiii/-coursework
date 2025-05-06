import { apiClient } from 'api';
import { ISignIn } from 'types/Auth.interface';

export const login = async (body: ISignIn) => {
  try {
    const response = await apiClient.post('/auth/login', body);
    return response.data;
  } catch (error) {
    console.dir(error);
  }
};

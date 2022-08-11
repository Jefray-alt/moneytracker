import axios from '../axios';

export const loginUser = async (email: string, password: string) => {
  const user = await axios.post('/user/login', { email, password });
  return user.data;
};

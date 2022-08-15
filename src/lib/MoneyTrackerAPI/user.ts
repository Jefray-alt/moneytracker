import axios from '../axios';

export const loginUser = async (email: string, password: string) => {
  const user = await axios.post('/user/login', { email, password });
  return user.data;
};

export const getloggedInUser = async () => {
  const user = await axios.get('/user');
  return user.data;
};

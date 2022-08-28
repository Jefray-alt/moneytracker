import axios from '../axios';

const routePrefix = '/token';

export const getAccessToken = async () => {
  const user = await axios.get(`${routePrefix}/access-token`);
  return user.data;
};

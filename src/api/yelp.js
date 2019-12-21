import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'BearerN0Q2RvlUaDH4axOLj-CBCuOqZG6yDW4fK3cu0_a58mi8ylAV10d2R0_j6OZ_5zU0qSm_H3gKgZ_CF-b4rqWarf6qhGVS8TtKUDie4tu2Cv5oIe1T-_gNcGBTxNrdXXYx',
  },
});

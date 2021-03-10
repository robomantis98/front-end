import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
  
    return axios.create({
      baseURL: 'https://172.105.156.24:3300',
      headers: {
        Authorization: token,
      }
    });
  };
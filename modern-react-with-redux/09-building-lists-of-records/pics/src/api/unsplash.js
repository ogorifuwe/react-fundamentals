import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID SEZfADTeZqgROdT1lpSAgHVUB7a73_hpbCTIauxNYwI'
  }
});

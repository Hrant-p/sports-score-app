import axios from 'axios';

export default (method, url, data) => axios({ method, url, data });

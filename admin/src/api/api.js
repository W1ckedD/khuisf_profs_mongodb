import axios from 'axios';

const token = localStorage.getItem('token');

export default axios.create({baseURL: "https://cors-anywhere.herokuapp.com/https://khuisf-profs.herokuapp.com", headers: {
    Authorization: 'Bearer ' + token
}});

import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers:{
    Authorization: 'Bearer MIA2Vgp-4cOO16rCTNoT3sahy7o7dDlEaTVwsPcs5OHQ0tM0MEmEc2wcnyFq8ksAhJDh-UrjpaRXiZPLROYp6Aa_7pZCxKEreU-0BsIBhX-NVCDARbUfBq4E6vnJXnYx'
  }
});


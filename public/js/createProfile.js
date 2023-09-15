import { fetchData } from './fetch.js';

document.addEventListener('DOMContentLoaded', () => {
  fetchData();
  createProfile();
});

function createProfile() {
  let user = JSON.parse(localStorage.getItem('user'));
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let website = document.getElementById('website');

  name.innerHTML = user.name;
  email.innerHTML = user.email;
  website.innerHTML = user.website;
}

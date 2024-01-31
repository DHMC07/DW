import axios from 'axios'
const Url = 'http://localhost:3001/api/locations'

export const getAll = () => {
  const request = axios.get(Url)
  return request.then(response => response.data)
}

export const get_locations = (local) => {
  const request = axios.get("https://maps.googleapis.com/maps/api/geocode/json?address="+local+"&key=AIzaSyCbE28kdcyFgj2wchjwMtS9j-SGbj2F72s")
  return request.then(response => response.data.results[0].geometry.location)
}

export const get_admin = () => {
  const request = axios.get('http://localhost:3001/api/admin')
  return request.then(response => response.data)
}

export const post_admin = (info) => {
  const request = axios.post('http://localhost:3001/api/admin', info)
  return request.then(response => response.data)
}



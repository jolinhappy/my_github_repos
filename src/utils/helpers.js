import axios from 'axios'

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
const baseURL = `${corsAnywhere}https://api.github.com/`

export const apiHelper = axios.create({
  baseURL
})
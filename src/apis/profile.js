import { apiHelper } from '.././utils/helpers'
const token = 'a9ac9298f651f7822b7bfc6823d0d41254fb06ce'

export default {
  getProfile() {
    return apiHelper.get('/users/jolinhappy', { headers: { Authorization: `Bearer ${token}` } })
  }
}

import { apiHelper } from '.././utils/helpers'
const token = 'a9ac9298f651f7822b7bfc6823d0d41254fb06ce'

export default {
  getRepos() {
    return apiHelper.get('/users/jolinhappy/repos', { headers: { Authorization: `Bearer ${token}` } })
  }
}

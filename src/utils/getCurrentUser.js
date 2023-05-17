export const getCurrentUser = async () => {
  let user = await axios.get(`${API_URL}/profile`)
  setCurrentUser(user.data)
}

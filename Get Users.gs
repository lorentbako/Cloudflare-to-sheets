function getUsers(account = credentials[0]) {
  const email = account.email
  const apiKey = account.apiKey
  const tab = account.tab
  const accId = account.accId
  const apiUrl = "https://api.cloudflare.com/client/v4/"

  let allUsers = [["Id", "Email", "2FA", "Status"]]
  const options = {
    method: 'GET',
    headers: {
      'X-Auth-Email': email,
      'X-Auth-Key': apiKey,
      'Content-Type': 'application/json',
      "Authorization": "Bearer " + apiKey,
    }
  }

  const response = UrlFetchApp.fetch(`${apiUrl}accounts/${accId}/members`, options)
  const data = JSON.parse(response)
  tab.clearContents()
  data.result.map(res => allUsers.push([res.id, res.user.email, res.user.two_factor_authentication_enabled, res.status]))
  tab.getRange(1, 1, allUsers.length, allUsers[0].length).setValues(allUsers)
}



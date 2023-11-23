function updateCurrentSheet() {
  const currentActive = sheet.getActiveSheet().getName()
  const current = credentials.filter(account => account.tab.getName() === currentActive)
  getUsers(current[0])
}

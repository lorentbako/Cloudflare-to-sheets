function onOpen() {
  SpreadsheetApp.getUi()
  .createMenu("Update")
  .addItem("Update All Accounts", "updateAll")
  .addItem("Update Current", "updateCurrentSheet")
  .addToUi();
}

# Cloudflare-to-sheets
Get details from cloudflare API directly into google sheets, using app script.
Functions that i have create on this project are for getin the users that you have gave access to your account, 
Get details like their id, email, 2fa activated or not, and if they have accepted your invitation.

My client was managing multiple cloudflare accounts so these functions also work if you have multiple cloudflare accounts, 
you can simply add the credentials in the credentials file, and remember to also create the sheet with the same name that you have added in the credentials file. 

updateAll() function updates all details for all accounts on all sheets
while updateCurrentSheet() updates only the users of the current account/sheet that you are curently on.

You can add all other endpoints that you need from cloudflare using the same logic.
If you need help feel free to contact me.

# Hephaestus PC React Firebase Login Flow

## Login Page
Login connects to Dashboard via the login button. Authenticates the user to log in. User login information is stored in the company database.

## Dashboard Page
Connects back to the login page via the sign out button.
Contains Sidebar, Appbar, and Panel sections.

- Appbar contains the navigation for the user's preferences and messages.
Functions:
1. Mail - messages to the user.
2. User - user profile.
3. Setting - preferences and site settings.

- Sidebar displays the controls the user has.
Functions:
1. All Products - displays all products. Default dashboard display.
2. Chassis - displays all the PC cases that the company makes and sells.
3. Cooling - displays all the cooling devices the company handles.
4. Other Parts - displays all other PC parts that the company sells.
5. Lighting - displays all PC-lighting products.
6. Add Products - Controls for the user to add a product to the database. Contains a preview section that can be used for product insertion.
7. Edit Products - Controls for the user to edit a product that's in the database. Also contains a preview section for the user.

- Panel displays the currently selected sidebar link.

## 404 Page
Catches users trying to access non-existing pages. And displays an error message that carries a link to return to the dashboard (if the user is logged in) and the login page if they're not.

## Known Issues
Some site functionality hasn't been created and is therefore unusable for now.
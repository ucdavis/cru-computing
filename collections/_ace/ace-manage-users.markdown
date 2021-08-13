---
title:  "Ace Manage Users"
description: How to manage users in ACE system
author: "Scott Kirkland"
date:   2017-04-06
---

![](https://i.embed.ly/1/image?url=http%3A%2F%2Fucdavis.github.io%2FACE%2Fimages%2Ffaq%2FAceManageUsersButton.png&key=afea23f29e5a4f63bd166897e3dc72df)

<iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1770401/sp/177040100/embedIframeJs/uiconf_id/29032722/partner_id/1770401?iframeembed=true&playerId=kaltura_player&entry_id=1_1wr2novs&flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_uz36qhy0" width="608" height="402" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player"></iframe>

## General Information

- Used to grant Administrative and User (staff) access to a Department in Ace.
- Should not be used to grant access to Instructors unless you want those instructors to have access to other instructor's evaluation results.
- The Admin role has all the permissions as the User role except it may also manage users.
- If you are an Admin, you may also remove your own permissions, so be careful.
- Tip: If you don't want the staff to make changes without being notified, first set them up as admins, have them set up the templates, then change their permissions to user. Otherwise you will get email notifications as they first get everything working properly.

## List of Existing Users

- This is the list of all the users who have access to the department. This does not include instructors which have access based on evaluations which they are a part of.
- From here you may add new users, edit existing user's information, and remove a user's permissions to the department.

## Add A User

- Click on the link 'Add Permissions"
- Enter the user's email address, kerb ID, or name.
- Note, if searching by their email, it must be the email associated with there kerb Id in the campus' LDAP servers.
- Click on the magnifying glass icon to search for the user.
- If multiple results are presented, select the correct one.
- If no user details are shown, you will not be able to add the user.
- Select the role.
   - Admin: May manage other users permissions. No email notification when changes to questions, etc.
   - User: Same access as Admin except to Manage Users, and some of the changes they make will generate an email warning to the Admin users.

## Change User

- Click on the Edit icon.
- You may change the user Name, email, and Kerb Id.
- Be careful as you may make the system inaccessible for them if you change their Kerb Id to something invalid.

## Delete User

- Click on the trash icon.
- Be careful not to remove your own permissions.

## Email Notifications

- When a non Admin user makes a change to the following, the Admin(s) will get an email notification.
- Department settings (excluding the default term)
- Templates (Create or edit)
- Edit the questions on an existing evaluation

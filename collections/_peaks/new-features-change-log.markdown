---
title:  "New Features and Changes"
description: "Stay up to date with all the new features and changes within PEAKS."
author: "Jason Sylvestre"
date:   2020-10-19
---

# New Features and Changes

## Oct 19, 2020
* A bunch of behind the scenes changes.
* Added a People Report

## Aug 31, 2020
* Many changes over the last couple months, some of which are:
  * Change the UI a little for the asset pages
  * Added a couple reports 
  * Added a new team permission for assigning docusign documents to users
  * We are still in the final testing process for docusign, so it isn't widely available yet. But it will be soon.
  * Opened up our API and documented it with swagger. To use this, you would need to generate and/or use an API code
  * Ability to run select Group report across multiple teams. Not if you need this configured, you need at least 1 departmental admin per team to approve it with a help ticket.


## Dec 3, 2019
* Bunch of little changes and performance enhancements. Most notable change is the Access tab's UI has been changed a little to make it more functional.

## Oct 21, 2019
* Equipment report attributes column is now in the format key=value,key=value,...

## Oct 17, 2019
* Added the user's email to the report "Items Pending Acceptance".
* Added export option to that report.

## Oct 10, 2019
* When adding Key Serials, provide error details if there is a problem. (Required field, number already exists, number too long).
* Behind the scenes improvements.

## Oct 1, 2019
* Added 2 new people categories:
  * Research
  * Postdoc
*  For CSV imports, if you specify a DateIssued before 1970, it will be changed to 1970 01 01 as a minimum date.

## Sept 24 - 27
* Added default sorting by name on people, equipment, access, keys, and spaces tables. people's names are now displayed as Last, First.
* Added filtering (Searching) on bigfix id
* On the person edit and create pages, the "Can't find who you are looking for?" action now opens up in a new tab.

## Sept 13 - 23, 2019
* Added Make and Model columns to the end user's "My Stuff" page for Equipment.
* More on screen notifications of successful actions and failures. These are temporary and go away after a short time.
* Added a confirmation dialog for when spaces are disassociated from spaces.
* Naming of columns is more consistent.

## Sept 12, 2019
* UI Enhancements
* Behind the scenes performance changes
* Ability to lookup the Bigfix Id by the computer name. If there is no bigfix Id, a Lookup link will appear next to the label. Click on this, enter the computer name and click Search. If it finds it, click on the gold computer name to populate the Bigfix Id.

## Sept 6, 2019
* The Equipment Types dropdown is now sorted alphabetically
* Added Tablet, Accessory, and Printer as Equipment Type choices

## Sept 5, 2019
* On the equipment details, next to the Bigfix Id, there is now a i icon for more information. This will lookup the Bigfix
info and display it.

## Sept 3, 2019
* We have changed how the "key" part of equipment attributes can be selected. Previously, you could type anything. Now we have a default of attribute keys that are system wide and the ability for the Departmental Admin to add more for your team.
* CSV imports of equipment can still use any key value, but there will be a warning message if one used isn't in the list.
* Existing data will not be changed, and if you edit equipment with a key that isn't in the list it will save as long as you don't modify the existing key.
* If it isn't found, it will be highlighted in red and will be removed when you click Go.
* The Departmental Admin can access the page to maintain the Team's Equipment Attribute Keys from the Admin menu.
* Current System wide Equipment Attribute Keys:
  * External Link	-- URL to more info
  * Hostname	-- Hostname	
  * IP Address	-- IP Address	
  * MAC Address	 -- Media Access Control Address	
  * Operating System	-- Operating System	
  * Owner	-- The person responsible for the equipment	
  * Phone Number	-- Phone Number	
  * Purchase Date	-- Date was purchased	
  * Purchase Identifier	-- External Order Identifier	
  * Service Tag	-- Service Tag
* CSV Import for keys has had a couple new fields added. KeyNotes, KeyTags, and SerialNotes. Note, the KeyNotes and KeyTags will only be applied for new "Keys" not the Key Serials (Physical Keys).
* Added "Special" as a choice for the Key Serial status. In combination with notes, this could be used to identify a key serial that is assigned to someone not in IAM. 
* Also added "Special" as a filter choice for the key's table. It will fall under the inactive filter as well.

## Aug 17 - 21, 2019
* CSV Import people can now update existing people in your team.
* Updated our date picker.
* Longer team names now display correctly on the choose team page.
* Added a "Make a Suggestion" link to the help page.
* Behind the scenes improvements.

## Aug 16, 2019
* CSV Import changes. Increased number of key value columns, BigfixIf Column, please see import page for details.

## Aug 14, 2019
* Default the Person's Title from IAM when a new person is added to a team
* Changed the CSV People import column name Title to OverrideTitle
* Added a Bigfix Id column to the equipment

## Aug 12, 2019
* Added a CSV Import for people.
* A Person Manager may access the People CSV import from the Admin Menu -> CSV Upload People
* A Departmental Admin may access the People CSV import from the Admin Menu -> CSV Imports or Admin Menu -> Bulk Load People

## July 29, 2019 -- Later in the day...
* Added filters to the Equipment list for Protection and Availability Levels.

## July 29, 2019
* Added 2 new dropdown fields to Equipment. Protection Level and Availability Level.
* These are visible when the equipment type is one of the following: 'Computer', 'Desktop', 'Laptop', 'Server', 'Cellphone', 'Device'
* Existing data that matches these types have been set to the minimal values (P1 and A1). You should review these and edit them as necessary.
* These two new fields are also on the CSV equipment import and are required for the types listed above.
* Protection Level:
  * P1
  * P2
  * P3
  * P4
* Availability Level
  * A1
  * A2
  * A3
  * A4
* Descriptions of these can be found here: https://security.ucop.edu/policies/institutional-information-and-it-resource-classification.html

## June 24, 2019
* Added a column to the Bulk Edit People page to show when the person was added (if value can be found). This could be useful to bulk delete people that were added in error. 
 
## June 12, 2019
* Updated the emails. Links are underlined, text updated.

## June 11, 2019
* Remember the number of rows selected on the Assets tables (People, Equipment, etc.). This uses local storage, so if you move to a new computer it will default back to showing 20 rows unless you change it again.
 
## June 5, 2019
* Moved the "+ Add People", "+ Add Equipment" Etc. buttons from the bottom left of the asset lists to the upper right so you don't have to scroll to the bottom to add assets.

## June 4, 2019
* Added "Desktop" and "Server" to the equipment types. Eventually we my remove the "computer" choice depending on usage.

## May 29, 2019
* Added a "Software" to the equipment types. Like "Card", this will hide the make and model.
* Fixed some confirmation dialogs what said "should" instead of "sure".

## May 2, 2019
* Hide Admin Asset tabs if the user doesn't have access. Admins always have access to at least the Person tab, so that will always show. A Key Master would see tabs for Person and Keys.

## April 25, 2019
* Granted Person Manager ability to bulk edit people.
* Changed around the admin menu a little to make it more clear what the actions are.
* Show a limited admin menu if someone only has the Person manager role.
* If you have access to multiple teams, you can now access them through the team dropdown.
* Added a Refresh permissions to the teams dropdown.
* Behind the scenes changes to improve performance.

## April 19, 2019
* Replaced the Admin side menu with a dropdown menu

## April 17, 2019 Inclusive changes
* Better campus User lookup. Will find people that have not set a display name.
* Added a sortable, search-able Supervisors column to the person asset page.
* On the person details page, moved the supervisor name under the contact details
* Fixed some reports that had bold column text
* Emails for workstations assignment now includes a link if they need to accept the assignment
* Bulk edit people in the team. This is currently limited to Departmental Admins. [Bulk Edit](/documentation/peaks/bulk-edit-people)
* On the workstation history and emails, show the room information.
* Fix duplication email notification.
* Added Key Reports and API feeds
* Default Person Category to Not Set
* Added a Person Manager role. This role allows admins who are not already a departmental admin to edit people in the team.
* Added Fields to the API People Feed
* Access Report and API Feed
* Equipment Report and API Feed
* Improved the PPS load of people to more accurately reflect the person's home department
* Workstations report
* Equipment Type search-able
* Updated informational text on the bulk load of people
 

## April 1, 2019
* Fixed issue with KeySerial (Physical Keys) history not being recorded.
* Changed Key Serials under keys so that they can be sorted and searched.
* Both the key code and serial are now displayed in the first column for improved searching if you have this whole value instead of just the serial portion.
* The list of key serials within a person has remained unchanged.
* As with other sorting of tables, you can click or shift click on the column headings to sort.

<a data-toggle="lightbox" href="/media/peaks/admin-keyserial-sorting.png">
![Key Serial Sorting](https://computing.caes.ucdavis.edu/media/peaks/admin-keyserial-sorting.png "Key Serial Sorting")
</a>

## March 26, 2019
* For Text Only emails (Non HTML) added more email details for Expiring and notification emails to more closely match what is in the HTML part of the emails. Most users will never see this part of the email, but it will be useful for those using old email readers.
## March 20, 2019
* Email for the feature below when people are added, removed, or reactivated.
* A new report for those actions.
## March 19,2019
* Ability to be notified by email when people are added, removed, or reactivated for a team.
* Currently, the email portion of this is still pending, but if you add an notification email the information will be gathered and emailed once that service is completed.
* The notification email may be specified in the Team Admin section:

<a data-toggle="lightbox" href="/media/peaks/admin-notify-email.png">
![Notification Email](https://computing.caes.ucdavis.edu/media/peaks/admin-notify-email.png "Notification Email")
</a>

## March 15, 2019
* Some behind the scenes fixes.
* Try to display the IAM users' name as well as the IAM id if they can't be saved when doing a bulk load.
## March 14, 2019
Happy Pi Day.
* Added Laptop and Cellphone to the choices for Equipment Types.

## March 7, 2019
* For Equipment CSV import, added Type and Notes columns. These are required columns, but the fields are optional.
* Also, a nicer error check if columns are missing from either the Key Import or Equipment Import.
* Expiring Items and Unaccepted Items report now correctly link to the correct items for Keys.

## March 5, 2019
* Trouble finding the org that is related to your space? No problem, we've added a building search to the page where you add orgs to your team. Just enter the building name, or part of the name and search. This will list all the building and departments in them with the org code that Facilities uses for that space. For here you can just click Add to add that org to your team.
* It is possible the org code that Facilities has for the space is no longer valid in KFS. Previously we would not have allowed this to be added as it is no longer valid, but now we check to see what is in the spaces as well and will allow an invalid org to be added.
## March 1, 2019
* Added a notes field to all asset types.
* For equipment, added a dropdown "type" field. If Card is selected, Make and Model will be hidden. The following choices:
  * Default
  * Computer
  * Device
  * Card
  * Industrial
  * Other
* If other choices are needed and useful, we are open to adding them to the list, but we don't want it to get too long.

## Feb 26, 2019
* Minor changes to the confirm asset assignment page (For the end user, not admins.)
* Changed around the Admin menu a little for Importing CSV files as we added the ability to import equipment.
* Added Ability to import equipment via a CSV file. It works in a similar way to importing keys.

## Feb 21, 2019
* Added a import results table that can be downloaded

<a data-toggle="lightbox" href="/media/peaks/admin-key-import-results.png">
![Key Import Results](https://computing.caes.ucdavis.edu/media/peaks/admin-key-import-results.png "Key Import Results")
</a>

## Feb 20. 2019
* Added an Equipment Attributes report. This can be used to list all the Key Value pairs for all the equipment in your team. It lists the key and all related values separated by a comma.

## Feb 14, 2019
* Added ability for Departmental Admin to import keys and potentially assign them by importing a csv file.
* A new choice is available from the Admin menu "CSV Import Keys"

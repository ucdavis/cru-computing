---
layout: documentation
title:  "New Features and Changes"
author: "Jason Sylvestre"
date:   2019-04-01 11:03:00
category: "peaks"
tags: "faq"
permalink: /faq/peaks/change-log
display-tag: Application Development
---

# New Features and Changes
## April 1, 2019
* Fixed issue with KeySerial (Physical Keys) history not being recorded.
* Changed Key Serials under keys so that they can be sorted and searched.
* Both the key code and serial are now displayed in the first column for improved searching if you have this whole value instead of just the serial portion.
* The list of key serials within a person has remained unchanged.
* As with other sorting of tables, you can click or shift click on the column headings to sort.

![Key Serial Sorting](https://computing.caes.ucdavis.edu/media/peaks/admin-keyserial-sorting.png "Key Serial Sorting")
## March 26, 2019
* For Text Only emails (Non HTML) added more email details for Expiring and notification emails to more closely match what is in the HTML part of the emails. Most users will never see this part of the email, but it will be useful for those using old email readers.
## March 20, 2019
* Email for the feature below when people are added, removed, or reactivated.
* A new report for those actions.
## March 19,2019
* Ability to be notified by email when people are added, removed, or reactivated for a team.
* Currently, the email portion of this is still pending, but if you add an notification email the information will be gathered and emailed once that service is completed.
* The notification email may be specified in the Team Admin section:

![Notification Email](https://computing.caes.ucdavis.edu/media/peaks/admin-notify-email.png "Notification Email")
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

![Key Import Results](https://computing.caes.ucdavis.edu/media/peaks/admin-key-import-results.png "Key Import Results")

## Feb 20. 2019
* Added an Equipment Attributes report. This can be used to list all the Key Value pairs for all the equipment in your team. It lists the key and all related values separated by a comma.

## Feb 14, 2019
* Added ability for Departmental Admin to import keys and potentially assign them by importing a csv file.
* A new choice is available from the Admin menu "CSV Import Keys"
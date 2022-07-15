---
title:  "DocuSign Documents"
description: "Send and track Docusign Documents."
author: "Jason Sylvestre"
date:   2021-03-22
---

# DocuSign:

First, please keep in mind that if you assign documents to be signed on the test site, they will actually send emails to that person.

## Adding your account to PEAKS
* You need to invite the PEAKS service account to your docusign account as just a regular "UC Davis Bulk Sender" role profile. This is done by clicking Add User in the admin portal and putting in caes-peaks-docusign@ou.ad3.ucdavis.edu . Then you need to notify us of this so we can click accept on our end.
* To notify us, please use the "Create Help Ticket" from the help menu from within PEAKS.
* The image below shows how to add the service account. You need to be an admin.

<a data-toggle="lightbox" href="/media/peaks/peaks-docusign-admin.png">
![Docusign](https://computing.caes.ucdavis.edu/media/peaks/peaks-docusign-admin.png "Docusign")
</a>

* To make it easier to share templates with our service account, you should also create a group and add our service account to that calling the group PEAKS so it is easy to find in docusign.
* If you don't create a PEAKS group in docusign, templates will have to be shared with caes-peaks-docusign@ou.ad3.ucdavis.edu directly.

## Roles
* A new role was added "Document Master"
* This role, in addition to the Departmental Admin, can assign available documents to be assigned to people in your team.
* This role also has access to the Documents Report

## Adding a document to your Team
* Before documents can be assigned to users for them to sign, they first have to have the template shared with our service account.

## Create and Share Docusign Template

<iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1770401/sp/177040100/embedIframeJs/uiconf_id/29032722/partner_id/1770401?iframeembed=true&playerId=kaltura_player&entry_id=1_uudw1sab&flashvars[mediaProtocol]=rtmp&amp;flashvars[streamerType]=rtmp&amp;flashvars[streamerUrl]=rtmp://www.kaltura.com:1935&amp;flashvars[rtmpFlavors]=1&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_5oqksl5i" width="580" height="360" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player"></iframe>

### The important bits:
* Do not fill in name or email, and do not add any more recipients.
* Role field must be signer . **IMPORTANT this is case sensitive. It must be signer**
* Click next to place the signature.
* You can also add date signed and the name.
* You can add as many "Initial" fields as needed. 
* You can change the subject and body of the email that gets sent to the person to sign.

## Assigning documents to be signed
* Admin must have either Departmental Admin or Document Master to assign documents to people to sign.
* The document template(s) must have already been shared with our service account.
* Documents can currently only be assigned to a person one at a time.
* Go to the asset page, find the person you want to sign a document.
* Click Details, and scroll down until you see the Documents area.
* Click "+ Add Document". The dropdown list can be used to select a different document if needed.
* Click Submit. This will have DocuSign email the person the document to sign.
* The status will get updated to Completed when the person signs the document. 


## Schedules
* If the person doesn't act on the document to be signed, they will get an email every 7 days as a reminder.
* Note! The email used is the email specified in the person details.

## Status
* There are several statuses. The import ones would be Completed, Declined, and Voided. Completed is the one that indicates the document has been signed.
* Status get updated in PEAKS when DocuSign call back into PEAKS.

## Reports
* There is currently only 1 report for Documents. It lists all the people who have documents that are not completed.
* For more details on what documents are not signed, you would need to click on the details link to ope up the person's detail page.

## Help page
* The help page will list anyone in your team with the Documents Master role for people in your team to contact directly about an documents they have been sent to sign.

## My Stuff
* Lists the person's documents. From there they can view them which will open up the DocuSign website.

## What to do if the user didn't get their email
* Have them check their junk mail and all that stuff.
* Confirm the email for the person is what PEAKS is using.
* Have them log into docusign directly with their email and it should be there. 
* And/OR
* Have them wait a week. Notifications will be sent out again after 1 week.
* You can alway recreate the document, but the unsigned one will stay on the system, eventually it will show as declined or voided if they take no action on it.
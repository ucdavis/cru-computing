---
title:  "DocuSign Documents"
description: "Send and track Docusign Documents."
author: "Jason Sylvestre"
date:   2020-09-02
---

# DocuSign:

First, please keep in mind that if you assign documents to be signed on the test site, they will actually send emails to that person.

## Roles
* A new role was added "Document Master"
* This role, in addition to the Departmental Admin, can assign available documents to be assigned to people in your team.
* This role also has access to the Documents Report

## Adding a document to your Team
* Before documents can be assigned to users for them to sign, they first have to be added to your team.
* Only Departmental Admins have access to add documents to your team.
* Removing documents from your team does not effect documents that have already been assigned to people in your team.
* To add a document to your team, navigate from the Admin menu to "Team DocuSign Settings"
* Click "+ Create New"
* From here, if you click "Show Instructions", it will display what you need to do in DocuSign to make your templates available to your team. There is also a short video below that shows what you need to do.
* Once you have the template id, copy-paste that into the TemplateId field. Make sure you give it a meaningful name so the person assigning it knows which one to choose.

## Create and Share Docusign Template

<iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1770401/sp/177040100/embedIframeJs/uiconf_id/29032722/partner_id/1770401?iframeembed=true&playerId=kaltura_player&entry_id=0_cn70libg&flashvars[mediaProtocol]=rtmp&amp;flashvars[streamerType]=rtmp&amp;flashvars[streamerUrl]=rtmp://www.kaltura.com:1935&amp;flashvars[rtmpFlavors]=1&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=0_cwzq0jzf" width="580" height="360" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player"></iframe>

### The important bits:
* Do not fill in name or email, and do not add any more recipients.
* Role field must be signer
* Click next to place the signature.
* You can also add date signed and the name.
* You can add as many "Initial" fields as needed. 
* You can change the subject and body of the email that gets sent to the person to sign.

## Assigning documents to be signed
* Admin must have either Departmental Admin or Document Master to assign documents to people to sign.
* The document(s) must have already been setup for your team by the Departmental Admin.
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
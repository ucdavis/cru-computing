---
title:  "Aggie Enterprise Updates"
description: "Updates needed to support the coming Aggie Enterprise changes in 2023"
author: "Jason Sylvestre"
date:   2023-10-03
---

## PrePurchasing FAQs about changes for Aggie Enterprise 

### What is Aggie Enterprise?
Aggie Enterprise is the new financial system that will replace KFS. It will be used for all financial transactions including purchasing, accounting, and reporting.

### When is the last date a purchase can be completed in KFS from PrePurchasing?
November 22, 2023

### When is the first date a purchase can be completed in Aggie Enterprise from PrePurchasing?
January 3, 2024 

### What if a purchase is needed between November 22, 2023 and January 3, 2024?
Use a P-card or Travel and Entertainment card when allowable.  Check with your department and the card program with questions or exceptions.
Use the Cutover Emergency PO Request process.


### What will happen to the Org Codes in PrePurchasing?
They will be frozen in place and continue to be used. Org Codes determine much of the permissions and order identifiers and can't be replaced with Aggie Enterprises departments.
If needed, submit a help ticket through the PrePurchasing help menu, and state which Org Code will be the parent, and suggest a 4 character Org Code and name. You will need to be a departmental admin for the parent Org Code.

### Will accounts continue to be synced?
No, KFS accounts will no longer be synced. KFS accounts will need to be replaced with Aggie Enterprise Chart of Accounts (COAs) in either the GL or PPM format.

### How do I know what COAs to use?
Your workgroup's admins should change the existing KFS accounts to the new COAs. There will be tools available to help with this process, but they will still need to supply some information.
The COAs will need descriptions in the workgroups. These can have the old KFS account in them if that will help your users.

### Quick video of how Admin can change KFS to COA

<iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1770401/sp/177040100/embedIframeJs/uiconf_id/29032722/partner_id/1770401?iframeembed=true&playerId=kaltura_player&entry_id=1_luv7yig9&flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_dnyfqma8" width="608" height="402" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="PrePurchasing Convert KFA account to Aggie Enterprise COA"></iframe>


### As a requester, can I pick my own COA to use if there isn't one in my workgroup?
Yes, you can use the built in COA picker button which will call the finjector app in a popup window. This lets you build a GL or PPM string for use in PrePurchasing. These can be saved in the finjector app for later use.

### Will external COAs (picking a COA outside the workgroup) route to an account manager outside of the workgroup?
No, this functionality from KFS will not be available in Aggie Enterprise. The PrePurchasing request will route to the account manager role associated with the workgroup.

### I heard that the ship to address has changed, what do I need to do?
You can enter a new ship-to address if the order is going to a campus location. There is new search functionality that will format that information in a way that will be usable by Aggie Enterprise.
If an invalid shipping address is used, or it can't be auto-converted when sent to Aggie Enterprise, a blank shipping address will be used and the Purchaser can perform the search or fill in a one-time or off-campus address in Aggie Enterprise.

### Are KFS vendors changing?
Yes! These will need to be updated to use the Aggie Enterprise vendor numbers when the order is sent to Aggie Enterprise by the purchaser. If this can't be auto converted, the purchaser will get an error message and need to add the correct vendor to the order.
The departmental admins can and should go into their workgroups to update and/or delete vendors that were created for KFS orders.
When picking a vendor (or supplier as they are called in Aggie Enterprise), there is now some extra information in addition to the address. The supplier site code, will have DF to mean Default. And PUR/PAY to indicate if it is for purchases or payments. only PUR ones should be used to complete orders in Aggie Enterprise from PrePurchasing.

<a data-toggle="lightbox" href="/media/screenshots/opp-ae-suppliers.png">
![AE Suppliers](https://computing.caes.ucdavis.edu/media/screenshots/opp-ae-suppliers.png "AE Suppliers")
</a>

### When can I start making these Aggie Enterprise changes?
We are planning to make these changes available as soon as the final data is available in Aggie Enterprise, which will likely be sometime in December 2023. 


### Are there any other changes we should be aware of?
Auto Approvals for KFS accounts will no longer be available for the very small number of workgroups that used this functionality.

## Updates and Enhancements
* 2022-08-23 Major behind the scenes change to update the code to the latest versions
  * Stats: 
    * 150 commits to source control
    * 1,646 files changed
    * 21,359 lines of code changed
  * Changes: 
    * Convert application from ASP.NET 4.x to ASP.NET Core 6.0
    * Upgrade third-party libraries from .NET Framework 4.x versions to .NET Standard/6.x versions
    * Substitute alternatives for third-party libraries that are no longer supported
    * Replace SparkPost library with built-in SMTP library for sending emails


## Planned Changes
* Support creating requisitions in the Aggie Enterprise in a similar way we do with KFS 
* Support new Chart of Accounts
* Update fields needed for the AE requisitions (These should be similar to the ones we use for KFS like Unit of Measurement) 

## Planned Changes 2023-05-19
* We expect that orders needed to be completed in KFS must be done before November 22, 2023. Otherwise they will need to be completed in Aggie Enterprise when it goes live January 1st 2024.
* Currently we are expecting external accounts to be completed by workgroup account managers. If it is an external account it will be noticeable.
* Sync accounts in the workgroup will no longer do anything and will eventually be removed.
* Delivery location information and vendor information will be pulled from Aggie Enterprise, but we will do our best to do this automatically until the departmental admins can update their workgroups.


---
title:  "Aggie Enterprise Updates"
description: "Updates needed to support the coming Aggie Enterpdrise changes in 2023"
author: "Jason Sylvestre"
date:   2023-10-02
---

## FAQs about changes for Aggie Enterprise

### What is Aggie Enterprise?
Aggie Enterprise is the new financial system that will replace KFS. It will be used for purchasing, accounting, and reporting.

### When is the last date an order can be completed in KFS from PrePurchasing?
November 22, 2023

### When will orders be able to be completed in Aggie Enterprise from PrePurchasing?
January 1, 2024 (Unless something bad happens :( )

### What will happen to the Orgs in PrePurchasing?
They will be frozen in place and continue to be used. Orgs determine much of the permissions and order identifiers and can't be replaced with Aggie Enterprises departments.
If needed, we may be able to add new orgs, but this functionality is not currently planned and would have to be manually completed.

### Will accounts continue to be synced?
No, accounts will no longer be synced. KFS accounts will need to be replaced with Aggie Enterprise Chart of Accounts (COAs).

### How do I know what COAs to use?
Your departmental admins should change the existing KFS accounts to the new COAs. There will be tools available to help with this process, but they will still need to supply some information.
The COAs will need descriptions in the workgroups. These can have the old KFS account in them if that will help your users.

### As a requester, can I pick my own COA to use if there isn't one in my workgroup?
Yes, you can use our built in COA picker which will call our finjector app in a popup. This lets you build a GL or PPM string for use in PrePurchasing. These can be saved in the finjector app for later use.

### Will external COAs route to an account manager outside of the workgroup?
No, this functionality from KFS will not be available in Aggie Enterprise. The account manager will need to be in the workgroup.

### I heard that the ship to address has changed, what do I need to do?
Ideally, you can enter a new ship to address if it is going to a campus location. There is a new search functionality that will format that information in a way usable by Aggie Enterprise.
If an invalid shipping address is user, or it can't be auto converted when sent to Aggie Enterprise, a blank shipping address will be used in Aggie Enterprise.

### Are KFS vendors changing?
Yes! These will need to be updated to use the Aggie Enterprise versions when the order is sent to Aggie Enterprise by the purchaser. If this can't be auto converted, the purchaser will get an error message and need to add the correct vendor to the order.
The departmental admins can and should go into their workgroups to update and/or delete vendors that were created for KFS orders.

### When can I start making these Aggie Enterprise changes?
We are planning to make these changes available shortly after the November 22, 2023 deadline for completing orders in KFS.


### Are there any other changes we should be aware of?
Auto Approvals for accounts will no longer be available to the 2 or 3 people that used this functionality.

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


---
title:  "Aggie Enterprise Updates"
description: "Updates needed to support the coming Aggie Enterprise changes in 2023"
author: "Jason Sylvestre"
date:   2023-05-19
---

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


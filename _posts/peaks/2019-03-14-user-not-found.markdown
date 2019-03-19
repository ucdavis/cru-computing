---
layout: documentation
title:  "User Not Found"
author: "Jason Sylvestre"
date:   2019-03-14 14:00:00
category: "peaks"
tags: "faq"
permalink: /faq/peaks/user-not-found
display-tag: Application Development
---

# What to do when you can't find a user
We lookup users with Campus's IAM service. Peaks requires users that have a valid value for the email and login id have in IAM
## General tips
* Try using their kerb Login Id instead of their email. Sometimes the email of record is different.
* Sometimes the information in the IAM service has not updated yet for a new user, typically this is a day or so. Waiting a day may solve the problem.
* You could try submitting a help ticket directly to IET help about the user.
* You could submit a help ticket to Peaks help, we might be able to figure out the problem without having to contact IET help ourselves.

## I tried to use the Bulk Load People
The Bulk load of people looks at the IAM ids in PPS. Some of these users may be in PPS but not actually active for the purpose of Peaks. You could ignore these.
If there are others, you can copy and paste the message returned listing those not found into a help ticket and we will try to see what is going on.
If possible, the name of the users not found will be displayed next to the IAM user id. This may help you decide if they actually need to be included.
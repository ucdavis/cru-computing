---
title:  "Mass Email Options"
description: "What the options do for Mass Email"
author: "Jason Sylvestre"
date:   2019-04-23
---

# This is FAQ is under construction and will change

# Mass Email Options
Mass emails get sent out twice a day. Once if the morning and once in the evening (5 or 6 pm). It is very much recommended creating any mass emails before 3pm that way if there are problems, the developers can prevent the emails from being sent. The email subject line should be included in any help requests of this nature.


![Mass Email Page](https://computing.caes.ucdavis.edu/media/commencement/mass-email.png "Mass Email Page")
## Template
You must choose the ceremony that the Mass Email will be for. It will try to use existing templates you have for the ceremony and default to a generic one if it can't be found.
It will also look at the students for that ceremony.
The template is optional.
### Ticket Petition Decision
### Notify Open Ticket Petition
### Remaining Tickets
### Electronic Ticket Distribution
When choosing this, you must also choose the Registered student population.


## Student Population
A note about students in Commencement. We have a nightly job that grabs students from banner that meet the minimum unit requirements for the ceremonies for that term. We also look at the graduation date so we don't pull students from all time.
If a student who does not meet these minimum requirements tries to access the site, we will also add that student.
The nightly job also checks banner to see if their units have updated.
A new set of students are created for each term so we have historical data.
If a student has walked prior to this in our system, they should be filtered out.
It is possible that a staff member who was a student, but walked prior to this system's creation may be added if they try to access the site.
### Eligible
Eligible students is the same of All Eligible except if filters students who have already registered for the ceremony.
### Registered
All students who are participating in the ceremony who have not canceled. 
### All Eligible
It first looks at the ceremony's majors. Then it grabs all the students with those majors for the ceremony's term code. This may include students who do not have enough units for a particular ceremony. Please see the info under "Student Population".
### Extra Ticket Denied



---
title:  "PEAKS Api"
description: "Information on PEAKS application programming interface."
author: "Jason Sylvestre"
date:   2019-01-30 16:25:17
---

## API Instructions:

* You need to have access to the departments API key, a Departmental Admin can provide this information. It is located in the Team Admin Settings and can be updated from there as well.
* Data returned is per team in PEAKS
* The examples below use a key that is no longer active.
* The page that lists the API key has the URL you would use. Select Team -> Administer Team -> API Code

## People Feed
peaks.ucdavis.edu/{team-slug}/Feed/TeamFeed/{api-code}

https://peaks.ucdavis.edu/caesdo/Feed/TeamFeed/e170f4e6-9770-426f-8e96-f90abfd40f38

## People with Workstations
peaks.ucdavis.edu/{team-slug}/Feed/TeamFeed/{api-code}?includeSpace=yes

https://peaks.ucdavis.edu/caesdo/Feed/TeamFeed/e170f4e6-9770-426f-8e96-f90abfd40f38?includeSpace=yes
---
title:  "PEAKS Api"
description: "Information on PEAKS application programming interface."
author: "Jason Sylvestre"
date:   2019-05-21
---

## API Instructions:

API Documentation my be found here:
https://peaks.ucdavis.edu/swagger/index.html


* You need to have access to the departments API key, a Departmental Admin can provide this information. It is located in the Team Admin Settings and can be updated from there as well.
* Data returned is per team in PEAKS
* The examples below use a key that is no longer active.
* The page that lists the API key has the URL you would use. Select Team -> Administer Team -> API Code


## The information below is Deprecated.

## People Feed:
peaks.ucdavis.edu/{team-slug}/Feed/TeamFeed/{api-code}

https://peaks.ucdavis.edu/caes-test/Feed/TeamFeed/69e3eef0-b89a-4627-aa6a-15f803912654

## People with Workstations: 
peaks.ucdavis.edu/{team-slug}/Feed/TeamFeed/{api-code}?includeSpace=yes

https://peaks.ucdavis.edu/caes-test/Feed/TeamFeed/69e3eef0-b89a-4627-aa6a-15f803912654?includeSpace=yes

## Workstations: 
peaks.ucdavis.edu/{team-slug}/Feed/WorkstationFeed/{api-code}

https://peaks.ucdavis.edu/caes-test/Feed/WorkstationFeed/69e3eef0-b89a-4627-aa6a-15f803912654

## Equipment: 
peaks.ucdavis.edu/{team-slug}/Feed/EquipmentFeed/{api-code}

https://peaks.ucdavis.edu/caes-test/Feed/EquipmentFeed/69e3eef0-b89a-4627-aa6a-15f803912654

## Access: 
peaks.ucdavis.edu/{team-slug}/Feed/AccessFeed/{api-code}

https://peaks.ucdavis.edu/caes-test/Feed/AccessFeed/69e3eef0-b89a-4627-aa6a-15f803912654

## Keys: 
peaks.ucdavis.edu/{team-slug}/Feed/KeyFeed/{api-code}

https://peaks.ucdavis.edu/caes-test/Feed/KeyFeed/69e3eef0-b89a-4627-aa6a-15f803912654

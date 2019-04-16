---
title:  "Ace Api"
description: "How to access the API for ACE"
author: "Jason Sylvestre"
date:   2019-01-16 16:25:17
---

## API Instructions:

* You need to have access to the departments API key, a Departmental Admin can provide this information. It is located in the Department Settings and can be updated from there as well.
* Data returned is per department in Ace
* The examples below use a key that is has been replace so they will not return data.

* api/instructor/termCode/{key}/{dept}/{instructorId}/{termCode}
https://eval.ucdavis.edu/api/instructor/termCode/78eb430f-7b4f-4096-8f44-8fa5f034b3d8/LAWR/jpknoll/201501

* api/instructor/termCode/{key}/{dept}/{instructorId}/{termCode}/{crn}
https://eval.ucdavis.edu/api/instructor/termCode/78eb430f-7b4f-4096-8f44-8fa5f034b3d8/LAWR/jpknoll/201501/99999

* /api/instructor/{key}/{dept}/{instructorId}/{startDate}
https://eval.ucdavis.edu/api/instructor/78eb430f-7b4f-4096-8f44-8fa5f034b3d8/LAWR/jpknoll/2015-01-01

* api/course/crn/termCode/{key}/{dept}/{crn}/{termCode}
https://eval.ucdavis.edu/api/course/crn/termCode/78eb430f-7b4f-4096-8f44-8fa5f034b3d8/LAWR/99999/201501

* /api/course/termcode/{key}/{dept}/{termcode}
https://eval.ucdavis.edu/api/course/termcode/78eb430f-7b4f-4096-8f44-8fa5f034b3d8/LAWR/201501

* /api/course/startDate/{key}/{dept}/{startDate}
https://eval.ucdavis.edu/api/course/startDate/78eb430f-7b4f-4096-8f44-8fa5f034b3d8/LAWR/2015-01-01

* /api/course/crn/{key}/{dept}/{crn}/{startDate}
https://eval.ucdavis.edu/api/course/crn/78eb430f-7b4f-4096-8f44-8fa5f034b3d8/LAWR/99999/2015-01-01

* /api/course/courseNum/{key}/{dept}/{courseNum}/{startDate}
https://eval.ucdavis.edu/api/course/courseNum/78eb430f-7b4f-4096-8f44-8fa5f034b3d8/LAWR/101/2015-01-01

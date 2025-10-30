---
title:  "Questions."
description: "Add questions to your question set."
author: "Jason Sylvestre"
date:   2020-07-31
---

# Questions

<iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1770401/sp/177040100/embedIframeJs/uiconf_id/29032722/partner_id/1770401?iframeembed=true&playerId=kaltura_player&entry_id=0_fttvzc0v&flashvars[mediaProtocol]=rtmp&amp;flashvars[streamerType]=rtmp&amp;flashvars[streamerUrl]=rtmp://www.kaltura.com:1935&amp;flashvars[rtmpFlavors]=1&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=0_n7j359cr" width="580" height="360" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player"></iframe>


## Overview

* Questions are added to Question Sets.
* Questions require a name.
* Questions require a question type.

## Question type

* A sample of the question type changes when you pick a different question type.
* Text Box is a simple 1 line entry field.
* Text Area is a multi-line entry field. It can be resized by the end user.
* Boolean is just a single check-box
* Radio Buttons are a list of choices where the end user can pick one of them. You add choices by clicking the + button under the options. Each option should have a value for the end user to pick.
* Checkbox List is similar to radio buttons except the end user can choose multiple values.
* Drop Down is a drop down list where the end user can pick a single value. Options are added the same as with radio buttons and checkbox lists.
* Date is a text box that has a Date Picker associated with it. It should be used with the date validator to ensure the end user doesn't change the date to something invalid.
* No Answer is a place where you can display information. I'd recommend using it only in transactional question sets. One possible use would be to display a coupon code for an early bird special discount. 

## Validators

* Not all validators can be used together or for different question types. If you choose something that ins't allowed you will get an error message indicating the problem when you try to create the question.
* Required means the end user has to enter something to be able to submit the registration.
* Email checks that the value entered is in the basic format for an email. We do not validate that the email exists.
* Url checks that the information entered is in a URL format (Basically just copy the wed page's address).
* Date checks that the information is in a date format. If used, it is better that this is used with the date question type.
* Phone Number checks that the information is in a phone number format. These can be kind of tricky depending what kind of number is entered. Our recommendation would be to avoid this validator where possible.
* Zip Code just does a basic format validation. If your end user it outside the US, this may cause problems.

<p><a href="/documentation/registration/question-sets" class="registration-tag"><i class="fas fa-arrow-left"></i> Previous</a> <a href="/documentation/registration/getting-started" class="registration-tag">Main Artice</a>  <a href="/documentation/registration/confirmation-template" class="registration-tag">Next <i class="fas fa-arrow-right"></i></a></p>
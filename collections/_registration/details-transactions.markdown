---
title:  "Details - Transactions."
description: "Actions you can take on the Details Transactions page."
author: "Jason Sylvestre"
date:   2020-09-22
---

# Transactions

<iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1770401/sp/177040100/embedIframeJs/uiconf_id/29032722/partner_id/1770401?iframeembed=true&playerId=kaltura_player&entry_id=1_mu4wipxb&flashvars[mediaProtocol]=rtmp&amp;flashvars[streamerType]=rtmp&amp;flashvars[streamerUrl]=rtmp://www.kaltura.com:1935&amp;flashvars[rtmpFlavors]=1&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_r3hp3s3r" width="580" height="360" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player"></iframe>


## Overview

* The Transactions tab shows you all the successful registrations for your event.
* There are indications of the quantity of the registration, the total amount, if payment by credit card was selected, if it has been fully paid, and if it is currently active.
* There are two actions you can take from this page. Details and Deactivate/Activate

## Details (New)

* If it is a credit card payment, and it isn't paid. Then this will show a link to the payment page. This could be used to provide a link to the end user if they lost it. *This should NEVER be used to pay for the end user. You are not allowed to enter credit card information for the end user. You are not even allowed to provide a device (laptop, phone, etc.) for the end user to enter credit card information.*
* It will list any checks that you or another admin have entered.
* It will list payment attempts by credit card by the end user.
* It will indicate if the payment attempt was done on the old system or the new one (Is CyberSource).
* If this was done with our new provider (CyberSource), Cleared indicates if we have moved the funds into your account. This can take a few days after the credit card payment was done.
* We do not tell you why a credit card attempt fails (because it can lead to abuse), but it is usually because of an address verification failure occurs. You may submit a help ticket to us to find out more but we will only help you directly, not the end user.

## Credit Card Status Codes:
* Old Touchnet Codes:
  * S = Success
  * C = Canceled
  * E = Error
* CyberSource Codes:
  * A = Accept - Success
  * D = DECLINE - Was declined, usually because of an address verification issue
  * E = ERROR - Some other error, we would have to investigate
  * C = CANCEL - User canceled the payment once it went to the CyberSource portal

## Deactivate/Activate

* Deactivate frees up this registration from the amount sold 
* It does not prevent payment.
* You can't deactivate a registration if it is paid.
* Activate just uses the amount sold.


<p><a href="/documentation/registration/coupons" class="registration-tag"><i class="fas fa-arrow-left"></i> Previous</a> <a href="/documentation/registration/getting-started" class="registration-tag">Main Artice</a> <a href="/documentation/registration/details-checks" class="registration-tag">Next <i class="fas fa-arrow-right"></i></a></p>
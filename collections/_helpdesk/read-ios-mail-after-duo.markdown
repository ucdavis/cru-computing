---
title:  "Read your email to iPhone/iPad after enabling Duo"
description: "Use this guide to read your Office 365 Mailbox to your iPhone or iPad after enabling Duo MFA."
author: "Steven Barkey"
date:   2019-01-25 08:01:17
---

<p>If you access your Office 365 Mailbox using an iPhone or iPad and you enable Duo on your UC Davis computing account, you will need to remove and readd the mailbox to your device after Duo is enabled on the mailbox, which generally takes about 15-60 minutes to process.</p>
<br />
<p>The instructions below will walk you through the process, but if you encounter any issues, please <a class="external-link" href="https://caeshelp.ucdavis.edu" target="_blank">create a Helpdesk ticket</a> for further assistance.</p>
<br />
<p>Confirm that Duo has been enabled for your Office 365 mailbox:</p>
<ol style="PADDING-LEFT: 30px">
  <li>Open a browser and go to <a class="external-link" href="https://user.uinform.ucdavis.edu" target="_blank">https://user.uinform.ucdavis.edu/</a></li>
  <li>Login with your full @ucdavis.edu email address and passphrase</li>
  <li>If prompted to authenticate with Duo, use one of your Duo devices to authenticate</li>
  <li>Click on the <b>DUO MFA</b> tab</li>
  <li>Confirm that "Current DUO MFA Status" shows "Enabled"
    <ul style="PADDING-LEFT: 20px">
      <li>NOTE: If "Current DUO MFA Status" shows "Disabled", wait until it shows "Enabled" before proceeding with the steps below.  The enable process can take 15-60 minutes to complete.</li>
    </ul>
  </li>
</ol>
<br />
<p>Remove your mailbox from your iPhone or iPad device:</p>
<ol style="PADDING-LEFT: 30px">
  <li>One your device, go to <b>Settings</b></li>
  <li>Select <b>Passwords & Accounts</b></li>
  <li>Select the existing UC Davis account</li>
  <li>Take note of which items are currently synced with your device</li>
  <li>Take note of what is configured for "Mail Days to Sync"</li>
  <li>Select <b>Delete Account</b> at the bottom</li>
  <li>Confirm the request to delete the account</li>
  <li>Restart the device</li>
</ol>
<br />
<p>Readd your mailbox to your iPhone or iPad device:</p>
<ol style="PADDING-LEFT: 30px">
  <li>One your device, go to <b>Settings</b></li>
  <li>Select <b>Passwords & Accounts</b></li>
  <li>Select <b>Add Account</b></li>
  <li>Select <b>Exchange</b></li>
  <li>Enter your full @ucdavis.edu email address in the "Email" field</li>
  <li>Enter a description for the account in the "Description" filed (eg. UC Davis Email)</li>
  <li>When prompted to Configure Manually or Sign In, select <b>Sign In</b></li>
  <li>Enter your full @ucdavis.edu email address and password, then click <b>Sign in</b></li>
  <li>If you Office 365 mailbox is protected with Duo, complete the Duo authentication request
    <ul style="PADDING-LEFT: 20px">
      <li>NOTE: if you do not get prompted for Duo, it may not be enabled on your account yet and you will have to complete these steps again after it is successfully enabled.  The enable process can take 15-60 minutes to complete.</li>
    </ul>
  </li>
  <li>Select which of the items you would like resynced to your device and select <b>Done</b></li>
  <li>Select the desired settings for "Mail Days to Sync"</li>
</ol>
<br />
<p>Please note, depending on your mailbox size and the setting you selected for "Mail Days to Sync", it can take a while for all the messages and other synced items to reappear on your device.</p>

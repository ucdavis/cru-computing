---
title:  "New Features and Changes"
description: "Stay up to date with all the new features and changes within Payments."
author: "Jason Sylvestre"
date:   2021-06-17
permalink: /documentation/payments/change-log
---

# New Features and Changes

## June 17, 2021
* Fixed an issue where a line item longer than 100 characters prevented an invoice from being saved with just a generic message.
* Increased max length to 500 characters, and you can no longer enter more that that maximum.

## April 12, 2021
* Some behind the scenes enhancements to emailing and logging.
* If you can mark an invoice as paid, you can now specify a reason that will display on the invoice history.

## Feb 5, 2020
* Coupons that expire now have the expiration date shows on invoices and emails so that it is clear to the payer that there could be a time limit.
* A coupon that was used, but now expired will show up on the admin invoice page with the discount amount.
* A coupon that expired before the payer paid will show up as -0.00 so that it is clear that it wasn't used before it expired.
* Totals will now show correctly for coupons that may or may not have expired.

## Dec 3, 2019
* Show the account used on the invoice.

## Oct 9, 2019
* Fixed some display issues caused by a prior change to make site more mobile friendly.
  * Pay button is now centered (previously the preview one was centered, but not the one the users pay with).
  * Invoice list takes up more room if the monitor is wide enough.

## Oct 7, 2019
* Changed how the download link in emails work. Previously, it would link to a browser page with the pdf in a small window because downloading directly from an email didn't work as expected. Now it will direct them to a download page where they can download the invoice and/or receipt if it has been paid. This looks much like the pay page.

## Oct 3, 2019
* Fixed issue preventing attachments from being added to an invoice.
* Coupon details now works (From the list of coupons where you create them)

## Sept 24, 2019
* Fixed the global team search.
* The search can use the invoice number or an email for the customer on the invoice
* Note there are different search boxes:

<a data-toggle="lightbox" href="/media/payments/global-team-search.png">
![Team Search](https://computing.caes.ucdavis.edu/media/payments/global-team-search.png "Key Serial Sorting")
</a>

## Sept 23, 2019
* When requesting a refund, a reason must be added.
* Reason will now display in the history of the invoice.
* The history of the invoice now show the person who made the action when available.

## Sept 10, 2019
* KFS Description of Funds Distribution and Processing Fee now have the Invoice number added
* Some behind the scenes enhancements

## Sept 17, 2019
* Fixed display of dates. Previously, dates were displayed in UTC. Now dates are displayed in Pacific Time.
* Updated when the expiration date for a coupon cuts off. The coupon will remain active until the end of the date that was entered.
* When viewing a sent invoice
  * The Invoice and Receipt icons on the buttons have changed to a download.
  * Clicking on this will download instead of trying to show the PDF in a browser window. (A small scrolling window in the browser was displayed).
* The list of invoices on the dashboard will display up to 1000 invoices. If you encounter performance problems with this page:
  * Let us know with a help ticket.
  * Try adjusting the filter in the mean time to show less records

## Prior to Sept 17, 2019
* Fixed the issue where sending invoices to multiple customers failed and they had to be individually sent.
* Other enhancements

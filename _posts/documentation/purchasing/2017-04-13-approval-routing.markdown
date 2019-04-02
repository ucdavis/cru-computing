---
layout: twocol
title:  "Approval Routing"
author: "Scott Kirkland"
date:   2017-04-13
category: "prepurchasing"
tags: "faq"
permalink: /faq/prepurchasing/approval-routing
display-tag: Application Development
---

## There are 3 main approval stages:

   - **Approver** (Typically the supervisor or PI approves this)
   - **Account Manager** (Typically the person who knows which account to use approves this)
   - **Purchaser** (The person that actually places the order approves/completes the order)

There may also be **Conditional Approvals**. A Conditional Approval is an extra approval that gets added at the Approver stage if the requester answers yes to the question for that Conditional Approval. A typical use for this would be, "Is this an IT purchase?", or "Is this Order more than $5000?". A Conditional Approval has a primary approver and may have a secondary approver. One of those 2 people must approve the order before in can move to the next stage.

At each stage, all the people who are assigned to that order as an approver must approve it for the order to move to the next stage.

If an order is directly assigned to someone, and they are away and it is not a conditional approval, then the order may be acted on by anyone in the workgroup with the same role as the current stage of the order.

## When a requester places an order they have several options:

   1. The simplest is that they choose a specific Approver and Account Manager

      a. They may choose from the list of all Approvers in the workgroup, or leave it blank so that any Approver in the workgroup can act on it.

      b. They may choose a specific Account Manger, or choose " *Any Workgroup Account Manager* " so that any Account Manager in the workgroup can act on it.

   2. They may pick a specific account to use for the order.

      a. If there is a person assigned to the chosen account in the workgroup, the order will route directly to them, otherwise it will route to anyone in the workgroup with the same role as the current stage of the order.

   3. They may search for and select an account that is not in the workgroup, but is in DaFIS.

      a. If they do this, the account manager in DaFIS for that account will be added as the Approver for the Account Manager stage.

      b. If there were no conditional Approvals for this order, the Approver stage will be bypassed and it will go directly to the Account Manager stage.

      c. Even if the Account Manager in DaFIS does not exist in our system, they will be given access to act on the order.

      d. Anyone who has edit access to the order can reroute the approval for the external account.

   4. They may split the order between 2 or more accounts (Either by the entire order, or by each line item).

      a. As with points 2 and 3 above, they may pick from the list of account in the workgroup or search from an account not in the workgroup.
      b. If there is at least 1 account chosen that is in the workgroup, there will be an Approval stage for the order and it will not go directly to the Account manager stage.

At each stage, anyone with edit access (those who can approve or deny the order) may edit the order. If any of the line items or accounts are edited, the routing will be recalculated.

When the order gets to the Account Manager stage and Purchaser stage, the Purchaser may be directly assigned, reassigned, or left as anyone in the workgroup who is a Purchaser.

If the current stage does not have a specific person assigned to it, anyone in the workgroup with the same role as the current stage may act on it, but once that is done the other people in the workgroup with that role may no longer act on the order. There is a special case where someone in the role in an Administrative group may act on it, but for more information on this we recommend taking our Departmental Admin training course.

## Auto Approvals:

   1. An auto approval may be created by an Approver for either a specific user or a specific account.
   2. It may be for an exact amount or an amount that is less than a certain amount.
   3. It may expire.

When an order is created and there is an auto approval that matches all the conditions, it will be marked as automatically approved by the approver who created the Auto Approval and move to the Account Manager stage.

An order may also be automatically approved if the Requester and the selected Approver are both the same person.

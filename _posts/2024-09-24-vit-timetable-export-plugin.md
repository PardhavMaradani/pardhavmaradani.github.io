---
title: VIT Timetable Export Plugin
date: 2024-09-24 00:00:00 +0530
tags: [javascript, chrome-extension, vit]
image:
  path: assets/img/vit-timetable-export-plugin.jpg
category: Misc
---

The timetable for students of VIT can be found in the Student VTOP app. I wanted to export this data displayed in the app / webpage so that it can be added to other Calendar applications.

I created a **Chrome Browser Extension** that allows exporting a VIT Timetable with a single click as an iCalendar (`.ics`) file. All the events are created as per the **'Academic Calendar'** for a given Semester, which includes extra instructional days (with specified day order), holidays and exam dates. Additional standalone `.ics` files can also be exported for **'Exam Schedules'** and **'Assignment Upload Schedules'**.

The exported `.ics` files can be imported into Google Calendar or any other Calendar application.

More details about how to install, run and how it works along with all the code can be found in my [vit-timetable-export-plugin](https://github.com/PardhavMaradani/vit-timetable-export-plugin){:target="_blank"} repository.

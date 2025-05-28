---
title: String Art
date: 2021-03-25 00:00:00 +0530
tags:
- art
- arduino
- electronics
- firmware
- hardware
- diy
image:
  path: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLt0RHaHgZqN3gBETw-QLJWdGd0_5Q7hBWLYJZz3ANopDNjTjHusv0HWzsr3cTDnBsK7Ss-ppt5a7qNFNif99F-8ZVAiVFVqAPefNCzuEtGJS0GhUGOiTiZnAmDUqYYe6ORJKzWMa3kmq1njLoNh3qS4PRJDdH_vdpgmturJTI5s3KBGqtkCjDKleXQvM/s1200/string-art.png
category: Misc
---

My younger brother [Pranav Maradani](https://www.youtube.com/@PranavMaradani){:target="_blank"} is interested in art. We wanted to try if we could create string art in an automated way. We chose the vertical orientation because it could potentially allow arbitrarily large sizes if needed.

The hardware setup consisted of the following: A RAMPS 1.4 board on top of an Arduino Mega. Two NEMA 17 (2.6 kg-cm single shaft 1.8 degree) stepper motors, two A4988 stepper motor driver modules, a GT2 open loop timing belt of 6mm width, two GT2-6mm belt width 60 teeth 5mm bore aluminium timing pulleys and NEMA 17 stepper motor connectors.

It was a DIY assembly with cardboards and here is how the setup looked like:

![ramps-board](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQii6XuXaQIZhAowBKZcFFV1ujnAM3HgQY_Dt2kBd5twU_-kVAzv-X-zlUcEhICKB4EujH9xDfeRcrzatF1yC7-HHjeRte_kfXsl89ulmeOspXhe1j0uVNIPoYxFps8HL2eGLhKwoZkQ5JoAmrnm4stMzHvkahLjaT4GPQd6ZRdUtC3nehtaD97Pp-U5U/s1918/ramps-board.jpg)
_A RAMPS 1.4 board on an Arduino Mega with two NEMA17 stepper motors_

We used [Makelangelo-firmware](https://github.com/MarginallyClever/Makelangelo-firmware){:target="_blank"} that came with an Arduino `.ino` file to program the RAMPS board. We used the corresponding Java based [Makelangelo-software](https://github.com/MarginallyClever/Makelangelo-software){:target="_blank"}. We had to make a few changes to get everything working in our setup. All the changes made can be found [here](https://github.com/PardhavMaradani/blog/tree/main/string-art){:target="_blank"}.

We started off with simple plotting by attaching a DIY pen setup. Here is an example of that:

![hilbert-curve-plotting](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzJLP8pyopGB7D48njeuEJDlEgfgiCqIoSDQV0TWxAY7ksV-Ftdqu35Qp-zTPBNjreB92-BQb2GX7zwAdE32qAZbxOHzWiikXZ5s4ZG6h-KGFVKqIEbZkylmqApudVwEc3LFP0wGzXUIPW740rDiFeDDCxrwBhfMUJzt2VRco_WfSnpEBkRN5ij7P5-jc/s1920/hilbert-curve-plotting.jpg)
_An attempt at plotting_

We then made a crude setup to use a string instead of a pen. Here is an example of a simple square grid:

![square-grid-strings](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDrLW2zpOk9SnUj0IS6i12orbi4lB7H1B9PTrcbE7hXarSSNsWABybuLjGL-aX3qs7tx8i50HLCFSM2W6OjbtA3r-ilh6WWH98oacxXDJL0ysHirum3FGO4hYDqBuNwAZ-G-jHTAw69tb1ERE8ROy9RcLN1xI0HUpu2qtdUNq0FhyphenhyphenzeH9kaiL2QTxmPm4/s1920/square-grid-strings.jpg)
_A simple square grid_

Here is an example of a geometric cardiod pattern that was stringed together using this setup:

![cardiod-strings](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgP5YbP5MGMlEdmXLfBEqGADsMxZJiPWcxLqRdxJR2n3p922tf1NRoysD_IC-n0TXDgA0Zasprc_n7qVvl6uQW0_-dU23bk7_KFgVGDMjiHfQ97bsg8-23hTPcnm5mC7QADRQDZcqbiUIL3QPOHMLAWk4xUY4sJf92Fur5pg3-LbEq3sQrXuvIsIxHNM9M/s1920/cardiod-strings.jpg)
_A geometric cardiod shape_

Here is a video showing the pen plotter in action (showing two different timeframes side by side):

{% include embed/youtube.html id='VYItDeNFjH0' %}

Here is a video showing the stringing of the simple square grid:

{% include embed/youtube.html id='2IE88BCy4Uo' %}

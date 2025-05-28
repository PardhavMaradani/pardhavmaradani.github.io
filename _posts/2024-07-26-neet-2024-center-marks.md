---
title: NEET 2024 Center Wise Marks Analysis
date: 2024-07-26 00:00:00 +0530
tags: [data, sql, javascript, webapp, sqlite, bootstrap]
image:
  path: assets/img/neet-2024-center-marks.jpg
category: Misc
---

For the first time in its history, NTA published the NEET Center-wise [data](https://neet.ntaonline.in/frontend/web/common-scorecard/index){:target="_blank"} for NEET(UG) 2024.

Similar to [JoSAA SQL Interface]({% post_url 2024-07-23-josaa-sql-interface %}){:target="_blank"}, I created a browser based SQL interface to access and explore this data at: [https://pardhavmaradani.github.io/neet-2024-center-marks/](https://pardhavmaradani.github.io/neet-2024-center-marks/){:target="_blank"}

The data for this had to be scraped from the NTA website to generate the CSV files and imported into an `sqlite` db. Details of this process are described [here](https://github.com/PardhavMaradani/neet-2024-center-marks?tab=readme-ov-file#about-the-data){:target="_blank"}.

All the code for this can be found in my [neet-2024-center-marks](https://github.com/PardhavMaradani/neet-2024-center-marks){:target="_blank"} repository.

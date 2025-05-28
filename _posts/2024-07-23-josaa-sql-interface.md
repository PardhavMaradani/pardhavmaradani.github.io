---
title: JoSAA SQL Interface
date: 2024-07-23 00:00:00 +0530
tags: [data, sql, javascript, webapp, sqlite, bootstrap]
image:
  path: assets/img/josaa-sql-interface.jpg
category: Misc
---

JoSAA (Joint Seat Allocation Authority) publishes the [opening and closing ranks](https://www.google.co.in/){:target="_blank"} for all IITs, NITs, Government funded technical institutes and IIITs - for the current as well as previous years.

I created a browser based SQL interface to access and explore this data at: [https://pardhavmaradani.github.io/josaa-sql-interface/](https://pardhavmaradani.github.io/josaa-sql-interface/){:target="_blank"}

I initially created a Chrome Extension to [export](https://github.com/PardhavMaradani/josaa-export-csv){:target="_blank"} JoSAA opening and closing rank data as `CSV` files. To make it easier for anyone, I put together all that data in a `sqlite` db and exposed it as a SQL Web Interface using [sql.js](https://github.com/sql-js/sql.js){:target="_blank"}. This requires familiarity with `SQL`, but allows all kinds of analysis and exploration of data using a standard interface.

All the code can be found in my [josaa-sql-interface](https://github.com/PardhavMaradani/josaa-sql-interface){:target="_blank"} repository.

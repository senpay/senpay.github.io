---
title: Feature test driven development
author: Alexander Pushkarev
date: 2022-04-15
category: Jekyll
layout: post
---

## Test automation pyramid. What it is all about?

Test automation pyramid (sometimes called "Test pyramid") is a concept coined by Mike Cohn. On the surface, it suggests that one should have more automated tests on unit-level than automated integration tests and even fewer end-to-end automated tests.

Indeed, many people think that the model suggests the "right" ratio of automated tests on different levels.

I believe this is a somewhat unhelpful way to think about this concept. I think the picture below is a better way to explain it.

I find it very helpful to think of testing as a risk management technique. There's an infinite amount of bugs in the system under test. Tests on different levels work as a 'filter'. We recommend relying on a small filter (unit tests) more because it is usually the most cost-effective way.

One could argue that not every bug can be detected by unit tests. That's true, but that becomes less of a problem if one designs software systems wisely.




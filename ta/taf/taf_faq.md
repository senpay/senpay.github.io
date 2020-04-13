##  Test framework architecture FAQ

#### What is the most popular test framework architecture?
The most used one in my experience is layered architecture. I think it is also a good place to start for a newcomer. 

#### Why three layers?
This is an empirical rule. In most contexts three layers seems to be the just enough layers of abstractions. It is not a hard rule though.

#### What are the alternatives?
I've seen quite good examples of a 2-layered architecture (here's a good example, here's a short post on that) and a Screenplay pattern (good intro here). Screenplay pattern is elegant and looks quite promising. There're some cases where no-architecture fits as well.

#### What is the best architectural pattern?
I think there's no "one-size-fits-all" or silver bullet solution. Each time different pattern may fit better and our professionalism is also defined by our ability to find a better solution for a specific context.  
That is also one of the reason why I keep Test Automation Architecture series - to collect patterns that I've seen so anybody can find something helpful for their particular case.

#### What is the difference between n-Layred/n-Tiered (or any other) architecture and POM?
POM is pretty low-level pattern that suggests to hide Selenium-touching code under the Page Object classes. Those Page Object classes provides higher level API that can be used elsewhere.  
There's a huge difference between architectural patterns and low-level structural pattern like POM. Architectural patterns suggests how we should structure whole Test Automation Solution. In contrast, POM scope is limited only to several classes.  
n-Layered/n-Tiered architectural patterns (as well as others) are not new and not here to replace POM. In contrast, they usually utilize patterns like POM on a lower lever of abstraction.  
Some more sources of information:
  * [Layered Architecture for Test Automation](https://www.infoq.com/articles/layered-test-automatation/)
  * [n-Tiered Test Automation Architecture for Agile Software Systems](https://www.sciencedirect.com/science/article/pii/S1877050914001045)
  * [What is test automation architecture]()

#### Why Page Object is a broken concept ([original post](http://aqaguy.blogspot.com/2017/08/the-broken-concept-of-page-object-or.html))?
It is not, actually. I am not a big fan of POM (Page Object Model), I prefer to use more generic Page Wrapper/Adapter instead. The reason I claimed that "POM is a broken concept" is because often we could invest more into system testability and use [no-architecture](taf_no_architecture.md).  
I can rephrase it *"If you have to create sophisticated test automation solution try to question your product architecture - it may be the case that investing into testability would be a more sustainable solution"*.
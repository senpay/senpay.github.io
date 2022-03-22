System-level test automation is usually brittle and painful. It is usually also the only test-automation approach people are aware of/interested in (for whatever reasons). Below are several suggestions on how one can make her/his system-level test automation at the Web UI level less painful and flaky.

#### 1. Retry failed steps
Each test consists of several steps. Unfortunately, those steps from time to time tend to fail with no apparent reason. Retrying a failed test step may prevent test from failing.

##### Helps with:

  * Unresponsive, slow UI/API/System;
  * Web Elements being shown with a delay;
  * Wrong moon phase. [1]

##### Drawbacks:

  * Sometimes it is just a waste of time, especially when the real issue is being "retried";
  * Even worse: sometimes it may hide real issue that would go away after some time or page refresh.

#### 2. Retry failed tests
From time to time - odds are just against you with a specific test run. Sometimes if you just rerun the problematic test – it will pass. Retrying the whole test is similar to the previous suggestion, but takes more time and helps more often.

##### Helps with:

  * Unresponsive, slow UI/API/System;
  * Web Elements being shown with a delay;
  * Wrong moon phase.

##### Drawbacks:

  * Sometimes it is just a waste of time, especially when the real issue is being "retried";
  * Even worse: sometimes it may hide real issue that would go away after some time or page refresh.

##### 3. Smart test results reporting
Not all failures are of the same importance. Some failures indicate minor bugs, some show that disaster has happened. If you sort failures smartly it won’t make your test run pass, but it will help you a lot with results investigation and getting valuable information about product quality (which is why we started this “automated testing/checking” in the first place). Also, it may be the case that all test failures were due to one/two issues, and sorting (for example by exception class) may help to understand a failure reason faster.

##### Helps with:

  * Finding what is wrong (or the biggest problem) when lots of tests had failed;
  * Sorting/Prioritizing issues using “minor” to “catastrophic” scale.

##### Drawbacks:

  * It would be necessary to implement this, or integrate solutions from the market, like Allure or Report Portal.

#### 4. Break complex test into several simple ones
When Google wanted to know where those flaky tests did come from [2] they found an interesting correlation between the test size and the probability it would be a flaky test. Lesson learned: the shorter you test is, the less likely it will be flaky or fail due to the wrong Moon phase. It turns out that when tests are smaller and shorter, they are also easier to understand, maintain and investigate.

##### Helps with:

  * Wrong Moon phase;
  * Scenarios which test too much (which is – more than one thing).

##### Drawbacks:

  * Sometimes it actually makes sense to have one big-uber test for a specific scenario, so this suggestion not always applicable. It is a heavily underused technique, though.

#### 5. Do Arrange/Assert on a level below UI
Quite often, the test case itself is short, but there're lots of additional steps required. For example - when you test a Log In form you need not only navigate to the form itself and fill it with the correct data, you also need to make sure that the required user was already stored in the user database. Usually, this preparation is done using UI as well, which is highly inefficient. Instead, one can do Arrange and Assert steps using API or even DB directly.

##### Helps with:

  * All pains of touching UI;

##### Drawbacks:

  * It requires knowledge of lots of things in addition to Selenium, but one would need this at some point anyway.

##### 6. Write as little Web UI tests as possible
Integrated tests are a Scam (as was nicely explained by J. B. Rainsberger) [3]. Web UI tests often are even bigger Scam. They don't force your design to be better. They don't help you with Emerging Architecture [4]. They don't emulate how the user will interact with your page (unless you think that user will really navigate elements using CSS classes and XPath). Automated testing does not really exist, it is not possible [5].  So, why not break the illusion and use more helpful techniques (like TDD) and better test levels (like unit test [6])?

##### Helps with:

  * All pains of touching UI;
  * Untestable, rigid architecture.

##### Drawbacks:

  * It requires knowledge of lots of things in addition to Selenium, but one needs this at some point anyway.


[1] Wrong Moon Phase - Russian idiom, means that something happened for a reason which is either too complex or too costly to identify  
[2] Google Testing Blog: Where do our flaky tests come from?: [https://testing.googleblog.com/2017/04/where-do-our-flaky-tests-come-from.html](https://testing.googleblog.com/2017/04/where-do-our-flaky-tests-come-from.html) 
[3] Integrated tests are a Scam - J. B. Rainsberger: [https://blog.thecodewhisperer.com/permalink/integrated-tests-are-a-scam](https://blog.thecodewhisperer.com/permalink/integrated-tests-are-a-scam)  
[4] Emergent Architecture - just enough, just in time: [https://www.agilealliance.org/resources/sessions/emergent-architecture-just-enough-just-in-time/](https://www.agilealliance.org/resources/sessions/emergent-architecture-just-enough-just-in-time/)  
[5] Automated testing is not possible - my takeaway from this excellent twitter thread: [https://twitter.com/noahsussman/status/1066461811669696514](https://twitter.com/noahsussman/status/1066461811669696514)  
[6] What are the differences between unit test, integration test and end to end test in automated testing? - J. B. Rainsberger: [https://www.quora.com/What-are-the-differences-between-unit-test-integration-test-and-end-to-end-test-in-automated-testing/answer/J-B-Rainsberger?ch=10&share=efcede70&srid=jbr](https://www.quora.com/What-are-the-differences-between-unit-test-integration-test-and-end-to-end-test-in-automated-testing/answer/J-B-Rainsberger?ch=10&share=efcede70&srid=jbr)
## Test automation framework architecture: Introduction

Sometime ago I wrote [this](https://huddle.eurostarsoftwaretesting.com/test-automation-framework-architecture-types/) post describing my understanding (at that time) of the architectures used to create test automation solution (framework). While there's some information I still agree with, my understanding has evolved and I want to share this understanding with others.

First, lets probably coin the terminology I use (which is not necessarily would be the right one - feel free to suggest something different).

#### Test automation framework
It is a [framework](https://en.wikipedia.org/wiki/Software_framework) that allows one to write automated tests. Usually one means the specialized framework, i.e. framework that is specialized for one or several related applications under test. *Framework does not include tests themselves.*

#### Test automation solution
It is is a complete solution used for test automation. It includes everything needed to perform automated test, including tests themselves. *Solution may be based on a framework, however it is not mandatory.*

#### Architecture
May be described as an imaginary model that dictates how code is of the *framework/solution* is structured and communicates between parts. Usually architecture is enforced by physical distribution of code parts, but not always.  
Once I was asked why we need an architecture. For me it was that obvious so I couldn't even articulate this properly. Among others thing, we use architecture to achieve these two things.

**Increase maintainability**  
First, we need to divide code parts that change often from those which change rarely. It is also has nice implication that understanding which parts are going to be changing fast influences your architecture choices. Also, breaking things into parts allows use to change them with better sense of safety

**Decrease complexity**  
The other thing is that dividing code into simple, digestible parts increases maintainability through simplification of things for the one who works on the code.

#### Most prominent test automation framework architecture types

   * [No architecture](taf_no_architecture.md)
   * [Layered](taf_layered.md)
   * Layered pluggable
   * Hexagonal


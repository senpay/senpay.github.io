# What is "testing"?

## Warning

It might occur that in this paper I somewhat contradict other papers I wrote. I might use some other terms differently. I don't see this as a problem - when we use words to describe a complex things we inevitably end up using and describing some kind of a model. We may use different models of the same thing for different purposes and in different contexts. This is fine and good.

## Background and context

It might be a little bit strange to discuss what is testing with testers. Wasn't it an obvious introductory question anyone who is more than a couple of days in the industry knows answer for?

I don't think it is the case, however. Some people were exposed to some kind of testing activities and think that it was "testing". Others read (or even learnt by heart to prepare for a certification) some definitions of testing and ready to accept them as true. Surprisingly, not so many testers are actively discussing what testing is or ready to challenge testing definitions. 

For example, if we take one of the most mainstream definition of testing one can easily find in ISTQB glossary [1]:
> *"The process consisting of all lifecycle activities, both static and dynamic, concerned with planning, preparation and evaluation of a component or system and related work products to determine that they satisfy specified requirements, to demonstrate that they are fit for purpose and to detect defects."*

Is there nothing an experienced would rightfully want to challenge? In my view, this definition manages to be overgeneric and still wrongly too specific at the same time! On the one hand, it unnecessarily does try to define possible test subjects and test  (basically). Or, rather, "undefine", as given definitions are generic enough to include almost everything (*"all lifecycle activities, both static and dynamic"*, *"component or system and related work products"*). On the other hand, it unnecessarily specifies and limits test goals and/or objectives (*"demonstrate fit for purpose"*, *"detect defects"*) to an extent they are neither valuable nor realistic.

I believe the only thing we can reliably learn from this definition would be that testing might be way too complex thing to be defined in one short paragraph.

Nevertheless, I find this testing definition, coined by James Bach and Michael Bolton (and consisting of just one short paragraph) much more valuable and accurate [2]:
> *"Testing is the process of evaluating a product by learning about it through experiencing, exploring, and experimenting, which includes to some degree: questioning, study, modeling, observation, inference, etc."*

My view on what testing is slightly different, but not to from the one above. The problem with my view is that I will struggle to condense it into a single paragraph.

## Longer (and, arguably, more accurate) definition of testing

As I have already mentioned, I will struggle to define "testing" in one single paragraph. However, I think I will be able to distinguish elements, that form a complex phenomenon, which is usually called "testing".

{{{Add mind map for elements !!!}}}

### Goals and Objective of testing

It does seem reasonable to assume that "testing" is something about two possible hypothesis about the product under test (let's leave the notion of "product under test" undefined for a moment). We can think of (at least) two possible hypothesis about the product:
  - Product does meet "fit for purpose" definition, whatever it is;
  - Product does not meet "fit for purpose" definition, whatever it is.

Now, which hypothesis is easier to prove or falsify? It would be great if it were a straightforward question; I would be happy to resort to a long-known cliche that it is not possible to prove absence of bugs. Even on the surface it does seem obvious that proving that product (or, anything, really) is "fit for purpose" is not feasible or even possible. It might be easier to find a way to falsify this hypothesis instead.

However, does it mean that the second hypothesis is different in this regard? While it might be easier to prove this one, it is much more difficult to falsify. At the end of the day, those hypothesis are just two different ways to pu the same thing. Product may either be "fit for purpose" or not. At any point of time it is one thing, or another. There's a possibility to prove that product is not "fit for purpose", which might be valuable information. However, this is not enough. At the bare minimum, those who make important decisions about the product need to have an idea about how likely product might be "fit for purpose".

And that is what testing objective is - to make a reasonable attempt to decrease this uncertainty. We usually do this by:
1) Looking for and identifying a risks for a product
2) Demonstrating that product can work under a particular circumstances

There're many risks to look for. It might be very helpful to define what "fit for purpose" for this product might be. At the very least, tester might suggest that not having an idea of what "fit for purpose" (or even "purpose") for this product -- is a huge risk by itself. There're many others. Each identified risk is **decreasing** the expected probability of product being "fit for purpose".

"Demonstrating that product can work" has somewhat of a bad fame, but it is valuable and important, as each demonstration **increases** the expected probability of product being "fit for purpose".

Any activity, either **decreasing** or **increasing** expected probability of product being "fit for purpose" is **decreasing** uncertainty, which is why we test.

### Testing activities 
To decrease the uncertainty we gather information about the product and the context. We learn and evaluate. We perform experiments and do backward engineering. We even can develop a product a special way which would help us to decrease uncertainty. We do lots of things.

Most would argue that not all of the activities that decrease uncertainty are testing activities. I think that conventionally "testing" would be limited to (often non-destructively) playing, evaluating and experimenting with some thing vaguely defined as "product". (I might have some difficulties with this part, as I saw how inefficient might be if we have different person doing conventional "testing" and conventional "development")

Traditional view on testing activities would involve things like planning (defining models and hypothesis, designing and preparing experiments), performing (experimenting and evaluating) and reporting (presenting findings). T

{{ Picture here with "test subject" (product), "fit for purpose" hypothethis and what activities we can do with it !!!}}

### Who should test the product
A common belief is that the one who writes the code is not the best candidate to test it. There's a solid logic behind this: person, who wrote the code would have a model of how one should use the application, what kind of input and output are legitimate, etc. One is not usually able to over confirmation bias (not without a particular mindset or training, at least)

If another person looks at the code and functionality, there's a good chance to have an impartial opinion. The other person usually would not have the same model or any model at all, which would create lots of learning opportunities. This is why Code Review and Pair Programming are so valuable techniques.

Now, unfortunately, this is often misunderstood as "I don't need to do my best to test the code I wrote"

I find this statement false. Why so? If I don't do my best to test the code I wrote - I just don't do my job properly, because I even don't care to check if the code might possibly fit into my very own model.

Long story short, what activities are forming "testing process" and who should perform those is a complex question, with, arguably, no right answer.

## Conclusion
Why it is important to define "testing"? Because we talk, think and make decisions about "testing" not always realising, what testing is. Sometimes our model of testing are completely wrong or borrowed from unreliable sources.

By doing this we do a misfavour for ourselves. At the end of the day, how can we be good in "testing", if we don't even know what "testing" is? Now, it is not impossible that in the particular organisation there's slightly different views on what testing is and what its objective (different models of testing). That is fine, it's all about models. But it does help to have those models defined, discussed and properly communicated. It also would not be too bad if we models that we have accross the industry are not too different. I hope this post will help you (and us) with this,  

## References (not formatted)
[1] https://glossary.istqb.org/en/search/testing
[2] https://www.satisfice.com/blog/archives/856
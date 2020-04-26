***Disclaimer:** While there's a difference between QA and Testing, for the sake of simplicity, on this page terms QA and Testing are used mostly interchangeably.*

Different organizations may mean different things when they speak of QA/Testing Strategy, but usually it is a high level document that would introduce information about how (and sometimes - why so) the project/product quality would be assured/controlled. Some organization would require a specific template to be used, but in most cases it is a free-style document.

Below is an example (on of many) of how QA/Tes strategy document may look like and what information it may contain.

<hr/>

# 1 General Information

## 1.1 Document objective

*This section explains why this document was created in the first place, for example: to adhere to a company/industry standard, to raise awareness, share knowledge, e.t.c. It would also include a brief overview of the information given in the document.*

***Why?** - this section is aimed to give an idea about is it relevant to reader at all*
 
## 1.2 Project

### 1.2.1 Project and project objective

*This section typically would have the information about:*

  *  *What is the project/product? (name, scope, budget, etc.)*
  *  *What is the general purpose of the project/product (what is the purpose of the project, what is the business domain/idea, competitive advantages)*
  *  *Any other relevant information (for example - technology stack)* 

**Why?** - this section introduces relevant terminology and business domain for a reader*

### 1.2.2 Architectural and business overview

*This section would typically include architecture and business information which can influence our QA-related decisions. Architecture decisions influence how we **can** test the application, while business information is essential for risk analysis.*


#### 1.2.3 Project development process

*This section would include important information about development environment - what kind of process is used (Agile vs. structured), information about development team, e.t.c.*

# 2 Quality assurance strategy

## 2.1 QA process objectives

*This section should include the objective of the QA process. That can be eliminating business/legal risks or adhering to a specific industry standard.*

*For instance, in the example below it is made clear that key characteristics would be delivery time, transparency and impact of possible business-critical issues:*

<hr />

From the highest level, QA process applied to the project should yield following results or assure following key characteristics:

  - Minimize impact and/or possibility of business-critical issues
  - Minimize feature delivery time
  - Provide clear feedback for all concerned parties about quality

<hr />

## 2.2. QA Approach/Strategy

*This section would include the explanation and the diagrams of the chosen QA approach. It would usually describe things on a high-level. It may also include information about the monitoring and assessment criterion (for example - Quality metrics gathered)*

## 2.3 QA activities
*This section can list what kind of QA activities are planned to be performed on the project, for example:*

QA process includes following activities:

  - Story review and analysis
  - Unit-testing
  - Code review
  - Acceptance-testing
  - E2E-testing
  - Performance, load and stress testing
  - Bug triage
  - Bug route-cause analysis

## 2.4 Defects
*This section would include information about defect types, severity and priority classification and examples. It may also give an action plan for different kind of defects (for example which defects are to be acted upon immediately and which should be treated as business-as-usual)*

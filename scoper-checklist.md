# Scope Review Checklist

> Note: There are exceptions to almost every rule here. If you have a good reason, it's possible that one of these checkboxes may not apply to you, but they apply to most, so they are good guideposts.

- [x] Project Title
    - [x] Has a title
    - [x] It's name doesn't change throughout the scope
- [x] Application Overview
    - [x] 2-5 Sentences explaining the application in non-technical terms
    - [x] Someone who has never heard of the application can start to picture what it does.
    - [x] Not a description of the problem is that it is solving (generally speaking, clients will know what the problem is)
- [x] Functional Requirements/Application Views
    - [x] Each view has a title
    - [x] Each view has bullets describing what it does
    - [x] Each view has a wireframe
    - [x] If there are buttons, it should be clear what each button does. This can be listed on the wireframe or as a bullet
        - [x] If a button takes a user to a different view, a bullet should call out the view name that it navigates to 
    - [x] If the view is only accessible to some users, it should be clearly described in a bullet
    - [x] Each view has a description of how users arrive there.
    - [x] Ideally, stretch goals that the user feels are likely should be included in the views and noted as stretch goals in a bullet 
- [ ] Project Schedule
    - [ ] At a minimum, each view should have a date associated with it
    - [ ] The schedule is broken into features -- that is, a feature is a chunk of functionality that delivers demonstratable value
    - [ ] Each feature should have an appropriate due date (if all dates are the same, that is not valid)
    - [ ] There should be at least one feature per day, if a feature will take longer than a day, it is too large and should be broken down
    - [ ] The schedule should support a working, demonstrable CRUD app complete on the Thursday of the first week of work
    - [ ] All Base Mode features should be complete on the following Thursday (the week before final presentations)
- [x] Browsers
    - [x] Only include browsers you will actually be testing
    - [x] Round up to the nearest whole number (ex Chrome 66, not Chrome 66.2384.239)
    - [-] If you are including mobile browsers, include the phone you are supporting as well
- [x] Database/Entity Relationship Diagrams
    - [x] Each table holds information about a _single Entity_
    - [x] Each table has attributes, describing properties of the Entity
    - [x] Everything shown in the wireframes is represented somewhere in the ERD
    - [x] All data in the ERD is represented in the wireframes
    - [x] Joins are used to describe one-to-many and many-to-many relationships
    - [x] Joined tables have `REFERENCE`'ing ids in the correct table
- [x] Review everything on every view. If it is not hard-coded it must be saved in the database.
- [x] Technologies
    - [x] All node modules installed with `npm install`
    - [x] Database
    - [-] File storage (Filestack, AWS, etc)
    - [x] CSS library/framework
    - [x] Deployment technologies (Heroku)
- [ ] Stretch/Future Goals
    - [ ] Should include feature title and brief description
    - [ ] Should take several months of full time effort to complete

## Final Pass

- [ ] All instructions in the scope are removed. It should no longer say things like: _This section should be short. Most of the details should be included in the views section._
- [ ] Is this actually reasonable?
    - [ ] Will CRUD be complete within a week?
    - [ ] Can base mode be completed on time for presentations?
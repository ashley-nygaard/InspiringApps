
# InspiringApps Logo Challenge

A web based tool that allows the user to drag colored dots and test their ability and knowlege about InspiringApps Logo.
Each dot belongs in only one space. If the dot is placed incorectly, it should be rejected.
The user should be able to click the RESET button at any time to restore the dots to their original position.


## Demo

[DEMO](https://ashley-nygaard.github.io/InspiringApps/)


## Notes and Approach

Based on the prompt, I'll stay away from using a framework. 
I'd usually opt for using Angular because so many things are built out for you already. However as this is a rather small feature list, we can use pure JS and DOM. 

Also while staying away from framework, we will avoid JQuery as well.
I'll use pure DOM elements, eventHandlers and APIS. 

## Resources
My go to is always MDN: https://developer.mozilla.org/en-US/docs/Web/API
Quick way to referece APIs you don't use on a daily basis, aka Drag and Drop.

## Starting and Continuing Thoughts
Keep the project as small as possible. There is no need for external dependencies. 
Breaking the problem down:

We know we have 5 dots and 1 large logo. Start with put the dots inline.
Each dot is an image and should have the alt text for ADA.

Because we want to drag and drop images onto another image, the large logo cannot be an image tag. 
I'll use background image instead. 

Since we don't need a lot of custom functions we can use [Drag and Drop](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) to reference the different attributes a draggable element should have, versus where the element can be placed. 

We can use a bunch of the APIs right out of the box without heavy customization at this time.

Once everything was on the page and basic functions were set up, I started to narrow down where an elemenet could be dropped.

I originally started using flex to create a grid over the image in order to determine where the user was and where I wanted a dot dropped. 
This was not the right approach for me as the dots are not set up in a grid fashion and there would be so many cases to determine where the user was and how close to the correct dot they were. Although it is possible, and it's a solution, I decided to go another direction.


I then thought, it would be nice to have this as a Sprite so I could index the images and know exactly where they are and have it be more responsive. 
I didn't go with the sprite. 


I then decided, to use the positions of each of the logo circles to determine placement. 
After getting the drop working, added in the check to determine if the element ID in the event handler matched color specified it should be.
If it was correct, drop is successful. Otherwise, rejected.

After I finished all steps required, I added in a nice message to kick off the user starting the challenge.
Then added in a helpful text if the user was incorrect or when it was completed. 
Reset, was then included to restart the challenge. 

There are so many additional ways to solve this and features that could be added. 
Overall it was fun and a good refresher to the built in APIs I don't use everyday.

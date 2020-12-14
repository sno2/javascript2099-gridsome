---
title: Build a Progress Bar
---

## Summary

From each and every YouTube video to every single music player, progress bars are everywhere! What you may not realize is how they function and how data works to alter and change them.

After working your way through this small tutorial, you will have an understanding of how a basic progress bar works. With that information, you can create a surprisingly wide array of handy things to add to your webpages.

## Html

```html
<button id="activate-progress-button" class="activate-progress-button">
  Activate
</button>

<div id="static-progress-bar" class="static-progress-bar">
  <div id="moving-progress-bar" class="moving-progress-bar"></div>
</div>
```

The first thing you want to do is create a button that will activate the progress bar.

Next create a DIV that will serve as the "static-progress-bar". Try to think of this as a container that is going to be filled with the liquid of the moving progress bar.

Create a DIV for the "moving-progress-bar" and place it inside the DIV you created in step 2. Try to think of this as the liquid that will be filling up the "static-progress-bar" container.

## Css

```css
.static-progress-bar {
  position: relative;
  background-color: #000;
  height: 40px;
  width: 180px;
}

.moving-progress-bar {
  position: absolute;
  background-color: #ec4899;
  height: 40px;
}
```

Next will come the styling of the components. While you can style the button and progress bars however you would like, there are a few things that are needed in the CSS to get the progress bars to function properly.

The first thing you want to is style the "static-progress-bar." There are 4 elements that you will want to populate here, position (relative), background-color, width, and height.

The position of relative will come into play when you set the position of the "moving-progress-bar" in the next step. Think of the position of "relative" as the land a building is going to built on. When you set the position of "absolute" in the next step, think of it as what is going to be built on that land.

Note: The progress bar will actually still function without a background color but it does look much better when you assign one.

Next you will need to style the "moving-progress-bar." There are also 3 elements that you have to populate here, the position (absolute), background-color, and height.

The position of "absolute" is what is being placed on the position of relative from step 1. The only thing you want to exclude is the width as that will be what is being changed in the JavaScript. Think of the "relative" container being empty, and the width from the "absolute" is what is going to fill it up.

What you also want to do here is set a background-color but make sure it is different from what you used for the "static-progress-bar."

Keep the height the same as what you used in step 1.

## JavaScript

```js
const activateProgressButton = document.getElementById(
  "activate-progress-button"
);
activateProgressButton.addEventListener("click", () => {
  const movingProgressBar = document.getElementById("moving-progress-bar");
  let width = 0;
  const progress = setInterval(percentage, 20);
  function percentage() {
    if (width >= 100) {
      clearInterval(progress);
    } else {
      width++;
      movingProgressBar.style.width = width + "%";
    }
  }
});
```

The first thing you need to do is tell the browser what to look for to activate the progress bar code. In this case it would be button. We will use the ID of "activate-progress-button" to grab the button and set it to the variable of activateProgressButton

Now we need to tell the browser to listen for a click on the button. We will do this by using addEventListener on the variable of activateProgressButton. This will lead directly into us passing a function into that click.

Now assign the "moving-progress-bar" to a variable of MovingProgressBar. This will be the progress bar that will be modified by the JavaScript.

Now we are going to take the property of width and set it to 0. Make sure to set this to "let" because it will need the ability to change.

The most important part of the JavaScript is setting the Interval. setInterval will call a JavaScript function at a timed Interval. If you look at step 5, you will notice that I have assigned setInterval(percentage, 20) to a const variable of progress. The percentage in setInterval is the name of the function that will we be calling, and 20 means we will be calling "percentage" every 20 milliseconds.

The last thing we need to code is the percentage() function. I'll go through it line by line.

On the first line of step 6 we are creating the function. This will lead into us declaring an IF statement that will be comprised of 2 separate outcomes. The first outcome is if the width variable from step 4 reaches 100. If this happens, it will clear the interval from step 5 because it has completed.

The second outcome is the ELSE statement and this will be what causes the progress bar to grow. What activates this ELSE is if the IF statement is not true. If the width is not yet 100 the next 2 lines will run.

The first of these 2 lines will cause the width to increase by 1 every interval. The second line will alter the width of movingProgressBar variable that we assigned in step 3. This will use the current value of "width" and by using concatenation we will convert that to a percentage.

Congratulations! You should now have a fully functional progress bar! I have some future projects in mind that will expand on this concept, so keep checking back!

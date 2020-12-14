---
title: Build a Modal
---

## Summary

Modals! You see them every single day on the Internet and you might not even realize it. They're the fancy little overlay that pops up when the website wants you to focus on something specific. They are often used in a way to get you to sign up to a newsletter or something annoying like that, but they can also be used in many useful ways.

If you haven't yet, click the "ACTIVATE MODAL" button above to see a quick example then we will get started!

## Html

```html
<div id="modal-showing" class="modal-showing">
  <div id="modal-container" class="modal-container">
    <div class="modal-navbar">
      <button id="modal-close-button" class="modal-close-button">X</button>
    </div>

    <div id="modal-content" class="modal-content">
      You can put whatever you want here. I put an SVG of an exclamation mark
    </div>
  </div>

  <button id="open-modal-button" class="open-modal-button"></button>
</div>
```

The HTML for a modal is pretty straight forward but what matters is where you place it. In this example, I have hardcoded it to the HTML but when you get a little more experienced at JavaScript, you will be able to generate a modal on the fly through the use of appending it to the document. Let's keep it easy for now and we will eventually get to the more complicated stuff later.

The location of the code above should be at the top of the document, just under the body tag. If this is inside any other DIV, the modal will only cover that section.

Create a DIV that will house the overlay. This will what is placed on top of everything when the button you assign to opening is clicked.

Create a DIV that will house the modal. In the CSS you will assign the size and the positioning of where it will appear on the screen.

This DIV houses the pink navigation bar with the X close button inside of it. In the example I used an SVG for the X button. You can pretty much use anything you want as long as it fits in the container.

This DIV contains the content for the modal. In my example I used an SVG of an exclamation mark but you can use whatever you would like.

This is the button or whatever you would like to activate the modal. I suggest an actual BUTTON element due to the benefits of accessibility. You can place this wherever you would like on your document.

## Css

```css
.modal-showing {
  display: none;
  position: fixed;
  background-color: rgba(0,0,0,0.6);
  height: 100%
  width: 100%
  z-index: 1;
}

.modal-container {
  position: absolute;
  width: 300px;
  top: 20%;
  left: calc(50% - 150px);
  background-color: black;
  color: #EC4899
  border: 1px solid #EC4899;
}

.modal-navbar {
  background-color: #EC4899;
  height: 40px;
}
```

There are a few important things that will need to be set in the .modal-showing class. This is what will be shown when you click the button to activate the modal.

The first would be having a display of none showing. This basically tells the browswer that you do not want this show on default. What I do suggest is commenting this out to work on the modal so you can actually see what you are doing. Reactivate it once you are complete with your styling.

Next set your position to fixed. This makes it so the element stays in the one place even if the page is scrolled.

Set the background color to the to rgba(0,0,0,0.6). This is what creates the opacity of the page so you can still kind of see what is underneath. If you would like you can also make your modal completely solid, it's up to you. Play with the settings and decide what you would like to go with.

Set the height and width to 100% to cover the whole page.

Now the `z-index`. The `z-index` is very important. What is sets is what layer your modal is going to be at. Standard items on a page sit at 0, so you can set this to anything above that. If you will have a page with many elements, try to set a higher number so nothing overwrites it if you add more layers.

The `.modal-container` class is what will contain the content of your modal. In most cases you want this placed in the middle of the screen.

Set your position to absolute so you can move it around wherever you would like inside of the fixed of the element of `.modal-showing` (in step 1)

Next set whatever width you would like it to be. I would suggest something solid so you can calculate center much easier.

Set your top to a percentage to set it vertically on the page.

The left calculation can be a little tricky. Setting it to 50%, doesn't center your content in the middle of the screen. What you need to do is calculated by setting 50% and then subtracting half of the width measurement. In this case I used -150px because the width of the container is set to `300px`.

The next 3 steps are purely cosmetic and you can set them to whatever you would like

This class just relates to the pink navigation bar containing my close button. I have set the height to the same height of my button. It is your choice how you would like this to be styled.

The position of "absolute" is what is being placed on the position of relative from step 1. The only thing you want to exclude is the width as that will be what is being changed in the JavaScript. Think of the "relative" container being empty, and the width from the "absolute" is what is going to fill it up.

What you also want to do here is set a background-color but make sure it is different from what you used for the "static-progress-bar."

Keep the height the same as what you used in step 1.

## JavaScript

```js
const openModalBtn = document.getElementById("open-modal-button");

openModalBtn.addEventListener("click", () => {
  const showModal = document.getElementById("modal-showing");
  showModal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

const closeBtn = document.getElementById("modal-close-button");

closeBtn.addEventListener("click", () => {
  const showModal = document.getElementById("modal-showing");
  showModal.style.display = "none";
  document.body.style.overflow = "scroll";
});

window.addEventListener("click", (e) => {
  const showModal = document.getElementById("modal-showing");
  if (e.target === showModal) {
    showModal.style.display = "none";
    document.body.style.overflow = "scroll";
  }
});
```

Assign the button with the id `open-modal-button` to `the` variable openModalBtn.

Assign a click eventListener to the `openModalBtn` variable, pass in an anonymous function.

Assign the div with the id `modal-showing` to the `showModal` variable.

This is where the modal will appear when we change the display setting of the .modal-showing class. When you initially load the page, the display setting is set to none. On this line you are removing the `none` setting and replacing it with `flex`

This setting is optional but recommended. This will prevent scrolling when the modal is showing.

At this point you should be able to open the modal but there not yet a way to close it.

Assign the button with the id of `modal-close-button` to `the` variable closeModal.

Assign a click eventListener to the the `closeBtn` variable, pass in an anonymouse function.

Assign the div with the id `modal-showing` to the `showModal` variable. (This is the same thing you did when you made the modal appear).

This will assign the display setting of `none` back to the `showModal` variable.

This will allow the document to scroll again when the modal is removed by setting the overflow back to `scroll`.

The following steps are optional but recommended. They will cause the modal to close if you click anywhere on the page that is not part of the modal section with content.

Set a click eventListener to the window of the page. This will listen to a click made anywhere in the browser. Take note, that you need to pass an event into the function, this is the `e` inside of the brackets.

Assign the div with the id `modal-showing` to the `showModal` variable. Are you starting to notice a pattern here? This is an important part of learning JavaScript. You will always find yourself selecting items in order to make changes. How you go about selecting them will change and you will find more efficient ways to accomplish this the more you work with JS

This IF statement will check if the event target (e.target) is part of the showModal or not. If it is, it will run the following 2 lines of code.

This will remove the modal by assigning the setting of `none` to the `showModal` variable (linked to the `.modal-showing` class.

This will allow scrolling to resume when the modal is removed. This is done by changing the overflow setting back to `scroll`.

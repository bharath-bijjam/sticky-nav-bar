# Sticky Nav Bar

## Project Description
The "Sticky Nav Bar" project aims to create a navigation bar that becomes sticky (fixed) to the top of the page when the user scrolls down to a certain point. This behavior improves the user experience by ensuring easy access to the navigation menu at all times.

## Code Explanation
The provided JavaScript code enables the sticky behavior for the navigation bar. Let's break it down:

1. **Selecting Elements**: The code begins by selecting the navigation bar element and the bottom container element using `document.querySelector()`. It assumes the navigation bar has a class of "navbar" and the bottom container has a class of "bottom-container". The selected elements are stored in the `navbarEl` and `bottomContainerEl` variables, respectively.

2. **Event Listener**: An event listener is added to the `window` object, listening for the "scroll" event. This event fires whenever the user scrolls the page.

3. **Scroll Position Check**: Inside the event listener, the code checks the vertical scroll position using `window.scrollY`. It compares the scroll position with the calculated offset of the `bottomContainerEl` element and the height of the `navbarEl` element. By subtracting an additional 50 pixels, it creates a buffer zone to trigger the sticky behavior just before reaching the bottom container.

4. **Adding/Removing CSS Class**: If the scroll position surpasses the calculated threshold, the code adds the "active" class to the `navbarEl` element using `classList.add()`. This class likely contains CSS rules that make the navigation bar sticky. If the scroll position is within the threshold, the "active" class is removed using `classList.remove()`.

## Usage
To use the "Sticky Nav Bar" project, follow these steps:

1. Include the provided JavaScript code within your project's JavaScript file or script tags.
2. Ensure that you have a navigation bar element with the class "navbar" and a bottom container element with the class "bottom-container" in your HTML structure.
3. Customize the CSS rules for the "active" class to achieve the desired sticky behavior.
4. Test the project by scrolling the page and observing the navigation bar's behavior.

## Conclusion
The "Sticky Nav Bar" project provides a simple implementation of a sticky navigation bar using JavaScript. By following the usage instructions and customizing the CSS rules, you can integrate this feature into your website to enhance user experience and improve navigation accessibility.

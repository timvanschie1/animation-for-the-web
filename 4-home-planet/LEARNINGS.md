# LEARNINGS

- When doing an svg export in Figma, checking "Include 'id' attribute" will keep the layer names (otherwise stripped to
  reduce file size) in the code, which can be useful when animating.
- In svg we can just change a g (group)-tag into an <a href> to make it clickable.
- Trick to make sure the whole content of the group is clickable (and not only the elements within): add a rect element
  that has a fill, but also opacity 0 (add this manually, since it was stripped from Figma).
- will-change: transform could really help the browser to optimise for smoother animations.
- Solution to prevent flickering while loading the JS: use an css-animation to fade in the whole page.
- If you want tweens on a timeline to start at a specific time, a readable solution is to add a label and refer to it at
  the end of the tween.
- requestAnimationFrame/cancelAnimationFrame could be useful when combining scroll events with timeline seek. It works
  by making sure the function only executes max 50/60 times per second (better: the amount of frames per second the
  device runs).
- In the end, decided to use gsap's ScrollTrigger instead of the native solution. Since this is a probably better and
  more flexible solution. E.g., used scrub delay to make things smoother. 
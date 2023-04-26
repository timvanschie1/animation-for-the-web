# LEARNINGS
- Nice, simple solution for both listening to the dark-mode change, as well as a custom toggle button for it, by using a class (and not a media query, only listen to the media query in JS).
- By default, elements inside an SVG relate to the SVG canvas as its layout box. So transform-origin: center does not relate relative to itself (as a normal HTML element would), but to the SVG canvas or group (<g>). The trick used in the course is to wrap the element (e.g. circle, rect) in a <g> and position that via transform translate (e.g. transform="translate(19, 20)). Then, the circle/rect can be transformed with the position at it's center by default (see video 12).
- An even simpler solution is to give the element transform-box: fill-box (https://developer.mozilla.org/en-US/docs/Web/CSS/transform-box). Then it works as expected: transform-origin is relative to the element itself (its bounding box).
- Liked my own solution for the Hamburger menu: animation in two steps. And used a timeline instead of a tween, so it can be reversed.
- Use .add to execute a custom function at a specific point in a timeline.
- Learned working relative to the current position. So use rotation: "+=90" instead of rotation: 90
- Besides fill, SVG also has a separate fill-opacity, which is nice. Background, for regular HTML elements, doesn't have this as a separate option (but needs rgba for example and could use a trick with a as a CSS variable... what Tailwind does).
- When using the transform attribute on an svg element, percentage does not work for translate. But they do work when set via CSS.
- MorphSVGPlugin is a cool (paid) GSAP plugin to morph one SVG into another in an optimized way.  
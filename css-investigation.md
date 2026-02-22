# DevTools inspections
For analysing I decided to choose element `<a>View projects</a>` on main page. Contained in AboutTony.tsx file.  I will analyse 5 characteristics for each state:
Methodology: For each property, the investigation starts from the Computed value in DevTools, then traces the corresponding rule in the Styles panel, identifies the generated CSS location, and attempts to map it back to the original authored source using CSS sourcemaps. <br/> <br/>
This element is non-trivial because:
- it has different styles in default and :hover states, 
- it is affected by a global universal selector (* { margin: 5px }), 
- it inherits properties from :root, 
- it demonstrates cascade interaction and pseudo-class overrides.

### Color
1. State: default
- Computed value (DevTools → Computed): rgb(107, 114, 128) (equivalent to #6b7280)  
- Winning rule (Styles panel): .LejvnG_links a { color: #6b7280; } — index.css:1 
- Overridden rule: :root { color: #111; } — index.css:1 <br/> <br/>
The color is explicitly defined on the `<a>` element. Because of this, it overrides the inherited color from :root. The cascade prioritizes the author rule directly applied to the element over inherited values.
- Generated CSS location (as shown in DevTools): index.css:1
- Source map trace: With CSS sourcemaps enabled (index-*.css.map), this rule maps back to the original SCSS module file where .LejvnG_links a is defined.
2. State: :hover
- Computed value: rgb(17, 17, 17) (equivalent to #111)
- Winning rule: .LejvnG_links a:hover { color: #111; } — index.css:1 
- Overridden rule: .LejvnG_links a { color: #6b7280; }  When the :hover pseudo-class is active, the state-specific rule overrides the default color rule. The element dynamically changes appearance depending on interaction state.
- Generated CSS location (as shown in DevTools): index.css:1
- Source map trace: The :hover rule maps back to the SCSS module file via CSS sourcemaps.
Difference between states: <br/>
  Color changes from muted gray (#6b7280) to dark (#111) when hovered.

### Transition
1. State: default
- Computed values (DevTools → Computed):
  - transition-property: transform, color 
  - transition-duration: 0.3s, 0.3s 
  - transition-timing-function: ease, ease 
  - transition-delay: 0s, 0s

Winning rule (Styles panel): .LejvnG_links a { transition: transform .3s, color .3s; } — index.css:1

- Generated CSS location: index.css:1
- Source map trace: The rule maps back to the original SCSS module file via CSS sourcemaps.

DevTools expands the shorthand transition into multiple computed sub-properties (transition-property, duration, timing-function, delay).

2. State: :hover
- Computed values: (same as default)
- Difference between states:
  - Transition definition remains unchanged. 
  - It only affects how transform and color changes are animated.

### Transform
1. State: default
- Computed value (DevTools → Computed): none 
- Winning rule (Styles panel): no author rule applies transform in default state (property is not set)
- Generated CSS location (as shown in DevTools): (no rule / not applicable)
- Source map trace: (not applicable — no authored transform in default state)
2. State: :hover
- Computed value: matrix(1.1, 0, 0, 1.1, 0, 0)
- Winning rule: .LejvnG_links a:hover { transform: scale(1.1); } — index.css:1 
- Generated CSS location (as shown in DevTools): index.css:1 
- Source map trace: With CSS sourcemaps enabled (index-*.css.map), this rule maps back to the original SCSS module file where .LejvnG_links a:hover is defined.

In the authored CSS the transform is written as scale(1.1), but DevTools shows a transformation matrix in computed styles. This demonstrates that the browser internally represents transform functions as matrices, so the mapping from authored value to computed value is indirect (not one-to-one).


### Font-size
1. State: default
- Computed value: 14px 
- Winning rule: .LejvnG_links a { font-size: 14px; } — index.css:1
- Generated CSS location (as shown in DevTools): index.css:1
- Source map trace: This declaration maps back to the SCSS module file via sourcemaps.

2. State: :hover
- Computed value: 14px 
- Analysis: font size does not change during hover. The scaling effect is achieved via transform, not font resizing.
- Generated CSS location: index.css:1
- Source map trace: No additional hover rule affects font-size; the original SCSS rule remains active.

### Text-decoration-line
1. State: default
- Computed value: underline
- Winning rule: .LejvnG_links a { text-decoration: underline; } — index.css:1
- Generated CSS location (as shown in DevTools): index.css:1
- Source map trace: The shorthand text-decoration rule maps back to the SCSS module file via sourcemaps.

The shorthand property text-decoration is expanded in computed styles into multiple sub-properties such as text-decoration-line, text-decoration-style, and text-decoration-color.
2. State: :hover
- Computed value: underline

Difference between states: <br/>
No change. Hover does not affect text decoration.

### Margin
1. State: default
- Computed value: 5px on all sides
- Winning rule: * { margin: 5px; } — index.css:1
- Generated CSS location (as shown in DevTools): index.css:1
- Source map trace: The universal selector is defined in the global stylesheet and appears in the compiled CSS bundle; sourcemaps trace it back to the original global CSS file.

2. State: :hover
- Computed value: 5px

Difference between states: <br/>
No change. Margin is unaffected by pseudo-class state.


## Generated CSS location
All rules appear in DevTools as coming from index.css:1, which indicates that they are part of the compiled CSS bundle.

## Source Map trace
Using sourcemaps, the rules can be traced back to the original SCSS module file where .LejvnG_links a and .LejvnG_links a:hover are defined.

However, DevTools initially points to the compiled CSS file rather than the authored SCSS source.

### Ambiguous or Indirect Mapping Cases
1. Pseudo-class activation <br/>
Hover styles are not reflected in computed values unless the :hover state is manually forced in DevTools.
2.	Transform representation<br/>
The authored rule uses scale(1.1), but DevTools shows a transformation matrix in computed styles. The mapping is not one-to-one.
3.	Compiled CSS vs authored source<br/>
DevTools references index.css:1, while the actual authored styles exist in SCSS modules. Sourcemaps are required to trace the real source.

---
### Hover Interaction Enhancement

To improve visual feedback, the project link now smoothly enlarges on hover.<br/>
Implementation details:
- Added transition for smooth animation	
- Applied transform: scale(1.1) in :hover state
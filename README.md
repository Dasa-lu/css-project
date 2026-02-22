## CSS Build & Source Map Demo
This project demonstrates how authored SCSS is transformed into generated CSS during the build process using Vite, and how CSS source maps allow navigation back to the original source files.

The project is a small portfolio-style page built with React, SCSS Modules, and Vite.

### Setup & Run instructions

#### Install dependencies
npm install

#### Run development server:
npm run dev

#### Build for production:
npm run build

#### Preview production build locally:
npm run preview

### How Authored CSS Is Transformed
This project uses:
- SCSS Modules (*.module.scss) for styling 
- Sass to compile SCSS into CSS 
- Vite as the bundler 
- CSS Modules to scope and hash class names 
- CSS sourcemaps enabled during build

### Transformation Pipeline
1. Authoring stage
- Styles are written in *.module.scss files using SCSS features such as: nesting, variables, structured component-based styling
2. SCSS compilation
- Sass compiles SCSS into standard CSS.
3. CSS Modules transformation
- Class names are locally scoped and transformed into hashed identifiers. This ensures that the final generated CSS does not directly correspond 1-to-1 with the original source selectors.
4. Bundling and minification
- Vite bundles and minifies the CSS into a single production file inside the dist/ directory.
5. Source map generation
- CSS source maps are generated during the build process, allowing DevTools to map compiled CSS back to the original SCSS files.


### Generated CSS & Source Maps

After running:
- npm run build

You can find the generated files in:
- dist/assets/

### How to Verify Source Maps
1. Run:
2. Open the app in the browser.
3. Open DevTools.
4. Inspect an element
5. Click on a CSS rule in the Styles panel
   The browser will navigate back to the original *.module.scss file thanks to the generated source map.

### Setup & Run instructions
This project demonstrates:
- SCSS → CSS compilation 
- CSS Modules class hashing (non 1-to-1 transformation)
- Vite production bundling 
- CSS source map generation 
- Traceability from browser DevTools back to original SCSS source files

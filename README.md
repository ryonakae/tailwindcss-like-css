# Tailwind CSS Like CSS

A Tailwind CSS plugin for writing with CSS-like class names.

This plugin has the following features.

- Instead of writing code with Tailwind CSS's own class names (like ".text-base"), you can write code with class names that resemble CSS properties, like ".font-size-[16px]".
- Remove default variables such as spacing and colors. Please use arbitrary values as much as possible. If you want to use variables, you can add them in the configuration file.

## Installation

```
$ npm install --save-dev tailwindcss-like-css
```

## Usage

```
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-like-css'),
    // ...
  ],
}

export default config
```

## Class Names Cheat Sheet

### Layout

#### [Aspect Ratio](https://tailwindcss.com/docs/aspect-ratio)

| Class              | Properties            |
| ------------------ | --------------------- |
| aspect-ratio-[val] | `aspect-ratio: val;`  |
| aspect-ratio-auto  | `aspect-ratio: auto;` |

#### [Container](https://tailwindcss.com/docs/container)

This class name is not provided

#### [Columns](https://tailwindcss.com/docs/columns)

| Class         | Properties       |
| ------------- | ---------------- |
| columns-[val] | `columns: val;`  |
| columns-auto  | `columns: auto;` |

#### [Break After](https://tailwindcss.com/docs/break-after)

| Class                  | Properties                 |
| ---------------------- | -------------------------- |
| break-after-auto       | `break-after: auto;`       |
| break-after-avoid      | `break-after: avoid;`      |
| break-after-all        | `break-after: all;`        |
| break-after-avoid-page | `break-after: avoid-page;` |
| break-after-page       | `break-after: page;`       |
| break-after-left       | `break-after: left;`       |
| break-after-right      | `break-after: right;`      |
| break-after-column     | `break-after: column;`     |

#### [Break Before](https://tailwindcss.com/docs/break-before)

| Class                   | Properties                  |
| ----------------------- | --------------------------- |
| break-before-auto       | `break-before: auto;`       |
| break-before-avoid      | `break-before: avoid;`      |
| break-before-all        | `break-before: all;`        |
| break-before-avoid-page | `break-before: avoid-page;` |
| break-before-page       | `break-before: page;`       |
| break-before-left       | `break-before: left;`       |
| break-before-right      | `break-before: right;`      |
| break-before-column     | `break-before: column;`     |

#### [Break Inside](https://tailwindcss.com/docs/break-inside)

| Class                   | Properties                  |
| ----------------------- | --------------------------- |
| break-inside-auto       | `break-inside: auto;`       |
| break-inside-avoid      | `break-inside: avoid;`      |
| break-inside-avoid-page | `break-inside: avoid-page;` |
| break-inside-column     | `break-inside: column;`     |

#### [Box Decoration Break](https://tailwindcss.com/docs/box-decoration-break)

| Class                      | Properties                     |
| -------------------------- | ------------------------------ |
| box-decoration-break-clone | `box-decoration-break: clone;` |
| box-decoration-break-slice | `box-decoration-break: slice;` |

#### [Box Sizing](https://tailwindcss.com/docs/box-sizing)

| Class                  | Properties                 |
| ---------------------- | -------------------------- |
| box-sizing-border-box  | `box-sizing: border-box;`  |
| box-sizing-content-box | `box-sizing: content-box;` |

#### [Display](https://tailwindcss.com/docs/display)

| Class                      | Properties                     |
| -------------------------- | ------------------------------ |
| display-block              | `display: block;`              |
| display-inline-block       | `display: inline-block;`       |
| display-inline             | `display: inline;`             |
| display-flex               | `display: flex;`               |
| display-inline-flex        | `display: inline-flex;`        |
| display-table              | `display: table;`              |
| display-inline-table       | `display: inline-table;`       |
| display-table-caption      | `display: table-caption;`      |
| display-table-cell         | `display: table-cell;`         |
| display-table-column       | `display: table-column;`       |
| display-table-column-group | `display: table-column-group;` |
| display-table-footer-group | `display: table-footer-group;` |
| display-table-header-group | `display: table-header-group;` |
| display-table-row-group    | `display: table-row-group;`    |
| display-table-row          | `display: table-row;`          |
| display-flow-root          | `display: flow-root;`          |
| display-grid               | `display: grid;`               |
| display-inline-grid        | `display: inline-grid;`        |
| display-contents           | `display: contents;`           |
| display-list-item          | `display: list-item;`          |
| display-none               | `display: none;`               |

#### [Floats](https://tailwindcss.com/docs/float)

| Class              | Properties             |
| ------------------ | ---------------------- |
| float-inline-start | `float: inline-start;` |
| float-inline-end   | `float: inline-end;`   |
| float-right        | `float: right;`        |
| float-left         | `float: left;`         |
| float-none         | `float: none;`         |

#### [Clear](https://tailwindcss.com/docs/clear)

| Class              | Properties             |
| ------------------ | ---------------------- |
| clear-inline-start | `clear: inline-start;` |
| clear-inline-end   | `clear: inline-end;`   |
| clear-left         | `clear: left;`         |
| clear-right        | `clear: right;`        |
| clear-both         | `clear: both;`         |
| clear-none         | `clear: none;`         |

#### [Isolation](https://tailwindcss.com/docs/isolation)

| Class             | Properties            |
| ----------------- | --------------------- |
| isolation-isolate | `isolation: isolate;` |
| isolation-auto    | `isolation: auto;`    |

#### [Object Fit](https://tailwindcss.com/docs/object-fit)

| Class                 | Properties                |
| --------------------- | ------------------------- |
| object-fit-contain    | `object-fit: contain;`    |
| object-fit-cover      | `object-fit: cover;`      |
| object-fit-fill       | `object-fit: fill;`       |
| object-fit-none       | `object-fit: none;`       |
| object-fit-scale-down | `object-fit: scale-down;` |

#### [Object Position](https://tailwindcss.com/docs/object-position)

| Class                        | Properties                       |
| ---------------------------- | -------------------------------- |
| object-position-bottom       | `object-position: bottom;`       |
| object-position-center       | `object-position: center;`       |
| object-position-left         | `object-position: left;`         |
| object-position-left-bottom  | `object-position: left bottom;`  |
| object-position-left-top     | `object-position: left top;`     |
| object-position-right        | `object-position: right;`        |
| object-position-right-bottom | `object-position: right bottom;` |
| object-position-right-top    | `object-position: right top;`    |
| object-position-top          | `object-position: top;`          |

#### [Overflow](https://tailwindcss.com/docs/overflow)

| Class              | Properties             |
| ------------------ | ---------------------- |
| overflow-auto      | `overflow: auto;`      |
| overflow-hidden    | `overflow: hidden;`    |
| overflow-clip      | `overflow: clip;`      |
| overflow-visible   | `overflow: visible;`   |
| overflow-scroll    | `overflow: scroll;`    |
| overflow-x-auto    | `overflow-x: auto;`    |
| overflow-y-auto    | `overflow-y: auto;`    |
| overflow-x-hidden  | `overflow-x: hidden;`  |
| overflow-y-hidden  | `overflow-y: hidden;`  |
| overflow-x-clip    | `overflow-x: clip;`    |
| overflow-y-clip    | `overflow-y: clip;`    |
| overflow-x-visible | `overflow-x: visible;` |
| overflow-y-visible | `overflow-y: visible;` |
| overflow-x-scroll  | `overflow-x: scroll;`  |
| overflow-y-scroll  | `overflow-y: scroll;`  |

#### [Overscroll Behavior](https://tailwindcss.com/docs/overscroll-behavior)

| Class                         | Properties                        |
| ----------------------------- | --------------------------------- |
| overscroll-behavior-auto      | `overscroll-behavior: auto;`      |
| overscroll-behavior-contain   | `overscroll-behavior: contain;`   |
| overscroll-behavior-none      | `overscroll-behavior: none;`      |
| overscroll-behavior-y-auto    | `overscroll-behavior-y: auto;`    |
| overscroll-behavior-y-contain | `overscroll-behavior-y: contain;` |
| overscroll-behavior-y-none    | `overscroll-behavior-y: none;`    |
| overscroll-behavior-x-auto    | `overscroll-behavior-x: auto;`    |
| overscroll-behavior-x-contain | `overscroll-behavior-x: contain;` |
| overscroll-behavior-x-none    | `overscroll-behavior-x: none;`    |

#### [Position](https://tailwindcss.com/docs/position)

| Class             | Properties            |
| ----------------- | --------------------- |
| position-static   | `position: static;`   |
| position-fixed    | `position: fixed;`    |
| position-absolute | `position: absolute;` |
| position-relative | `position: relative;` |
| position-sticky   | `position: sticky;`   |

#### [Top / Right / Bottom / Left](https://tailwindcss.com/docs/top-right-bottom-left)

| Class                    | Properties                 |
| ------------------------ | -------------------------- |
| inset-[val]              | `inset: val;`              |
| inset-inline-start-[val] | `inset-inline-start: val;` |
| inset-inline-end-[val]   | `inset-inline-end: val;`   |
| top-[val]                | `top: val;`                |
| right-[val]              | `right: val;`              |
| bottom-[val]             | `bottom: val;`             |
| left-[val]               | `left: val;`               |

#### [Visibility](https://tailwindcss.com/docs/visibility)

| Class               | Properties              |
| ------------------- | ----------------------- |
| visibility-visible  | `visibility: visible;`  |
| visibility-hidden   | `visibility: hidden;`   |
| visibility-collapse | `visibility: collapse;` |

#### [Z-Index](https://tailwindcss.com/docs/z-index)

| Class         | Properties       |
| ------------- | ---------------- |
| z-index-[val] | `z-index: val;`  |
| z-index-auto  | `z-index: auto;` |

### Flexbox & Grid

WIP

### Spacing

WIP

### Sizing

WIP

### Typography

WIP

### Backgrounds

WIP

### Borders

WIP

### Effects

WIP

### Filters

WIP

### Tables

WIP

### Transitions & Animation

WIP

### Transforms

WIP

### Interactivity

WIP

### SVG

WIP

### Accessibility

WIP

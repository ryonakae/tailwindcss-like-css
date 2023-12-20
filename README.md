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

WIP

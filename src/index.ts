/* eslint-disable @typescript-eslint/no-var-requires */
import plugin from 'tailwindcss/plugin'

import type { CSSRuleObject } from 'tailwindcss/types/config'
import type { CorePluginList } from 'tailwindcss/types/generated/corePluginList'

const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

export default plugin(
  ({ addUtilities, matchUtilities, theme }) => {
    function addDynamicUtilities<T = string, U = string>(
      propertyName: string,
      values:
        | ((
            value: T | string,
            extra: { modifier: U | string | null },
          ) => CSSRuleObject | null)
        | null,
      corePluginName: CorePluginList,
      options?: {
        colors?: boolean
        supportsNegativeValues?: boolean
      },
    ) {
      return matchUtilities(
        {
          [propertyName]: values ?? (value => ({ [propertyName]: value })),
        },
        {
          values: options?.colors
            ? flattenColorPalette(theme(corePluginName))
            : theme(corePluginName),
          supportsNegativeValues: options?.supportsNegativeValues,
        },
      )
    }

    // Layout
    addDynamicUtilities('aspect-ratio', null, 'aspectRatio')
    addDynamicUtilities('columns', null, 'columns')
    addUtilities({
      '.box-decoration-break-clone': { 'box-decoration-break': 'clone' },
      '.box-decoration-break-slice': { 'box-decoration-break': 'slice' },
    })
    addUtilities({
      '.box-sizing-border-box': { 'box-sizing': 'border-box' },
      '.box-sizing-content-box': { 'box-sizing': 'content-box' },
    })
    addUtilities({
      '.display-block': { display: 'block' },
      '.display-inline-block': { display: 'inline-block' },
      '.display-inline': { display: 'inline' },
      '.display-flex': { display: 'flex' },
      '.display-inline-flex': { display: 'inline-flex' },
      '.display-table': { display: 'table' },
      '.display-inline-table': { display: 'inline-table' },
      '.display-table-caption': { display: 'table-caption' },
      '.display-table-cell': { display: 'table-cell' },
      '.display-table-column': { display: 'table-column' },
      '.display-table-column-group': { display: 'table-column-group' },
      '.display-table-footer-group': { display: 'table-footer-group' },
      '.display-table-header-group': { display: 'table-header-group' },
      '.display-table-row-group': { display: 'table-row-group' },
      '.display-table-row': { display: 'table-row' },
      '.display-flow-root': { display: 'flow-root' },
      '.display-grid': { display: 'grid' },
      '.display-inline-grid': { display: 'inline-grid' },
      '.display-contents': { display: 'contents' },
      '.display-list-item': { display: 'list-item' },
      '.display-none': { display: 'none' },
    })
    addUtilities({
      '.isolation-isolate': { isolation: 'isolate' },
      '.isolation-auto': { isolation: 'auto' },
    })
    addUtilities({
      '.object-fit-contain': { 'object-fit': 'contain' },
      '.object-fit-cover': { 'object-fit': 'cover' },
      '.object-fit-fill': { 'object-fit': 'fill' },
      '.object-fit-none': { 'object-fit': 'none' },
      '.object-fit-scale-down': { 'object-fit': 'scale-down' },
    })
    addDynamicUtilities('object-position', null, 'objectPosition')
    addUtilities({
      '.overscroll-behavior-auto': { 'overscroll-behavior': 'auto' },
      '.overscroll-behavior-contain': { 'overscroll-behavior': 'contain' },
      '.overscroll-behavior-none': { 'overscroll-behavior': 'none' },
      '.overscroll-behavior-y-auto': { 'overscroll-behavior-y': 'auto' },
      '.overscroll-behavior-y-contain': {
        'overscroll-behavior-y': 'contain',
      },
      '.overscroll-behavior-y-none': { 'overscroll-behavior-y': 'none' },
      '.overscroll-behavior-x-auto': { 'overscroll-behavior-x': 'auto' },
      '.overscroll-behavior-x-contain': {
        'overscroll-behavior-x': 'contain',
      },
      '.overscroll-behavior-x-none': { 'overscroll-behavior-x': 'none' },
    })
    addUtilities({
      '.position-static': { position: 'static' },
      '.position-fixed': { position: 'fixed' },
      '.position-absolute': { position: 'absolute' },
      '.position-relative': { position: 'relative' },
      '.position-sticky': { position: 'sticky' },
    })
    addDynamicUtilities('top', null, 'inset')
    addDynamicUtilities('right', null, 'inset')
    addDynamicUtilities('bottom', null, 'inset')
    addDynamicUtilities('left', null, 'inset')
    addDynamicUtilities('inset', null, 'inset')
    addDynamicUtilities('inset-inline', null, 'inset')
    addDynamicUtilities('inset-inline-start', null, 'inset')
    addDynamicUtilities('inset-inline-end', null, 'inset')
    addUtilities({
      '.visibility-visible': { visibility: 'visible' },
      '.visibility-hidden': { visibility: 'hidden' },
      '.visibility-collapse': { visibility: 'collapse' },
    })
    addDynamicUtilities('z-index', null, 'zIndex')

    // Flexbox & Grid
    addDynamicUtilities('flex-basis', null, 'flexBasis')
    addUtilities({
      '.flex-direction-row': { 'flex-direction': 'row' },
      '.flex-direction-row-reverse': { 'flex-direction': 'row-reverse' },
      '.flex-direction-column': { 'flex-direction': 'column' },
      '.flex-direction-column-reverse': {
        'flex-direction': 'column-reverse',
      },
    })
    addUtilities({
      '.flex-wrap-wrap': { 'flex-wrap': 'wrap' },
      '.flex-wrap-wrap-reverse': { 'flex-wrap': 'wrap-reverse' },
      '.flex-wrap-nowrap': { 'flex-wrap': 'nowrap' },
    })
    addDynamicUtilities('flex', null, 'flex')
    addDynamicUtilities('flex-grow', null, 'flexGrow')
    addDynamicUtilities('flex-shrink', null, 'flexShrink')
    addDynamicUtilities('order', null, 'order')
    addDynamicUtilities('grid-template-columns', null, 'gridTemplateColumns')
    addDynamicUtilities('grid-column', null, 'gridColumn')
    addDynamicUtilities('grid-column-start', null, 'gridColumnStart')
    addDynamicUtilities('grid-column-end', null, 'gridColumnEnd')
    addDynamicUtilities('grid-template-rows', null, 'gridTemplateRows')
    addDynamicUtilities('grid-row', null, 'gridRow')
    addDynamicUtilities('grid-row-start', null, 'gridRowStart')
    addDynamicUtilities('grid-row-end', null, 'gridRowEnd')
    addUtilities({
      '.grid-auto-flow-row': { gridAutoFlow: 'row' },
      '.grid-auto-flow-col': { gridAutoFlow: 'column' },
      '.grid-auto-flow-dense': { gridAutoFlow: 'dense' },
      '.grid-auto-flow-row-dense': { gridAutoFlow: 'row dense' },
      '.grid-auto-flow-col-dense': { gridAutoFlow: 'column dense' },
    })
    addUtilities({
      '.grid-auto-columns-auto': { 'grid-auto-columns': 'auto' },
      '.grid-auto-columns-min-content': {
        'grid-auto-columns': 'min-content',
      },
      '.grid-auto-columns-max-content': {
        'grid-auto-columns': 'max-content',
      },
    })
    addUtilities({
      '.grid-auto-rows-auto': { 'grid-auto-rows': 'auto' },
      '.grid-auto-rows-min-content': { 'grid-auto-rows': 'min-content' },
      '.grid-auto-rows-max-content': { 'grid-auto-rows': 'max-content' },
    })
    addDynamicUtilities('gap', null, 'gap')
    addDynamicUtilities('column-gap', null, 'gap')
    addDynamicUtilities('row-gap', null, 'gap')
    addUtilities({
      '.justify-content-normal': { 'justify-content': 'normal' },
      '.justify-content-flex-start': { 'justify-content': 'flex-start' },
      '.justify-content-flex-end': { 'justify-content': 'flex-end' },
      '.justify-content-center': { 'justify-content': 'center' },
      '.justify-content-space-between': {
        'justify-content': 'space-between',
      },
      '.justify-content-space-around': { 'justify-content': 'space-around' },
      '.justify-content-space-evenly': { 'justify-content': 'space-evenly' },
      '.justify-content-stretch': { 'justify-content': 'stretch' },
    })
    addUtilities({
      '.align-content-normal': { 'align-content': 'normal' },
      '.align-content-center': { 'align-content': 'center' },
      '.align-content-flex-start': { 'align-content': 'flex-start' },
      '.align-content-flex-end': { 'align-content': 'flex-end' },
      '.align-content-space-between': { 'align-content': 'space-between' },
      '.align-content-space-around': { 'align-content': 'space-around' },
      '.align-content-space-evenly': { 'align-content': 'space-evenly' },
      '.align-content-baseline': { 'align-content': 'baseline' },
      '.align-content-stretch': { 'align-content': 'stretch' },
    })
    addUtilities({
      '.place-content-center': { 'place-content': 'center' },
      '.place-content-start': { 'place-content': 'start' },
      '.place-content-end': { 'place-content': 'end' },
      '.place-content-space-between': { 'place-content': 'space-between' },
      '.place-content-space-around': { 'place-content': 'space-around' },
      '.place-content-space-evenly': { 'place-content': 'space-evenly' },
      '.place-content-baseline': { 'place-content': 'baseline' },
      '.place-content-stretch': { 'place-content': 'stretch' },
    })
    addDynamicUtilities('place-items', null, 'placeItems')
    addDynamicUtilities('place-self', null, 'placeSelf')

    // Spacing
    addDynamicUtilities('padding', null, 'padding')
    addDynamicUtilities('padding-top', null, 'padding')
    addDynamicUtilities('padding-right', null, 'padding')
    addDynamicUtilities('padding-bottom', null, 'padding')
    addDynamicUtilities('padding-left', null, 'padding')
    addDynamicUtilities('padding-inline', null, 'padding')
    addDynamicUtilities('padding-inline-start', null, 'padding')
    addDynamicUtilities('padding-inline-end', null, 'padding')
    addDynamicUtilities('margin', null, 'margin')
    addDynamicUtilities('margin-top', null, 'margin')
    addDynamicUtilities('margin-right', null, 'margin')
    addDynamicUtilities('margin-bottom', null, 'margin')
    addDynamicUtilities('margin-left', null, 'margin')
    addDynamicUtilities('margin-inline', null, 'margin')
    addDynamicUtilities('margin-inline-start', null, 'margin')
    addDynamicUtilities('margin-inline-end', null, 'margin')
    // addDynamicUtilities('space', 'space')

    // Sizing
    addDynamicUtilities('width', null, 'width')
    addDynamicUtilities('min-width', null, 'minWidth')
    addDynamicUtilities('max-width', null, 'maxWidth')
    addDynamicUtilities('height', null, 'height')
    addDynamicUtilities('min-height', null, 'minHeight')
    addDynamicUtilities('max-height', null, 'maxHeight')

    // Typography
    addDynamicUtilities('font-family', null, 'fontFamily')
    addDynamicUtilities('font-size', null, 'fontSize')
    // addDynamicUtilities('font-smoothing', 'fontSmoothing')
    addUtilities({
      '.font-style-italic': { 'font-style': 'italic' },
      '.font-style-normal': { 'font-style': 'normal' },
    })
    addDynamicUtilities('font-weight', null, 'fontWeight')
    const cssFontVariantNumericValue = [
      'var(--tw-ordinal)',
      'var(--tw-slashed-zero)',
      'var(--tw-numeric-figure)',
      'var(--tw-numeric-spacing)',
      'var(--tw-numeric-fraction)',
    ].join(' ')
    addUtilities({
      '.font-variant-numeric-normal': { 'font-variant-numeric': 'normal' },
      '.font-variant-numeric-ordinal': {
        '@defaults font-variant-numeric': {},
        '--tw-ordinal': 'ordinal',
        'font-variant-numeric': cssFontVariantNumericValue,
      },
      '.font-variant-numeric-slashed-zero': {
        '@defaults font-variant-numeric': {},
        '--tw-slashed-zero': 'slashed-zero',
        'font-variant-numeric': cssFontVariantNumericValue,
      },
      '.font-variant-numeric-lining-nums': {
        '@defaults font-variant-numeric': {},
        '--tw-numeric-figure': 'lining-nums',
        'font-variant-numeric': cssFontVariantNumericValue,
      },
      '.font-variant-numeric-oldstyle-nums': {
        '@defaults font-variant-numeric': {},
        '--tw-numeric-figure': 'oldstyle-nums',
        'font-variant-numeric': cssFontVariantNumericValue,
      },
      '.font-variant-numeric-proportional-nums': {
        '@defaults font-variant-numeric': {},
        '--tw-numeric-spacing': 'proportional-nums',
        'font-variant-numeric': cssFontVariantNumericValue,
      },
      '.font-variant-numeric-tabular-nums': {
        '@defaults font-variant-numeric': {},
        '--tw-numeric-spacing': 'tabular-nums',
        'font-variant-numeric': cssFontVariantNumericValue,
      },
      '.font-variant-numeric-diagonal-fractions': {
        '@defaults font-variant-numeric': {},
        '--tw-numeric-fraction': 'diagonal-fractions',
        'font-variant-numeric': cssFontVariantNumericValue,
      },
      '.font-variant-numeric-stacked-fractions': {
        '@defaults font-variant-numeric': {},
        '--tw-numeric-fraction': 'stacked-fractions',
        'font-variant-numeric': cssFontVariantNumericValue,
      },
    })
    addDynamicUtilities('letter-spacing', null, 'letterSpacing')
    // addDynamicUtilities('line-clamp', null, 'lineClamp')
    addDynamicUtilities('line-height', null, 'lineHeight')
    addDynamicUtilities('list-style-image', null, 'listStyleImage')
    addUtilities({
      '.list-style-position-inside': { 'list-style-position': 'inside' },
      '.list-style-position-outside': { 'list-style-position': 'outside' },
    })
    addDynamicUtilities('list-style-type', null, 'listStyleType')
    addUtilities({
      '.text-align-left': { 'text-align': 'left' },
      '.text-align-center': { 'text-align': 'center' },
      '.text-align-right': { 'text-align': 'right' },
      '.text-align-justify': { 'text-align': 'justify' },
      '.text-align-start': { 'text-align': 'start' },
      '.text-align-end': { 'text-align': 'end' },
    })
    addDynamicUtilities('color', null, 'textColor', { colors: true })
    addUtilities({
      '.text-decoration-line-underline': {
        'text-decoration-line': 'underline',
      },
      '.text-decoration-line-overline': {
        'text-decoration-line': 'overline',
      },
      '.text-decoration-line-line-through': {
        'text-decoration-line': 'line-through',
      },
      '.text-decoration-line-none': { 'text-decoration-line': 'none' },
    })
    addDynamicUtilities('text-decoration-color', null, 'textDecorationColor', {
      colors: true,
    })
    addUtilities({
      '.text-decoration-style-solid': { 'text-decoration-style': 'solid' },
      '.text-decoration-style-double': { 'text-decoration-style': 'double' },
      '.text-decoration-style-dotted': { 'text-decoration-style': 'dotted' },
      '.text-decoration-style-dashed': { 'text-decoration-style': 'dashed' },
      '.text-decoration-style-wavy': { 'text-decoration-style': 'wavy' },
    })
    addDynamicUtilities(
      'text-decoration-thickness',
      null,
      'textDecorationThickness',
    )
    addDynamicUtilities('text-underline-offset', null, 'textUnderlineOffset')
    addUtilities({
      '.text-transform-uppercase': { 'text-transform': 'uppercase' },
      '.text-transform-lowercase': { 'text-transform': 'lowercase' },
      '.text-transform-capitalize': { 'text-transform': 'capitalize' },
      '.text-transform-none': { 'text-transform': 'none' },
    })
    addUtilities({
      '.text-overflow-ellipsis': { 'text-overflow': 'ellipsis' },
      '.text-overflow-clip': { 'text-overflow': 'clip' },
    })
    addDynamicUtilities('text-indent', null, 'textIndent')
    addUtilities({
      '.vertical-align-baseline': { 'vertical-align': 'baseline' },
      '.vertical-align-top': { 'vertical-align': 'top' },
      '.vertical-align-middle': { 'vertical-align': 'middle' },
      '.vertical-align-bottom': { 'vertical-align': 'bottom' },
      '.vertical-align-text-top': { 'vertical-align': 'text-top' },
      '.vertical-align-text-bottom': { 'vertical-align': 'text-bottom' },
      '.vertical-align-sub': { 'vertical-align': 'sub' },
      '.vertical-align-super': { 'vertical-align': 'super' },
    })
    addUtilities({
      '.white-space-normal': { 'white-space': 'normal' },
      '.white-space-nowrap': { 'white-space': 'nowrap' },
      '.white-space-pre': { 'white-space': 'pre' },
      '.white-space-pre-line': { 'white-space': 'pre-line' },
      '.white-space-pre-wrap': { 'white-space': 'pre-wrap' },
      '.white-space-break-spaces': { 'white-space': 'break-spaces' },
    })
    addUtilities({
      '.word-break-normal': { 'word-break': 'normal' },
      '.word-break-break-all': { 'word-break': 'break-all' },
      '.word-break-keep-all': { 'word-break': 'keep-all' },
    })
    addUtilities({
      '.overflow-wrap-normal': { 'overflow-wrap': 'normal' },
      '.overflow-wrap-break-word': { 'overflow-wrap': 'break-word' },
      '.overflow-wrap-anywhere': { 'overflow-wrap': 'anywhere' },
    })

    // Backgrounds
    addUtilities({
      '.background-attachment-fixed': { 'background-attachment': 'fixed' },
      '.background-attachment-local': { 'background-attachment': 'local' },
      '.background-attachment-scroll': { 'background-attachment': 'scroll' },
    })
    addUtilities({
      '.background-clip-border-box': { 'background-clip': 'border-box' },
      '.background-clip-padding-box': { 'background-clip': 'padding-box' },
      '.background-clip-content-box': { 'background-clip': 'content-box' },
      '.background-clip-text': { 'background-clip': 'text' },
    })
    addDynamicUtilities('background-color', null, 'backgroundColor', {
      colors: true,
    })
    addUtilities({
      '.background-origin-border-box': { 'background-origin': 'border-box' },
      '.background-origin-padding-box': {
        'background-origin': 'padding-box',
      },
      '.background-origin-content-box': {
        'background-origin': 'content-box',
      },
    })
    addDynamicUtilities('background-position', null, 'backgroundPosition')
    addUtilities({
      '.background-repeat-repeat': { 'background-repeat': 'repeat' },
      '.background-repeat-no-repeat': { 'background-repeat': 'no-repeat' },
      '.background-repeat-repeat-x': { 'background-repeat': 'repeat-x' },
      '.background-repeat-repeat-y': { 'background-repeat': 'repeat-y' },
      '.background-repeat-round': { 'background-repeat': 'round' },
      '.background-repeat-space': { 'background-repeat': 'space' },
    })
    addDynamicUtilities('background-size', null, 'backgroundSize')
    addDynamicUtilities('background-image', null, 'backgroundImage')

    // Borders
    addDynamicUtilities('border-radius', null, 'borderRadius')
    addDynamicUtilities('border-top-left-radius', null, 'borderRadius')
    addDynamicUtilities('border-top-right-radius', null, 'borderRadius')
    addDynamicUtilities('border-bottom-right-radius', null, 'borderRadius')
    addDynamicUtilities('border-bottom-left-radius', null, 'borderRadius')
    addDynamicUtilities('border-start-start-radius', null, 'borderRadius')
    addDynamicUtilities('border-start-end-radius', null, 'borderRadius')
    addDynamicUtilities('border-end-start-radius', null, 'borderRadius')
    addDynamicUtilities('border-end-end-radius', null, 'borderRadius')
    addDynamicUtilities('border-width', null, 'borderWidth')
    addDynamicUtilities('border-top-width', null, 'borderWidth')
    addDynamicUtilities('border-right-width', null, 'borderWidth')
    addDynamicUtilities('border-bottom-width', null, 'borderWidth')
    addDynamicUtilities('border-left-width', null, 'borderWidth')
    addDynamicUtilities('border-inline-width', null, 'borderWidth')
    addDynamicUtilities('border-inline-start-width', null, 'borderWidth')
    addDynamicUtilities('border-inline-end-width', null, 'borderWidth')
    addDynamicUtilities('border-color', null, 'borderColor', { colors: true })
    addDynamicUtilities('border-top-color', null, 'borderColor', {
      colors: true,
    })
    addDynamicUtilities('border-right-color', null, 'borderColor', {
      colors: true,
    })
    addDynamicUtilities('border-bottom-color', null, 'borderColor', {
      colors: true,
    })
    addDynamicUtilities('border-left-color', null, 'borderColor', {
      colors: true,
    })
    addDynamicUtilities('border-inline-color', null, 'borderColor', {
      colors: true,
    })
    addDynamicUtilities('border-inline-start-color', null, 'borderColor', {
      colors: true,
    })
    addDynamicUtilities('border-inline-end-color', null, 'borderColor', {
      colors: true,
    })
    addUtilities({
      '.border-style-solid': { 'border-style': 'solid' },
      '.border-style-dashed': { 'border-style': 'dashed' },
      '.border-style-dotted': { 'border-style': 'dotted' },
      '.border-style-double': { 'border-style': 'double' },
      '.border-style-hidden': { 'border-style': 'hidden' },
      '.border-style-none': { 'border-style': 'none' },
    })
    addDynamicUtilities('outline-width', null, 'outlineWidth')
    addDynamicUtilities('outline-color', null, 'outlineColor', {
      colors: true,
    })
    addUtilities({
      '.outline-style-none': {
        outline: '2px solid transparent',
        'outline-offset': '2px',
      },
      '.outline-style-solid': { 'outline-style': 'solid' },
      '.outline-style-dashed': { 'outline-style': 'dashed' },
      '.outline-style-dotted': { 'outline-style': 'dotted' },
      '.outline-style-double': { 'outline-style': 'double' },
    })
    addDynamicUtilities('outline-offset', null, 'outlineOffset')

    // Effects
    addDynamicUtilities('box-shadow', null, 'boxShadow')
    addDynamicUtilities('box-shadow-color', null, 'boxShadowColor', {
      colors: true,
    })
    addDynamicUtilities('opacity', null, 'opacity')
    addUtilities({
      '.mix-blend-mode-normal': { 'mix-blend-mode': 'normal' },
      '.mix-blend-mode-multiply': { 'mix-blend-mode': 'multiply' },
      '.mix-blend-mode-screen': { 'mix-blend-mode': 'screen' },
      '.mix-blend-mode-overlay': { 'mix-blend-mode': 'overlay' },
      '.mix-blend-mode-darken': { 'mix-blend-mode': 'darken' },
      '.mix-blend-mode-lighten': { 'mix-blend-mode': 'lighten' },
      '.mix-blend-mode-color-dodge': { 'mix-blend-mode': 'color-dodge' },
      '.mix-blend-mode-color-burn': { 'mix-blend-mode': 'color-burn' },
      '.mix-blend-mode-hard-light': { 'mix-blend-mode': 'hard-light' },
      '.mix-blend-mode-soft-light': { 'mix-blend-mode': 'soft-light' },
      '.mix-blend-mode-difference': { 'mix-blend-mode': 'difference' },
      '.mix-blend-mode-exclusion': { 'mix-blend-mode': 'exclusion' },
      '.mix-blend-mode-hue': { 'mix-blend-mode': 'hue' },
      '.mix-blend-mode-saturation': { 'mix-blend-mode': 'saturation' },
      '.mix-blend-mode-color': { 'mix-blend-mode': 'color' },
      '.mix-blend-mode-luminosity': { 'mix-blend-mode': 'luminosity' },
      '.mix-blend-mode-plus-lighter': { 'mix-blend-mode': 'plus-lighter' },
    })
    addUtilities({
      '.background-blend-mode-normal': { 'background-blend-mode': 'normal' },
      '.background-blend-mode-multiply': {
        'background-blend-mode': 'multiply',
      },
      '.background-blend-mode-screen': { 'background-blend-mode': 'screen' },
      '.background-blend-mode-overlay': {
        'background-blend-mode': 'overlay',
      },
      '.background-blend-mode-darken': { 'background-blend-mode': 'darken' },
      '.background-blend-mode-lighten': {
        'background-blend-mode': 'lighten',
      },
      '.background-blend-mode-color-dodge': {
        'background-blend-mode': 'color-dodge',
      },
      '.background-blend-mode-color-burn': {
        'background-blend-mode': 'color-burn',
      },
      '.background-blend-mode-hard-light': {
        'background-blend-mode': 'hard-light',
      },
      '.background-blend-mode-soft-light': {
        'background-blend-mode': 'soft-light',
      },
      '.background-blend-mode-difference': {
        'background-blend-mode': 'difference',
      },
      '.background-blend-mode-exclusion': {
        'background-blend-mode': 'exclusion',
      },
      '.background-blend-mode-hue': { 'background-blend-mode': 'hue' },
      '.background-blend-mode-saturation': {
        'background-blend-mode': 'saturation',
      },
      '.background-blend-mode-color': { 'background-blend-mode': 'color' },
      '.background-blend-mode-luminosity': {
        'background-blend-mode': 'luminosity',
      },
    })

    // Filters
    const cssFilterValue = [
      'var(--tw-blur)',
      'var(--tw-brightness)',
      'var(--tw-contrast)',
      'var(--tw-grayscale)',
      'var(--tw-hue-rotate)',
      'var(--tw-invert)',
      'var(--tw-saturate)',
      'var(--tw-sepia)',
      'var(--tw-drop-shadow)',
    ].join(' ')
    addDynamicUtilities(
      'filter-blur',
      value => ({
        '--tw-blur': `blur(${value})`,
        '@defaults filter': {},
        filter: cssFilterValue,
      }),
      'blur',
    )
    addDynamicUtilities(
      'filter-brightness',
      value => ({
        '--tw-brightness': `brightness(${value})`,
        '@defaults filter': {},
        filter: cssFilterValue,
      }),
      'brightness',
    )
    addDynamicUtilities(
      'filter-contrast',
      value => ({
        '--tw-contrast': `contrast(${value})`,
        '@defaults filter': {},
        filter: cssFilterValue,
      }),
      'contrast',
    )
    addDynamicUtilities(
      'filter-drop-shadow',
      value => ({
        '--tw-drop-shadow': Array.isArray(value)
          ? value.map(v => `drop-shadow(${v})`).join(' ')
          : `drop-shadow(${value})`,
        '@defaults filter': {},
        filter: cssFilterValue,
      }),
      'dropShadow',
    )
    addDynamicUtilities(
      'filter-grayscale',
      value => ({
        '--tw-grayscale': `grayscale(${value})`,
        '@defaults filter': {},
        filter: cssFilterValue,
      }),
      'grayscale',
    )
    addDynamicUtilities(
      'filter-hue-rotate',
      value => ({
        '--tw-hue-rotate': `hue-rotate(${value})`,
        '@defaults filter': {},
        filter: cssFilterValue,
      }),
      'hueRotate',
      { supportsNegativeValues: true },
    )
    addDynamicUtilities(
      'filter-invert',
      value => ({
        '--tw-invert': `invert(${value})`,
        '@defaults filter': {},
        filter: cssFilterValue,
      }),
      'invert',
    )
    addDynamicUtilities(
      'filter-saturate',
      value => ({
        '--tw-saturate': `saturate(${value})`,
        '@defaults filter': {},
        filter: cssFilterValue,
      }),
      'saturate',
    )
    addDynamicUtilities(
      'filter-sepia',
      value => ({
        '--tw-sepia': `sepia(${value})`,
        '@defaults filter': {},
        filter: cssFilterValue,
      }),
      'sepia',
    )
    const cssBackdropFilterValue = [
      'var(--tw-backdrop-blur)',
      'var(--tw-backdrop-brightness)',
      'var(--tw-backdrop-contrast)',
      'var(--tw-backdrop-grayscale)',
      'var(--tw-backdrop-hue-rotate)',
      'var(--tw-backdrop-invert)',
      'var(--tw-backdrop-opacity)',
      'var(--tw-backdrop-saturate)',
      'var(--tw-backdrop-sepia)',
    ].join(' ')
    addDynamicUtilities(
      'backdrop-filter-blur',
      value => ({
        '--tw-backdrop-blur': `blur(${value})`,
        '@defaults backdrop-filter': {},
        'backdrop-filter': cssBackdropFilterValue,
      }),
      'backdropBlur',
    )
    addDynamicUtilities(
      'backdrop-filter-brightness',
      value => ({
        '--tw-backdrop-brightness': `brightness(${value})`,
        '@defaults backdrop-filter': {},
        'backdrop-filter': cssBackdropFilterValue,
      }),
      'backdropBrightness',
    )
    addDynamicUtilities(
      'backdrop-filter-contrast',
      value => ({
        '--tw-backdrop-contrast': `contrast(${value})`,
        '@defaults backdrop-filter': {},
        'backdrop-filter': cssBackdropFilterValue,
      }),
      'backdropContrast',
    )
    addDynamicUtilities(
      'backdrop-filter-grayscale',
      value => ({
        '--tw-backdrop-grayscale': `grayscale(${value})`,
        '@defaults backdrop-filter': {},
        'backdrop-filter': cssBackdropFilterValue,
      }),
      'backdropGrayscale',
    )
    addDynamicUtilities(
      'backdrop-filter-hue-rotate',
      value => ({
        '--tw-backdrop-hue-rotate': `hue-rotate(${value})`,
        '@defaults backdrop-filter': {},
        'backdrop-filter': cssBackdropFilterValue,
      }),
      'backdropHueRotate',
      { supportsNegativeValues: true },
    )
    addDynamicUtilities(
      'backdrop-filter-invert',
      value => ({
        '--tw-backdrop-invert': `invert(${value})`,
        '@defaults backdrop-filter': {},
        'backdrop-filter': cssBackdropFilterValue,
      }),
      'backdropInvert',
    )
    addDynamicUtilities(
      'backdrop-filter-opacity',
      value => ({
        '--tw-backdrop-opacity': `opacity(${value})`,
        '@defaults backdrop-filter': {},
        'backdrop-filter': cssBackdropFilterValue,
      }),
      'backdropOpacity',
    )
    addDynamicUtilities(
      'backdrop-filter-saturate',
      value => ({
        '--tw-backdrop-saturate': `saturate(${value})`,
        '@defaults backdrop-filter': {},
        'backdrop-filter': cssBackdropFilterValue,
      }),
      'backdropSaturate',
    )
    addDynamicUtilities(
      'backdrop-filter-sepia',
      value => ({
        '--tw-backdrop-sepia': `sepia(${value})`,
        '@defaults backdrop-filter': {},
        'backdrop-filter': cssBackdropFilterValue,
      }),
      'backdropSepia',
    )

    // Tables
    addUtilities({
      '.border-collapse-collapse': { 'border-collapse': 'collapse' },
      '.border-collapse-separate': { 'border-collapse': 'separate' },
    })
    addDynamicUtilities('border-spacing', null, 'borderSpacing')
    addUtilities({
      '.table-layout-auto': { 'table-layout': 'auto' },
      '.table-layout-fixed': { 'table-layout': 'fixed' },
    })
    addUtilities({
      '.caption-side-top': { 'caption-side': 'top' },
      '.caption-side-bottom': { 'caption-side': 'bottom' },
    })

    // Transitions & Animation
    addUtilities({
      '.transition-property-none': { 'transition-property': 'none' },
      '.transition-property-all': { 'transition-property': 'all' },
      '.transition-property-opacity': { 'transition-property': 'opacity' },
    })
    addDynamicUtilities('transition-duration', null, 'transitionDuration')
    addDynamicUtilities(
      'transition-timing-function',
      null,
      'transitionTimingFunction',
    )
    addDynamicUtilities('transition-delay', null, 'transitionDelay')
    addDynamicUtilities('animation', null, 'animation')

    // Transforms
    const cssTransformValue = [
      'translate(var(--tw-translate-x), var(--tw-translate-y))',
      'rotate(var(--tw-rotate))',
      'skewX(var(--tw-skew-x))',
      'skewY(var(--tw-skew-y))',
      'scaleX(var(--tw-scale-x))',
      'scaleY(var(--tw-scale-y))',
    ].join(' ')
    addDynamicUtilities(
      'transform-scale',
      value => ({
        '@defaults transform': {},
        '--tw-scale-x': value,
        '--tw-scale-y': value,
        transform: cssTransformValue,
      }),
      'scale',
    )
    addDynamicUtilities(
      'transform-scale-x',
      value => ({
        '@defaults transform': {},
        '--tw-scale-x': value,
        transform: cssTransformValue,
      }),
      'scale',
    )
    addDynamicUtilities(
      'transform-scale-y',
      value => ({
        '@defaults transform': {},
        '--tw-scale-y': value,
        transform: cssTransformValue,
      }),
      'scale',
    )
    addDynamicUtilities(
      'transform-rotate',
      value => ({
        '@defaults transform': {},
        '--tw-rotate': value,
        transform: cssTransformValue,
      }),
      'rotate',
    )
    addDynamicUtilities(
      'transform-translate-x',
      value => ({
        '@defaults transform': {},
        '--tw-translate-x': value,
        transform: cssTransformValue,
      }),
      'translate',
    )
    addDynamicUtilities(
      'transform-translate-y',
      value => ({
        '@defaults transform': {},
        '--tw-translate-y': value,
        transform: cssTransformValue,
      }),
      'translate',
    )
    addDynamicUtilities(
      'transform-skew-x',
      value => ({
        '@defaults transform': {},
        '--tw-skew-x': value,
        transform: cssTransformValue,
      }),
      'skew',
    )
    addDynamicUtilities(
      'transform-skew-y',
      value => ({
        '@defaults transform': {},
        '--tw-skew-y': value,
        transform: cssTransformValue,
      }),
      'skew',
    )
    addDynamicUtilities('transform-origin', null, 'transformOrigin')

    // Interactivity
    addDynamicUtilities('accent-color', null, 'accentColor')
    addDynamicUtilities('caret-color', null, 'caretColor', { colors: true })
    addUtilities({
      '.resize-none': { resize: 'none' },
      '.resize-vertical': { resize: 'vertical' },
      '.resize-horizontal': { resize: 'horizontal' },
      '.resize-both': { resize: 'both' },
    })
    addUtilities({
      '.scroll-behavior-auto': { 'scroll-behavior': 'auto' },
      '.scroll-behavior-smooth': { 'scroll-behavior': 'smooth' },
    })
    addDynamicUtilities('scroll-margin', null, 'scrollMargin')
    addDynamicUtilities('scroll-margin-top', null, 'scrollMargin')
    addDynamicUtilities('scroll-margin-right', null, 'scrollMargin')
    addDynamicUtilities('scroll-margin-bottom', null, 'scrollMargin')
    addDynamicUtilities('scroll-margin-left', null, 'scrollMargin')
    addDynamicUtilities('scroll-margin-inline', null, 'scrollMargin')
    addDynamicUtilities('scroll-margin-inline-start', null, 'scrollMargin')
    addDynamicUtilities('scroll-margin-inline-end', null, 'scrollMargin')
    addDynamicUtilities('scroll-padding', null, 'scrollPadding')
    addDynamicUtilities('scroll-padding-top', null, 'scrollPadding')
    addDynamicUtilities('scroll-padding-right', null, 'scrollPadding')
    addDynamicUtilities('scroll-padding-bottom', null, 'scrollPadding')
    addDynamicUtilities('scroll-padding-left', null, 'scrollPadding')
    addDynamicUtilities('scroll-padding-inline', null, 'scrollPadding')
    addDynamicUtilities('scroll-padding-inline-start', null, 'scrollPadding')
    addDynamicUtilities('scroll-padding-inline-end', null, 'scrollPadding')
    addUtilities({
      '.scroll-snap-align-start': { 'scroll-snap-align': 'start' },
      '.scroll-snap-align-end': { 'scroll-snap-align': 'end' },
      '.scroll-snap-align-center': { 'scroll-snap-align': 'center' },
      '.scroll-snap-align-none': { 'scroll-snap-align': 'none' },
    })
    addUtilities({
      '.scroll-snap-stop-normal': { 'scroll-snap-stop': 'normal' },
      '.scroll-snap-stop-always': { 'scroll-snap-stop': 'always' },
    })
    addUtilities({
      '.scroll-snap-type-none': { 'scroll-snap-type': 'none' },
      '.scroll-snap-type-x': {
        '@defaults scroll-snap-type': {},
        'scroll-snap-type': 'x var(--tw-scroll-snap-strictness)',
      },
      '.scroll-snap-type-y': {
        '@defaults scroll-snap-type': {},
        'scroll-snap-type': 'y var(--tw-scroll-snap-strictness)',
      },
      '.scroll-snap-type-both': {
        '@defaults scroll-snap-type': {},
        'scroll-snap-type': 'both var(--tw-scroll-snap-strictness)',
      },
      '.scroll-snap-type-mandatory': {
        '--tw-scroll-snap-strictness': 'mandatory',
      },
      '.scroll-snap-type-proximity': {
        '--tw-scroll-snap-strictness': 'proximity',
      },
    })
    const cssTouchActionValue = [
      'var(--tw-pan-x)',
      'var(--tw-pan-y)',
      'var(--tw-pinch-zoom)',
    ].join(' ')
    addUtilities({
      '.touch-action-auto': { 'touch-action': 'auto' },
      '.touch-action-none': { 'touch-action': 'none' },
      '.touch-action-pan-x': {
        '@defaults touch-action': {},
        '--tw-pan-x': 'pan-x',
        'touch-action': cssTouchActionValue,
      },
      '.touch-action-pan-left': {
        '@defaults touch-action': {},
        '--tw-pan-x': 'pan-left',
        'touch-action': cssTouchActionValue,
      },
      '.touch-action-pan-right': {
        '@defaults touch-action': {},
        '--tw-pan-x': 'pan-right',
        'touch-action': cssTouchActionValue,
      },
      '.touch-action-pan-y': {
        '@defaults touch-action': {},
        '--tw-pan-y': 'pan-y',
        'touch-action': cssTouchActionValue,
      },
      '.touch-action-pan-up': {
        '@defaults touch-action': {},
        '--tw-pan-y': 'pan-up',
        'touch-action': cssTouchActionValue,
      },
      '.touch-action-pan-down': {
        '@defaults touch-action': {},
        '--tw-pan-y': 'pan-down',
        'touch-action': cssTouchActionValue,
      },
      '.touch-action-pinch-zoom': {
        '@defaults touch-action': {},
        '--tw-pinch-zoom': 'pinch-zoom',
        'touch-action': cssTouchActionValue,
      },
      '.touch-action-manipulation': { 'touch-action': 'manipulation' },
    })
    addUtilities({
      '.user-select-none': { 'user-select': 'none' },
      '.user-select-text': { 'user-select': 'text' },
      '.user-select-all': { 'user-select': 'all' },
      '.user-select-auto': { 'user-select': 'auto' },
    })
    addUtilities({
      '.will-change-auto': { 'will-change': 'auto' },
      '.will-change-scroll-position': { 'will-change': 'scroll-position' },
      '.will-change-contents': { 'will-change': 'contents' },
      '.will-change-transform': { 'will-change': 'transform' },
    })

    // SVG
    addDynamicUtilities('fill', null, 'fill')
    addDynamicUtilities('stroke', null, 'stroke')
    addDynamicUtilities('stroke-width', null, 'strokeWidth')

    // Accessibility
    // addDynamicUtilities('screen-reader-only', 'srOnly')
  },
  {
    theme: {
      // Common
      colors: {
        '[]': '[]',
        inherit: 'inherit',
        currentColor: 'currentColor',
        transparent: 'transparent',
      },
      spacing: {
        '[]': '[]',
      },

      // Layout
      aspectRatio: {
        '[]': '[]',
        auto: 'auto',
      },
      columns: {
        '[]': '[]',
        auto: 'auto',
      },
      inset: {
        '[]': '[]',
      },
      zIndex: {
        '[]': '[]',
        auto: 'auto',
      },

      // Flexbox & Grid
      flexBasis: {
        '[]': '[]',
        auto: 'auto',
      },
      flexGrow: {
        '[]': '[]',
      },
      flexShrink: {
        '[]': '[]',
      },
      order: {
        '[]': '[]',
      },
      gridTemplateColumns: {
        '[]': '[]',
        none: 'none',
      },
      gridColumn: {
        '[]': '[]',
        auto: 'auto',
      },
      gridColumnStart: {
        '[]': '[]',
        auto: 'auto',
      },
      gridColumnEnd: {
        '[]': '[]',
        auto: 'auto',
      },
      gridTemplateRows: {
        '[]': '[]',
        none: 'none',
      },
      gridRow: {
        '[]': '[]',
        auto: 'auto',
      },
      gridRowStart: {
        '[]': '[]',
        auto: 'auto',
      },
      gridRowEnd: {
        '[]': '[]',
        auto: 'auto',
      },
      gridAutoColumns: {
        '[]': '[]',
      },
      gridAutoRows: {
        '[]': '[]',
      },

      // Spacing

      // Sizing
      width: {
        '[]': '[]',
        auto: 'auto',
        'min-content': 'min-content',
        'max-content': 'max-content',
        'fit-content': 'fit-content',
      },
      minWidth: {
        '[]': '[]',
        auto: 'auto',
        'min-content': 'min-content',
        'max-content': 'max-content',
        'fit-content': 'fit-content',
      },
      maxWidth: {
        '[]': '[]',
        none: 'none',
        'min-content': 'min-content',
        'max-content': 'max-content',
        'fit-content': 'fit-content',
      },
      height: {
        '[]': '[]',
        auto: 'auto',
        'min-content': 'min-content',
        'max-content': 'max-content',
        'fit-content': 'fit-content',
      },
      minHeight: {
        '[]': '[]',
        auto: 'auto',
        'min-content': 'min-content',
        'max-content': 'max-content',
        'fit-content': 'fit-content',
      },
      maxHeight: {
        '[]': '[]',
        none: 'none',
        'min-content': 'min-content',
        'max-content': 'max-content',
        'fit-content': 'fit-content',
      },

      // Typography
      fontFamily: {
        '[]': '[]',
      },
      fontSize: {
        '[]': '[]',
      },
      fontWeight: {
        '[]': '[]',
      },
      letterSpacing: {
        '[]': '[]',
      },
      lineHeight: {
        '[]': '[]',
      },
      textDecorationThickness: {
        '[]': '[]',
        auto: 'auto',
        'from-font': 'from-font',
      },
      textUnderlineOffset: {
        '[]': '[]',
        auto: 'auto',
      },

      // Backgrounds
      backgroundImage: {
        '[]': '[]',
        none: 'none',
      },

      // Borders
      borderRadius: {
        '[]': '[]',
      },
      borderWidth: {
        '[]': '[]',
      },
      borderColor: {
        '[]': '[]',
        inherit: 'inherit',
        currentColor: 'currentColor',
        transparent: 'transparent',
      },
      outlineWidth: {
        '[]': '[]',
      },
      outlineOffset: {
        '[]': '[]',
      },

      // Effects
      boxShadow: {
        '[]': '[]',
      },
      opacity: {
        '[]': '[]',
      },

      // Filters
      blur: {
        '[]': '[]',
      },
      brightness: {
        '[]': '[]',
      },
      contrast: {
        '[]': '[]',
      },
      dropShadow: {
        '[]': '[]',
      },
      grayscale: {
        '[]': '[]',
      },
      hueRotate: {
        '[]': '[]',
      },
      invert: {
        '[]': '[]',
      },
      saturate: {
        '[]': '[]',
      },
      sepia: {
        '[]': '[]',
      },
      backdropBlur: {
        '[]': '[]',
      },
      backdropBrightness: {
        '[]': '[]',
      },
      backdropContrast: {
        '[]': '[]',
      },
      backdropGrayscale: {
        '[]': '[]',
      },
      backdropHueRotate: {
        '[]': '[]',
      },
      backdropInvert: {
        '[]': '[]',
      },
      backdropOpacity: {
        '[]': '[]',
      },
      backdropSaturate: {
        '[]': '[]',
      },
      backdropSepia: {
        '[]': '[]',
      },

      // Tables

      // Transitions & Animation
      transitionDuration: {
        '[]': '[]',
      },
      transitionTimingFunction: {
        '[]': '[]',
        linear: 'linear',
      },
      transitionDelay: {
        '[]': '[]',
      },
      animation: {
        '[]': '[]',
        none: 'none',
      },

      // Transforms
      scale: {
        '[]': '[]',
      },
      rotate: {
        '[]': '[]',
      },
      translate: {
        '[]': '[]',
      },
      skew: {
        '[]': '[]',
      },

      // Interactivity

      // SVG
      fill: {
        '[]': '[]',
        none: 'none',
        inherit: 'inherit',
        currentColor: 'currentColor',
        transparent: 'transparent',
      },
      stroke: {
        '[]': '[]',
        none: 'none',
        inherit: 'inherit',
        currentColor: 'currentColor',
        transparent: 'transparent',
      },
      strokeWidth: {
        '[]': '[]',
      },

      extend: {},
    },
    corePlugins: [
      // Layout
      'breakAfter',
      'breakBefore',
      'breakInside',
      'float',
      'clear',
      'overflow',

      // Flexbox & Grid
      'justifyItems',
      'justifySelf',
      'alignItems',
      'alignSelf',
      'placeItems',
      'placeSelf',

      // Typography
      'fontVariantNumeric',
      'hyphens',
      'content',

      // Backgrounds

      // Borders

      // Effects

      // Filters
      'filter',
      'backdropFilter',

      // Tables

      // Transitions & Animation

      // Transforms
      'transform',

      // Interactivity
      'appearance',
      'cursor',
      'pointerEvents',

      // SVG

      // Accessibility
    ],
  },
)

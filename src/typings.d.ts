interface CSSModule {
  [className: string]: string
}

// type shims for CSS modules

declare module '*.module.css' {
  const cssModule: CSSModule
  export = cssModule
}

// type shims for Typography themes
declare module 'typography-theme-kirkham' {
  import { TypographyOptions } from 'typography'

  const Theme: TypographyOptions

  export = Theme
}

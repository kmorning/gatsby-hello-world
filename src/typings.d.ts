interface CSSModule {
  [className: string]: string
}

// type shims for CSS modules

declare module '*.module.css' {
  const cssModule: CSSModule
  export = cssModule
}

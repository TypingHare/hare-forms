// eslint-disable-next-line @typescript-eslint/no-unused-vars
// noinspection ES6UnusedImports
import { Theme } from '@mui/material/styles'
import { SimplePaletteColorOptions } from '@mui/material/styles/createPalette'

declare module '@mui/material/styles' {
    interface TypeBackground {
        primary: SimplePaletteColorOptions
        secondary: SimplePaletteColorOptions
    }

    interface Theme {
        background: TypeBackground
    }

    // noinspection JSUnusedGlobalSymbols
    interface ThemeOptions {
        background?: Partial<TypeBackground>
    }
}

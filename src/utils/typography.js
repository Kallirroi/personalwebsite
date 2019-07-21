import Typography from 'typography'
import theme from '../../theme'

const options = {
  headerFontFamily: [`Inter UI`, `sans-serif`],
  bodyFontFamily: [`Inter UI`, `sans-serif`],
  overrideStyles: () => {
    return {
      'h1,h2,h3,h4,h5,h6 > a': {
        fontFamily: theme.headerFontFamily,
      },
      a: {
        textDecoration: `none`,
        fontWeight: `600`,
        fontSize: 'inherit',
        color: '#000',
        fontFamily: theme.bodyFontFamily,
      },
    }
  },
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

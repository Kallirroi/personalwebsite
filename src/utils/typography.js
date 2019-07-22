import Typography from 'typography'
import theme from '../../theme'

const options = {
  headerFontFamily: [`Standard`, `sans-serif`],
  bodyFontFamily: [`Standard`, `sans-serif`],
  overrideStyles: () => {
    return {
      'h1,h2,h3,h4,h5,h6, div, p, a, span': {
        fontFamily: `'Standard', 'Inter UI', 'Helvetica Neue', 'sans-serif'`,
        fontSize: '14px',
        lineHeight: '18px',
      },
      'a': {
        textDecoration: 'none',
        borderBottom: '0.5px solid',
        color: '#000',
      },
      'a:hover': {
        color: '#bbb',
        // color: '#00d3e2',
        // color: '#2441B7',
        // color: '#F22F37',
      },
      'ul, li': {
        // listStyleType: 'none',
        padding: 0,
        margin: 0,
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

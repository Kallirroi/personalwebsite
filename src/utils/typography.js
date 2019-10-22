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
        // color: '#ebef00',
        color: '#63D7BF',
        // color: '#2441B7',
        // color: '#F22F37',
      },
      'ul, li': {
        // listStyleType: 'none',
        padding: 0,
        margin: 0,
      },
      '@media screen and (max-width: 760px)': {
        '.navbar': {
          // background: 'cyan',
          // letterSpacing: '2px',
          // position: 'absolute',
          // marginTop: 0,
          // width: '100vw',
          // top: 0,
        },
        '.main': {
          // background: '#ff0',
        },
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

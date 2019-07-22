import Typography from 'typography'
import theme from '../../theme'

const options = {
  headerFontFamily: [`Inter UI`, `sans-serif`],
  bodyFontFamily: [`Inter UI`, `sans-serif`],
  overrideStyles: () => {
    return {
      'h1,h2,h3,h4,h5,h6, div, p, a, span': {
        fontFamily: 'Inter UI',
        fontSize: '14px',
        lineHeight: '18px'
      },
      'a': {
        textDecoration: 'none',
        borderBottom: '1px solid',
        color: '#000',
        fontFamily: 'Inter UI',
      },
      'a:hover': {
        color: '#fff',
        background: '#000',
      },
      'ul, li': {
        listStyleType: 'none',
        padding: 0,
        margin: 0
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

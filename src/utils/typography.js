import Typography from 'typography';
const options = {
  headerFontFamily: [`Standard`, `sans-serif`],
  bodyFontFamily: [`Standard`, `sans-serif`],
  overrideStyles: () => {
    return {
      'h1,h2,h3,h4,h5,h6, div, p, a, span': {
        fontFamily: `'Standard', 'Inter UI', 'Helvetica Neue', 'sans-serif'`,
        fontSize: '13px',
        lineHeight: '18px',
      },
      'a': {
        textDecoration: 'none',
        borderBottom: '0.5px solid',
        color: '#000',
        cursor: 'pointer'
      },
      'a:hover': {
        color: '#ff7070'
      },
      'ul, li': {
        // listStyleType: 'none',
        padding: 0,
        margin: 0,
        fontSize: '13px',
        lineHeight: '18px'
      },
      '.post': {
        maxWidth: '45vw'
      },
      'main.main > .postContent': {
          maxWidth: '35vw'
      },
      '@media screen and (max-width: 760px)': {
        'h1,h2,h3,h4,h5,h6, div, p, a, span': {
          fontFamily: `'Standard', 'Inter UI', 'Helvetica Neue', 'sans-serif'`,
          fontSize: '13px',
          lineHeight: '17px'
        },
        'ul, li': {
          // listStyleType: 'none',
          padding: 0,
          margin: 0,
        },
        '.post': {
          maxWidth: '90vw',
        },
        'main': {
          flexDirection: 'row',
          flexWrap: 'nowrap',
          margin: '0 3vw'
        },
        'main.main > .post': {
          maxWidth: '50vw' // border: '1px solid'
        },        
        'main.main > .postContent': {
          maxWidth: '90vw'
        }
      }
    };
  }
};
const typography = new Typography(options); // Hot reload typography in development.

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
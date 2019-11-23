import Typography from 'typography';
const options = {
  headerFontFamily: [`Standard`, `sans-serif`],
  bodyFontFamily: [`Standard`, `sans-serif`],
  overrideStyles: () => {
    return {
      'h1,h2,h3,h4,h5,h6, div, p, a, span': {
        fontFamily: `'Standard', 'Inter UI', 'Helvetica Neue', 'sans-serif'`,
        fontSize: '13px',
        lineHeight: '16px',
        cursor: 'url(http://icons.iconarchive.com/icons/iconfactory/copland-1/32/Mac-Classic-icon.png), auto'
      },
      'a': {
        textDecoration: 'none',
        borderBottom: '0.5px solid',
        color: '#000',
        cursor: 'pointer'
      },
      'a:hover': {
        color: '#80A2BC'
      },
      'ul, li': {
        // listStyleType: 'none',
        padding: 0,
        margin: 0,
        fontSize: '13px',
        lineHeight: '18px'
      },
      '.post': {
        maxWidth: '15vw'
      },
      '.layoutChange': {
        cursor: 'pointer'
      },
      '.layoutChange:hover': {
        color: '#ff7070',
        cursor: 'pointer'
      },
      'main.main > .postContent': {
          maxWidth: '35vw'
      },
      '@media screen and (max-width: 760px)': {
        'h1,h2,h3,h4,h5,h6, div, p, a, span': {
          fontFamily: `'Standard', 'Inter UI', 'Helvetica Neue', 'sans-serif'`,
          fontSize: '9px',
          lineHeight: '11px'
        },
        'ul, li': {
          // listStyleType: 'none',
          padding: 0,
          margin: 0,
          fontSize: '9px',
          lineHeight: '14px'
        },
        'main': {
          flexDirection: 'row',
          flexWrap: 'nowrap'
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
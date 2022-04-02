import {future, highlight} from '@mdx-deck/themes';

export default {
  ...future,
  ...highlight,

  styles: {
    h2: {
      textTransform: 'unset',
    },
    h3: {
      textTransform: 'unset',
    },
    h4: {
      textTransform: 'unset',
      fontWeight: 400,
    },
    h5: {
      textTransform: 'unset',
      fontWeight: 400,
    },
    h6: {
      textTransform: 'unset',
      fontWeight: 400,
      letterSpacing: 'unset',
    },
    blockquote: {
      fontStyle: 'italic',
    },
    table: {
      borderCollapse: 'collapse',
    },
    td: {
      padding: '20px',
      fontSize: '24px',
      border: '1px solid white',
    },
    th: {
      padding: '20px',
      fontSize: '24px',
      border: '1px solid white',
    },
    a: {
      color: 'rgb(55, 179, 255)',
    },
  },
  colors: {
    background: 'rgb(0, 28, 58)',
    // primary: 'blue',
  },
};

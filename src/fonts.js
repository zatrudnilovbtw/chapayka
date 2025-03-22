import DoomFont from '/src/assets/fonts/DOOM.ttf';
const fontStyles = `
  @font-face {
    font-family: 'DoomFont';
    src: url(${DoomFont}) format('truetype');
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = fontStyles;
document.head.appendChild(styleSheet);
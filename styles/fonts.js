import { css } from 'styled-components';
import localFont from 'next/font/local'

const CalibreRegularWoff =localFont({ src: '../fonts/Calibre/Calibre-Regular.woff' });
const CalibreRegularWoff2 = localFont({ src: '../fonts/Calibre/Calibre-Regular.woff2'});
const CalibreMediumWoff =localFont({ src: '../fonts/Calibre/Calibre-Medium.woff'});
const CalibreMediumWoff2 =localFont({ src: '../fonts/Calibre/Calibre-Medium.woff2'});
const CalibreSemiboldWoff =localFont({ src:  '../fonts/Calibre/Calibre-Semibold.woff'});
const CalibreSemiboldWoff2 =localFont({ src:  '../fonts/Calibre/Calibre-Semibold.woff2'});

const CalibreRegularItalicWoff =localFont({ src:  '../fonts/Calibre/Calibre-RegularItalic.woff'});
const CalibreRegularItalicWoff2 =localFont({ src:  '../fonts/Calibre/Calibre-RegularItalic.woff2'});
const CalibreMediumItalicWoff=localFont({ src:  '../fonts/Calibre/Calibre-MediumItalic.woff'});
const CalibreMediumItalicWoff2 =localFont({ src:  '../fonts/Calibre/Calibre-MediumItalic.woff2'});
const CalibreSemiboldItalicWoff =localFont({ src:  '../fonts/Calibre/Calibre-SemiboldItalic.woff'});
const CalibreSemiboldItalicWoff2 =localFont({ src:  '../fonts/Calibre/Calibre-SemiboldItalic.woff2'});

const SFMonoRegularWoff =localFont({ src:  '../fonts/SFMono/SFMono-Regular.woff'});
const SFMonoRegularWoff2 =localFont({ src:  '../fonts/SFMono/SFMono-Regular.woff2'});
const SFMonoSemiboldWoff =localFont({ src:  '../fonts/SFMono/SFMono-Semibold.woff'});
const SFMonoSemiboldWoff2 =localFont({ src: '../fonts/SFMono/SFMono-Semibold.woff2'});

const SFMonoRegularItalicWoff =localFont({ src:  '../fonts/SFMono/SFMono-RegularItalic.woff'});
const SFMonoRegularItalicWoff2 =localFont({ src: '../fonts/SFMono/SFMono-RegularItalic.woff2'});
const SFMonoSemiboldItalicWoff =localFont({ src:  '../fonts/SFMono/SFMono-SemiboldItalic.woff'});
const SFMonoSemiboldItalicWoff2 =localFont({ src:  '../fonts/SFMono/SFMono-SemiboldItalic.woff2'});

const calibreNormalWeights = {
  400: [CalibreRegularWoff, CalibreRegularWoff2],
  500: [CalibreMediumWoff, CalibreMediumWoff2],
  600: [CalibreSemiboldWoff, CalibreSemiboldWoff2],
};

const calibreItalicWeights = {
  400: [CalibreRegularItalicWoff, CalibreRegularItalicWoff2],
  500: [CalibreMediumItalicWoff, CalibreMediumItalicWoff2],
  600: [CalibreSemiboldItalicWoff, CalibreSemiboldItalicWoff2],
};

const sfMonoNormalWeights = {
  400: [SFMonoRegularWoff, SFMonoRegularWoff2],
  600: [SFMonoSemiboldWoff, SFMonoSemiboldWoff2],
};

const sfMonoItalicWeights = {
  400: [SFMonoRegularItalicWoff, SFMonoRegularItalicWoff2],
  600: [SFMonoSemiboldItalicWoff, SFMonoSemiboldItalicWoff2],
};

const calibre = {
  name: 'Calibre',
  normal: calibreNormalWeights,
  italic: calibreItalicWeights,
};

const sfMono = {
  name: 'SF Mono',
  normal: sfMonoNormalWeights,
  italic: sfMonoItalicWeights,
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];
    const woff2 = formats[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};

const calibreNormal = createFontFaces(calibre);
const calibreItalic = createFontFaces(calibre, 'italic');

const sfMonoNormal = createFontFaces(sfMono);
const sfMonoItalic = createFontFaces(sfMono, 'italic');

const Fonts = css`
  ${calibreNormal + calibreItalic + sfMonoNormal + sfMonoItalic}
`;

export default Fonts;

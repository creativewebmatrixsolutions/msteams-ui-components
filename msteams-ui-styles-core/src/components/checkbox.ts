import { baseStyle, iconTypes, iconWeights } from 'msteams-ui-icons-core';
import { style } from 'typestyle';
import { chooseStyle, Context } from '../context';

interface CheckboxColors {
  rest: {
    border: string;
    background: string;
    text: string;
  };
  hover: {
    background: string;
    border: string;
  };
  disabled: {
    background: string;
    border: string;
    text: string;
  };
  focus: {
    outline: string;
  };
  checked: {
    background: string;
    border: string;
    text: string;
  };
  checkmark: string;
  container: string;
}

function base(context: Context, colors: CheckboxColors) {
  baseStyle(iconWeights.light);
  const { rem, font } = context;
  const { sizes } = font;

  return {
    container: style({
      border: 'none',
      background: colors.container,
      display: 'flex',
      alignItems: 'center',
      outline: 'none',
      $nest: {
        '& + &' : {
          marginTop: rem(0.8),
        },
      },
    }),
    checkbox: style({
      position: 'relative',
      ['-webkit-user-select']: 'none',
      ['-moz-user-select']: 'none',
      ['-ms-user-select']: 'none',
      userSelect: 'none',
      display: 'inline-block',
      cursor: 'pointer',
      padding: 0,
      font: 'inherit',
      margin: rem(0.2),
      width: rem(1.6),
      height: rem(1.6),
      border: `${rem(0.1)} solid`,
      borderColor: colors.rest.border,
      background: colors.rest.background,
      borderRadius: rem(0.3),
    }, {
      $nest: {
        '&:hover': {
          background: colors.hover.background,
          borderColor: colors.hover.border,
        },
        '&:disabled': {
          background: colors.disabled.background,
          borderColor: colors.disabled.border,
          cursor: 'default',
          $nest: {
            '& + label': {
              color: colors.disabled.text,
              cursor: 'default',
            },
          },
        },
        '&:focus': {
          boxShadow: `0 0 0 ${rem(0.2)} ${colors.focus.outline}`,
          outline: 'none',
        },
        '&-checked': {
          borderColor: colors.checked.border,
          background: colors.checked.background,
          $nest: {
            '&:hover': {
              borderColor: colors.checked.border,
              background: colors.checked.background,
            },
            '& + label': {
              color: colors.checked.text,
            },
            '&::before': {
              fontFamily: 'MSTeamsIcons-Light',
              content: iconTypes.checkmark,
              color: colors.checkmark,
              position: 'absolute',
              fontSize: rem(1.2),
              top: rem(0.1),
              left: rem(0.1),
              width: rem(1.2),
              height: rem(1.2),
              padding: 0,
              lineHeight: rem(1),
            },
          },
        },
      },
    }),
    label: style(sizes.caption, {
      marginLeft: rem(1),
      cursor: 'pointer',
      color: colors.rest.text,
    }),
  };
}

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      border: colors.light.gray02,
      background: colors.transparent,
      text: colors.light.gray02,
    },
    hover: {
      border: colors.light.gray02,
      background: colors.transparent,
    },
    disabled: {
      border: colors.light.gray06,
      background: colors.light.gray10,
      text: colors.light.gray06,
    },
    focus: {
      outline: colors.light.brand00Dark,
    },
    checked: {
      background: colors.light.brand00,
      border: colors.light.brand00,
      text : colors.light.black,
    },
    checkmark: colors.light.white,
    container: colors.transparent,
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      border: colors.dark.gray02,
      background: colors.transparent,
      text: colors.dark.gray02,
    },
    hover: {
      border: colors.dark.gray02,
      background: colors.transparent,
    },
    disabled: {
      border: colors.dark.gray06,
      background: colors.dark.gray10,
      text: colors.dark.gray06,
    },
    focus: {
      outline: colors.dark.brand00Light,
    },
    checked: {
      background: colors.dark.brand00,
      border: colors.dark.brand00,
      text : colors.dark.white,
    },
    checkmark: colors.dark.black,
    container: colors.transparent,
  });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      border: colors.highContrast.white,
      background: colors.transparent,
      text : colors.highContrast.white,
    },
    hover: {
      border: colors.highContrast.white,
      background: colors.transparent,
    },
    disabled: {
      background: colors.transparent,
      border: colors.highContrast.green,
      text: colors.highContrast.green,
    },
    focus: {
      outline: colors.highContrast.yellow,
    },
    checked: {
      background: colors.highContrast.blue,
      border: colors.highContrast.blue,
      text : colors.highContrast.white,
    },
    checkmark: colors.highContrast.black,
    container: colors.transparent,
  });
}

export function checkbox(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}

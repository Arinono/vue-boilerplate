module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './public/index.html',
      './src/App.vue',
      './src/**/*.vue',
    ],
  },
  theme: {
    extend: {
      colors: {
        red: {
          light: '#FF3B30',
          dark: '#FF453A',
        },
        orange: {
          light: '#FF9500',
          red: '#FF9F0A',
        },
        yellow: {
          light: '#FFCC00',
          dark: '#FFD60A',
        },
        green: {
          light: '#34C759',
          dark: '#32D74B',
        },
        teal: {
          light: '#5AC8FA',
          dark: '#64D2FF',
        },
        blue: {
          light: '#007AFF',
          dark: '#0A84FF',
        },
        indigo: {
          light: '#5856D6',
          dark: '#5E5CE6',
        },
        purple: {
          light: '#AF52DE',
          dark: '#BF5AF2',
        },
        pink: {
          light: '#FF2D55',
          dark: '#FF2D55',
        },
        'light-grey': {
          1: '#8E8E93',
          2: '#AEAEB2',
          3: '#C7C7CC',
          4: '#D1D1D6',
          5: '#E5E5EA',
          6: '#F2F2F7',
        },
        'dark-grey': {
          1: '#8E8E93',
          2: '#636366',
          3: '#48484A',
          4: '#3A3A3C',
          5: '#2C2C2E',
          6: '#1C1C1E',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}

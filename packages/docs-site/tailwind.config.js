module.exports = {
  purge: {
    enabled: false,
    content: [],
  },
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: {
          DEFAULT: "#FFFFFF",
          "10": "rgba(255, 255, 255, 0.1)"
        },
        black: '#000000',
        surface: {
          "50": "#F1F6FA",
          "100": "#E7EEF4",
          "200": "#D2DEE4",
          "300": "#B8C1C6",
          "400": "#7A8288",
          "500": "#384147",
          "600": "#172126",
          "700": "#141C20",
          "800": "#0F1519",
          "900": "#0A0F11",
          "950": "#06080A"
        },
        primary: {
          "100": "#FFE1D7",
          "200": "#F9C7B7",
          "300": "#FFA688",
          "400": "#F57F58",
          "500": "#FF5F29",
          "600": "#CD491E",
          "700": "#A93C19",
          "800": "#802A0E",
          "900": "#441404",
          "alert": "#DB324B"
        },
        secondary: {
          "100": "#A8C1FA",
          "200": "#7DA2F7",
          "300": "#5283F5",
          "400": "#3D74F4",
          "500": "#2765F3",
          "600": "#2254C9",
          "700": "#1D47AC",
          "800": "#1C3F96",
          "900": "#1C367B",
        },
        success: {
          DEFAULT: "#20B25B",
          "100": "#A5E6BF",
          "200": "#78D99F",
          "300": "#4BCD7F",
          "400": "#1FC160",
          "500": "#20B25B",
          "600": "#22A456",
          "700": "#149247",
          "800": "#096930",
        },
        info: {
          DEFAULT: "#05C1E7",
          "100": "#99EDFD",
          "200": "#66E4FD",
          "300": "#33DBFC",
          "400": "#00D2FC",
          "500": "#05C1E7",
          "600": "#0AB2D3",
          "700": "#029AB8",
          "800": "#035F86"
        },
        warning: {
          DEFAULT: "#EAB509",
          "100": "#FFE79B",
          "200": "#FFDB69",
          "300": "#FFCF37",
          "400": "#FFCA1E",
          "500": "#EAB509",
          "600": "#D6A60E",
          "700": "#AC7305",
          "800": "#613305"
        },
        error: {
          DEFAULT: "#C93148",
          "100": "#FAA8AE",
          "200": "#F77D86",
          "300": "#F5525E",
          "400": "#DB324B",
          "500": "#C93148",
          "600": "#B93246",
          "700": "#B4263B",
          "800": "#A31228"
        },
      },
      boxShadow: {
        sm: '0px 2px 8px rgba(15, 21, 25, 0.12)',
        DEFAULT: '0px 4px 12px rgba(15, 21, 25, 0.12)',
        md: '0px 8px 16px rgba(15, 21, 25, 0.12)',
        lg: '0px 12px 24px 4px rgba(15, 21, 25, 0.12)',
        xl: '0px 16px 28px 8px rgba(15, 21, 25, 0.12)',
        '2xl': '0px 24px 32px 12px rgba(15, 21, 25, 0.12)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
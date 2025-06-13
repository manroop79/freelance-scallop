import type { Config } from "tailwindcss";

import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(dropdown|menu|divider|popover|button|ripple|spinner).js"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'], // Add Manrope font
        "clash-grotesk": ['Clash Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 20px 22px 0 rgba(0, 0, 0, 0.25)', // Adjust the color and opacity as needed
        'custom-blue-bottom': '0 10px 20px -10px rgba(26, 106, 244, 0.5)' 
      },
      mixBlendMode: {
        'luminosity': 'luminosity',
      },
      brightness: {
        '80': '.8',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover', 'focus'],
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			jost: ["Jost", "sans-serif"]
  		},
  		colors: {
  			primary: {
  				'5': '#F2F2F2',
  				'10': '#E5E5E5',
  				'20': '#CCCCCC',
  				'80': '#3D3D3D',
  				'90': '#292929',
  				'100': '#A3A3A3',
  				'200': '#8E8E8E',
  				'300': '#787878',
  				'400': '#636363',
  				'500': '#4E4E4E',
  				'600': '#393939',
  				'700': '#242424',
  				'800': '#0F0F0F',
  				'900': '#000000',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'5': '#FBFDF6',
  				'10': '#F7FDEB',
  				'20': '#F1F9DB',
  				'80': '#C2EC95',
  				'90': '#A2DC63',
  				'100': '#E3F7BA',
  				'200': '#D6F3A3',
  				'300': '#C7F087',
  				'400': '#BBED72',
  				'500': '#A7E051',
  				'600': '#8FC737',
  				'700': '#74A828',
  				'800': '#647B1D',
  				'900': '#5B7121',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			tertiary: {
  				'5': '#FEF7F9',
  				'10': '#FCF0F3',
  				'20': '#F9DEE5',
  				'80': '#F690A8',
  				'90': '#F26893',
  				'100': '#F3A4C3',
  				'200': '#F28EB7',
  				'300': '#F170A5',
  				'400': '#F04C97',
  				'500': '#EC1C84',
  				'600': '#C31578',
  				'700': '#940D68',
  				'800': '#660859',
  				'900': '#430344'
  			},
  			dark: {
  				'5': '#F2F2F2',
  				'10': '#E5E5E5',
  				'20': '#CCCCCC',
  				'80': '#333333',
  				'90': '#1A1A1A',
  				'500': '#000000'
  			},
  			gray: {
  				'5': '#F7F7F7',
  				'10': '#F2F2F2',
  				'20': '#E5E5E5',
  				'80': '#B5B5B5',
  				'90': '#A0A0A0',
  				'500': '#8C8C8C'
  			},
  			light: {
  				'5': '#FDFEFE',
  				'10': '#FBFDFD',
  				'20': '#F6FBFB',
  				'80': '#E0EFF0',
  				'90': '#D3EBEC',
  				'500': '#C6E6E7'
  			},
  			white: {
  				'5': '#FFFFFF',
  				'10': '#FFFFFF',
  				'20': '#FFFFFF',
  				'80': '#FFFFFF',
  				'90': '#FFFFFF',
  				'500': '#FFFFFF'
  			},
  			'color-options': {
  				'1': '#00C99E',
  				'2': '#00A4B8',
  				'3': '#985CFF',
  				'4': '#3B5FFF'
  			},
  			gradient: {
  				'1': 'linear-gradient(90deg, #56CCF2 0%, #2F80ED 100%)',
  				'2': 'linear-gradient(90deg, #6DD5FA 0%, #3494E6 100%)',
  				'3': 'linear-gradient(90deg, #654EA3 0%, #EA5C54 100%)'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				'custom-red': '0 0 2em #a6333a',
			},
			backgroundImage: {
				user: "url('/public/img/user.png')",
				search: "url('/public/img/search.png')",
				cart: "url('/public/img/cart.png')",
				hero: "url('/public/img/big-tyre.png')",
			},
			colors: {
				'custom-gray-800': '#343A40',
				'custom-red': '#900009',
				'custom-blue': '#009DDC',
			},
			keyframes: {
				'move-down': {
					'0%': { transform: 'translateY(-5px)', opacity: '0' },
					'50%': { opacity: '0.5' },
					'100%': { opacity: '1', transform: 'translateY(0px)' },
				},
				'move-up': {
					'0%': { transform: 'translateY(5px)', opacity: '0' },
					'50%': { opacity: '0.5' },
					'100%': { opacity: '1', transform: 'translateY(0px)' },
				},
				customBounce: {
					'0%': { transform: 'translateY(40px)', opacity: '0' },
					'50%': { opacity: '0.5', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0px)' },
				},
				customBounceOpposite: {
					'0%': { transform: 'translateY(0px)', opacity: '1' },
					'50%': { opacity: '0.5', transform: 'translateY(20px)' },
					'100%': { opacity: '0', transform: 'translateY(40px)' },
				},
			},
			animation: {
				'move-up': 'move-up 1s ease-in-out',
				'move-down': 'move-down 1.5s ease-in-out',
				customBounce: 'customBounce .2s linear',
				customBounceOpposite: 'customBounceOpposite .2s linear',
			},
		},
	},
	variants: {
		extend: {
			boxShadow: ['hover'],
		},
	},
	plugins: [],
};

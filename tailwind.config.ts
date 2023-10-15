import type {Config} from 'tailwindcss'

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            gridTemplateRows: {
                'layout': 'auto 1fr',
            },
            gridTemplateColumns: {
                'layout': 'minmax(150px, 200px) 1fr',
            },
        },
    },
    plugins: [],
}
export default config

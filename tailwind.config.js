module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      backgroundImage: {
        'cool-gradient':
          'linear-gradient(45deg, rgb(250, 218, 97) 0%, rgb(255, 145, 136) 50%, rgb(255, 90, 205) 100%)',
        'cool-gradient2':
          'linear-gradient(109.6deg, rgb(163, 213, 255) 11.3%, rgb(4, 137, 137) 86.7%)',
        'cool-gradient3':
          'radial-gradient(circle at -24.7% -47.3%, rgb(6, 130, 165) 0%, rgb(34, 48, 86) 66.8%, rgb(15, 23, 42) 100.2%)',

        'login-bg-light': 'linear-gradient(135deg, #6352ec 40%, #be68c7 100%)',
        'login-box-bg':
          'linear-gradient(135deg, #897af5 40%, #cd70c1, #f97d87 100.2%)',

        'admin-bg-light':
          'linear-gradient(35.7deg, rgb(105, 238, 218) 31.2%, rgb(114, 80, 228) 81.4%)',
        'admin-bg-dark':
          'linear-gradient(-45deg, #0f2027, #203a43, #2c5364, #00ffff)',
        'glow-hover':
          'linear-gradient(-45deg,transparent,rgba(255,255,255,0.5),transparent)',
        'hero-light':
          'linear-gradient(to bottom, rgba(79, 70, 229, 0.9) 1%, var(--button))',
      },
      screens: {
        xs: { max: '480px' },
      },

      keyframes: {
        hovering: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        rotating: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        floating: {
          '0%,100%': { transform: 'translateY(-20px) ' },
          '50%': { transform: 'translateY(10px) ' },
        },
        fadeslideNEXT: {
          '0%': { transform: 'translateX(-40px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
        fadeslidePREV: {
          '0%': { transform: 'translateX(40px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
      },
      animation: {
        hovering: 'hovering 3s linear 0s infinite normal none running',
        slowhovering: 'floating 5s linear 0s infinite normal none running',
        rotating: 'rotating 60s linear 0s infinite normal none running',
        spinning: 'rotating 30s linear 0s infinite normal none running',
        fadeslideNEXT: 'fadeslideNEXT 0.5s ease-out forwards',
        fadeslidePREV: 'fadeslidePREV 0.5s ease-out forwards',
      },

      transitionTimingFunction: {
        elastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
};

// config from railway? or from basic tanstack start template?

// import { defineConfig } from 'vite'
// import { devtools } from '@tanstack/devtools-vite'

// import { tanstackStart } from '@tanstack/react-start/plugin/vite'

// import viteReact from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// import { nitro } from 'nitro/vite'

// const config = defineConfig({
//   resolve: { tsconfigPaths: true },
//   plugins: [
//     devtools(),
//     nitro({ rollupConfig: { external: [/^@sentry\//] } }),
//     tailwindcss(),
//     tanstackStart(),
//     viteReact(),
//   ],
// })

// old vite.config.ts
// import { defineConfig } from 'vite'
// import { devtools } from '@tanstack/devtools-vite'
// import { tanstackStart } from '@tanstack/react-start/plugin/vite'
// import viteReact from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// import { nitro } from 'nitro/vite'

// export default defineConfig({
//   resolve: { tsconfigPaths: true },
//   plugins: [
//     devtools(),
//     nitro({ rollupConfig: { external: [/^@sentry\//] } }),
//     tailwindcss(),
//     tanstackStart(),
//     viteReact(),
//   ],
// })

// new!
// vite.config.ts
import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

export default defineConfig(({ command }) => ({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    command === 'build' &&
      nitro({ rollupConfig: { external: [/^@sentry\//] } }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
}))
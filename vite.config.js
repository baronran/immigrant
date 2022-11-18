import {defineConfig} from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

const srcPath = resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ vue()  ],
  base: './',
  // publicDir: resolve('static'),//静态资源文件夹
  build: {
    minify:"terser",
    // 打包去除console打印信息
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        //静态资源分类打包
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      }
    }
  },
  resolve: {
    alias: {
      '@/': `${srcPath}/`
    }
  },

  devServer: {
    // overlay: {
    //   warnings: false,
    //   errors: false
    // },
    open: false,
    proxy: {
      [process.env.VUE_APP_API]: {
        target: 'http://192.168.1.250:9101/',
        changeOrigin: true,
        // pathRewrite: {
        //   ['^' + process.env.VUE_APP_API]: ''
        // },
      },
    },
  }


})

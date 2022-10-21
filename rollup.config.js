import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript'
import sourcemaps from 'rollup-plugin-sourcemaps'
import ts from 'rollup-plugin-typescript2'
import path from 'path'


export default {
  input: './src/index.js',
  output: {
    file: './lib/index.js',
    format: 'esm'
  },
  plugins: [
    typescript({
    exclude: "node_modules/**",
    typescript: require("typescript")
    }),
    babel(),
    postcss(),
    sourcemaps(),
    ts({
      tsconfig: path.resolve(__dirname, 'tsconfig.json')
  }),
  ],
  // external 代表的是从外部引入的包
  external: ['react']
}
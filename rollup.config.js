import commonJs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import babelPlugin from 'rollup-plugin-babel';
import pkg from './package.json';

const { dependencies } = pkg;
const external = typeof dependencies === 'object' ? Object.keys(dependencies) : [];

export default {
    input: pkg.main.replace('dist', 'src'),
    output: {
        file: pkg.main,
        format: 'esm',
        sourcemap: true,
    },
    external,
    plugins: [
        babelPlugin({
            exclude: /node_modules/,
            babelrc: true,
            comments: false,
        }),
        commonJs({
            include: 'node_modules/**',
        }),
        nodeResolve({
            mainFields: ['index']
        }),
    ],
}

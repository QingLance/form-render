import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from "rollup-plugin-babel";
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';

export default {
        input: 'src/index.js',
        output: {
            name: 'form-render.js',
            file: './lib/form-render.js',
            format: 'umd'
        },
        plugins: [
            resolve({
                extensions: ['.vue', '.js'],
            }), 
            commonjs(),
            vue(),
            babel({
                extensions: ['.vue', '.js'],
            }),
            // terser()
        ]
};

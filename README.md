# browserify-gulp-bundler
My personal solution for browsery + gulp use

# install
add this repo to your package.json and do `npm up`

# usage
## `bundler(pattern, opts)`
`pattern` is a glob pattern to match all the possible entry points of your application.

### `opts`
`opts` is an object containing configuration options.

*Boolean* `opts.watch` *(default: false)* indicate if you want to use watchify or not to use browserify in watch mode.

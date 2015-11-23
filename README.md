# browserify-gulp-bundler
My personal solution for browsery + gulp use

# install
add this repo to your package.json and do `npm up`

# usage
## `bundler(pattern, opts)`
`pattern` is a glob pattern to match all the possible entry points of your application.

### `opts`
`opts` is an object containing configuration options.

*Object* `opts.pipes`
[Lazypipe](https://github.com/OverZealous/lazypipe) object to magically pipe something at the end of the browserify stream.

*Boolean* `opts.watch` *(default: false)*
indicate if you want to use watchify or not to use browserify in watch mode.

*String* `opts.basePath`
Manual base path of the glob pattern

*Boolean* `opts.sourcemaps` *(default: false)*

*Array* `opts.paths` *(default: ['node_modules'])*

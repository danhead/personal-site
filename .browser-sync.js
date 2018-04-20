module.exports= {
  proxy: '127.0.0.1:3000',
  port: 3001,
  files: [
    'dist/**/*',
    'public/**/*',
    'server/**/*',
    'index.js',
  ],
  watchTask: true,
  notify: false,
};

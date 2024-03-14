const shell = require('shelljs');

// Copy statics folder to build folder
shell.cp('-R', 'public', 'build/public');
const content = `var SystemConfig = {
  LANG: 'vi',
  URL_API: '',
};`;
shell.echo(content).to('build/SystemConfig.js');

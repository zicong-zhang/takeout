import path from 'path';

const resolve = _path => path.join(__dirname, '../', _path);

// 在这里配置别名路径
const alias = {
  '@uni': resolve('./frontend/uni'),
  '@visual': resolve('./frontend/visual'),
}

export default _path => {
  const hasAlias = /^@/.test(_path);

  if (hasAlias) {
    const [aliasKey, ...otherPath] = _path.split('/');
    const aliasPath = alias[aliasKey];
    
    return `${aliasPath}/${otherPath.join('/')}`
  }

  return _path;
}

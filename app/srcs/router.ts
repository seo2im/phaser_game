export default (path: string, isback?: boolean) => {
  const paths = path.split('/').filter(e => e !== '');
  const app = document.getElementById('root') as HTMLDivElement;

  if (!isback) window.history.pushState({}, path, window.location.origin + path);  
};

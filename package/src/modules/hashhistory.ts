import { parseAttr } from '../util';

export function hashNavigationConfig($this: JQuery<HTMLElement>) {
  return {
    //getSlideIndex
    replaceState: parseAttr($this, 'hash-replace-state', false),
    watchState: parseAttr($this, 'hash-watch-state', false),
  };
}

export function historyNavigationConfig($this: JQuery<HTMLElement>) {
  return {
    keepQuery: parseAttr($this, 'history-keep-query', false),
    key: parseAttr($this, 'history-key', 'slides'),
    replaceState: parseAttr($this, 'history-replace-state', false),
    root: parseAttr($this, 'history-root', ''),
  };
}

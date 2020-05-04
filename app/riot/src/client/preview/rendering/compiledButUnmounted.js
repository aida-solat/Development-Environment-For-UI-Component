import { mount } from 'riot';

export default function renderCompiledButUnmounted(component) {
  mount('storybook-root', component.tagName, component.opts || {});
}

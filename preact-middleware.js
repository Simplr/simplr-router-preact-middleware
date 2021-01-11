import { h, render } from "preact";

class SimplrRouterPreactMiddlewareInstance {
  addViewToContainerOverride(container, viewObject) {
    render(viewObject, container);
  }

  async createComponentOverride(view) {
    if (view.import) {
      await view.import();
    }

    return h(view.component, view.params, null);
  }
}

export default function SimplrRouterPreactMiddleware() {
  return new SimplrRouterPreactMiddlewareInstance();
}

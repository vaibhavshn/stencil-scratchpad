import { Component, Host, h, Element } from '@stencil/core';

declare global {
  interface Window {
    $in: WeakMap<any, any>;
  }
}

@Component({
  tag: 'my-test',
  styleUrl: 'my-test.css',
  shadow: true,
})
export class MyTest {
  count = 0;

  @Element() host;

  connectedCallback() {
    console.log('connected');

    const w = new WeakMap();
    w.set(this, 'MyTest');
    window.$in = w;
  }

  disconnectedCallback() {
    console.log('disconnected');
  }

  render() {
    return (
      <Host
        onClick={() => {
          console.log('my-test was clicked', this.count++);
        }}
      >
        this is <code>my-test</code>
      </Host>
    );
  }
}

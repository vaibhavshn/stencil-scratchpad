import { Component, h, State, Watch } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @State() visible = true;

  private toggle = () => {
    this.visible = !this.visible;
  };

  @Watch('visible')
  visibleChanged() {
    if (this.visible) return;

    requestIdleCallback(() => {
      console.log('$in', window.$in);
    });
  }

  render() {
    return (
      <div>
        <h1>My Component</h1>
        <button onClick={this.toggle}>Toggle</button>
        <div>{this.visible ? <my-test /> : null}</div>
      </div>
    );
  }
}

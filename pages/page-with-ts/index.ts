export default defineComponent({
  render () {
    return [
      h('h1', 'Page created with .ts extension'),
      h('ol', [
        h('li', 'Create file with .ts extension'),
        h('li', 'Export and define the component using `defineComponent` function'),
        h('li', 'Write the render function inside the `defineComponent` function'),
        h('li', 'Return with render function using `h([element], [content])` '),
        h('li', 'Example to render h1 : `h("h1", "this is a render function example to render h1")` '),
      ])
    ]
  }
})
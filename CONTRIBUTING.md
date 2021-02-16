# Contributing

- use Gitflow
- separate one line native export and source export
- use kebab-case for the filename
- color in lowercase and if possible html code color
- Standardjs for the linter
- indentation in spaces and 2
- first prop in a component is the `className` prop
- use this export style for component: `const MyComponent` and `export default MyComponent`
- import `web3` has to be like this: `import Ethereum from 'web3'
- stories must have the same path of the `src` files
- we use `BEM` for the CSS methodology:
```
.block {
  @at-root #{&}__element {
  }
  @at-root #{&}--modifier {
  }
}
```
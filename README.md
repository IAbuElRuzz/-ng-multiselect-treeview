# Angular Multiselect Dropdown Tree View
 
## Getting Started

## Features

- dropdown with single/multiple selction option
- bind to any custom data source
- search item with custom placeholder text
- limit selection
- select/de-select all items
- custom theme

### Installation

```
npm install ng-multiselect-treeview
```
 
## Custom Template(in beta):

### Variables can be used in template

1. id: return id as number
2. option: return option text. return string
3. isSelected: determine if item is selected or not. returns boolean

Template for each item
```
<ng-template #optionsTemplate let-item let-option="option" let-id="id" let-isSelected="isSelected">
  {{option}}
</ng-template>
```

Template for selected item
```
<ng-template #optionSelectedTemplate optionSelectedTemplate let-option="option"  let-id="id">
  {{option}}
</ng-template>
```

[Demo](https://codesandbox.io/s/custom-template-uyo0o?file=/src/app/app.component.html)
### Run locally

- Clone the repository or downlod the .zip,.tar files.
- Run `npm install`
- Run `ng serve` for a dev server
- Navigate to `http://localhost:4200/`

### Library Build / NPM Package

Run `yarn build:lib` to build the library and generate an NPM package. The build artifacts will be stored in the dist-lib/ folder.

## Running unit tests

Run `yarn test` to execute the unit tests.

## Development

This project was generated with Angular CLI version 1.7.1.

## Contributions

Contributions are welcome, please open an issue and preferrably file a pull request.

### Opening Issue

Please share sample code using codesandbox.com or stackblitz.com to help me re-produce the issue.

## License

MIT License.

 
# novad-grid-background

insert grid-background div into target element, or make target element grid-background

## installation
> npm install novad-grid-background

## usage
```javascript
import {insertGrid, makeGrid} from 'novad-grid-background'

<div id="div"></div>

// insert grid-background div into target element:
// insertGrid(parent id, [color="#475663"], [width=25], [height=width])
insertGrid('div', 'red', 20, 20)

// make target element grid-background
// makeGrid(id, [color="#475663"], [width=25], [height=width])
makeGrid('div', 'red', 20, 20)
```

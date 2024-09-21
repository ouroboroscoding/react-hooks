# @ouroboros/react-hooks

[![npm version](https://img.shields.io/npm/v/@ouroboros/react-hooks.svg)](https://www.npmjs.com/package/@ouroboros/react-hooks) ![MIT License](https://img.shields.io/npm/l/@ouroboros/react-hooks.svg)

Common hooks used in React

## Installation

```bash
npm install @ouroboros/react-hooks
```

## online

Keeps track of whether the client is connected to the internet or not. Uses the
standard [@ouroboros/subscribe](https://www.npmjs.com/package/@ouroboros/subscribe) interface of .set() / .get(), .subscribe() / .unsubscribe()
and returns a simple `true` for online, and `false` for offline.

## useOnline

A React hook that uses [`online`](#online) internally to return a `boolean`

```javascript
import { useOnline } from '@ouroboros/react-hooks/online';

function App() {
	const online = useOnline();

	return (
		<p>Browser is currently {online ? 'online' : 'offline'}</p>
	)
}
```

## useSize

A react hook that uses `size` from [@ouroboros/browser](https://www.npmjs.com/package/@ouroboros/browser#size) internally to return the current width of the screen in terms of:

| value | name | range |
| ----- | ---- | ----- |
| 'xs' | extra small | 0 - 599 |
| 'sm' | small | 600 - 899 |
| 'md' | medium | 900 - 1199 |
| 'lg' | large | 1200 - 1535 |
| 'xl' | extra large | 1536 - ∞ |

```javascript
import { greaterThan } from '@ouroboros/browser/size';
import { useSize } from '@ouroboros/react-hooks';

function App() {

	const size = useSize();

	return (
		<div>
			<p>Current size is {size}</p>
			{greaterThan(size, 'sm') ? (
				<div id="desktop" />
			) : (
				<div id="mobile_tablet" />
			)}
		</div>
	);
}
```

## useWidth

A react hook that always returns the current width of the client in pixels and updates when the browser is resized.

```javascript
import { useWidth } from '@ouroboros/react-hooks';

function App() {

	const width = useWidth();

	return (
		<p>The current width of the screen is {width}px.</p>
	);
}
```
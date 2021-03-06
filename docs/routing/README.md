# Routing
Capsule exports a minimal HTML5 pushState routing api and two components (Router, Linkage) for all your basic navigation needs.
```js
import {routing, Router, Linkage} from '@iosio/capsule';
```
**Note:** *Hash routing is not supported*

### routing api
*routing* shares a similar api as the npm module 'history' but with a slimmer bundle size and a few extra helpers;
```js
import {routing} from '@iosio/capsule';
const {route, getParams, getLocation, listen, goBack, goForward, replace} = routing;

route('/detail', {id:3});

```
**Read the [routing](https://github.com/iosio/capsule/blob/master/docs/routing/routing_api.md) doc for more details.**

### Router
Capsule provides a super simple and easy to use Router that works for basic page-per-route apps.
```js
const pathMap = {
  '/': ListPageComponent,          
  '/detail': DetailPageComponent
}

export const Root = () => (
<CapsuleProvide>  //as with anything in this lib, make sure there is a single provider at the most root level of your app
   <Router
      noMatch={'/'}
      pathMap={pathMap}/>
</CapsuleProvider>
);
```
**Read the [Router](https://github.com/iosio/capsule/blob/master/docs/routing/Router.md) doc for more details.**

### Linkage
Wraps a component with routing capabilities. 
```js
 <Linkage toPath='/' toParams={{id:3}}>
    {({params})=>(
         <span className={params && params.id === 3 ? 'active' : null}>
           Selection 3
         </span>
    )}
 </Linkage>
```
**Read the [Linkage](https://github.com/iosio/capsule/blob/master/docs/routing/Linkage.md) doc for more details.**

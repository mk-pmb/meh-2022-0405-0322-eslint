
My problem:
===========

I want eslint to complain about missing filename extension in these imports:

```text
$ git grep -nFe ..
bar/m.mjs:1:import m from '..';
foo/c/c.js:3:const c = require('..');
```

How can I make it complain?

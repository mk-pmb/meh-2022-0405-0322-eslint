
My problem:
===========

I want eslint to complain about missing filename extension in these imports:

```text
$ git grep -nFe ..
bar/m.mjs:1:import m from '..';
foo/c/c.js:3:const c = require('..');
```

How can I make it complain?

GitHub CI logs say:

```text
> meh@0.0.1 test
> eslint --ext .js,.mjs .; echo eslint result: $?

eslint result: 0
```

i.e. success. Wrong! CI should fail due to missing filename extensions!

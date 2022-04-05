// -*- coding: utf-8, tab-width: 2 -*-

import a from 'assert';

import c from './foo/c/c.js';
import m from './bar/m.mjs';

a.deepStrictEqual(c, {});
a.deepStrictEqual(m, {});

# GOBO_MODULE.gs

[![test](https://img.shields.io/badge/open-test-blue)](https://turbowarp.org?project_url=raw.githubusercontent.com/inflated-goboscript/GOBO_MODULE/main/test/test.sb3)
[![demo](https://img.shields.io/badge/open-demo-purple)](https://turbowarp.org?project_url=raw.githubusercontent.com/inflated-goboscript/GOBO_MODULE/main/demo/demo.sb3)
[![Build](https://github.com/inflated-goboscript/GOBO_MODULE/actions/workflows/gobuild.yml/badge.svg)](https://github.com/inflated-goboscript/GOBO_MODULE/actions/workflows/gobuild.yml)
[![Run /test/](https://github.com/inflated-goboscript/GOBO_MODULE/actions/workflows/gstest.yml/badge.svg)](https://github.com/inflated-goboscript/GOBO_MODULE/actions/workflows/gstest.yml)

> GOBO_MODULE

This is a GOBO_MODULE library which is built for [goboscript](https://github.com/aspizu/goboscript).
It is designed to be used with [inflator](https://github.com/inflated-goboscript/inflator).

## Credits

...

## Installation

Make sure you have inflator installed. It's installable from the gtp.

`inflate install GOBO_MODULE`

add GOBO_MODULE to your `inflator.toml` config:
```toml
[dependencies]
# ...
GOBO_MODULE = "GOBO_MODULE"
```

## Development

use `inflate install -e .`:

1. clone the respository: `git clone https://github.com/inflated-goboscript/GOBO_MODULE`
2. `cd GOBO_MODULE`
3. `inflate install -e .`
4. `cd test`
5. `inflate`
6. `goboscript build`
7. open `test.sb3`
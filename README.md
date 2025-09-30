# catch.gs

[![test](https://img.shields.io/badge/open-test-blue)](https://turbowarp.org?project_url=raw.githubusercontent.com/inflated-goboscript/catch/main/test/test.sb3)
[![demo](https://img.shields.io/badge/open-demo-purple)](https://turbowarp.org?project_url=raw.githubusercontent.com/inflated-goboscript/catch/main/demo/demo.sb3)
[![Build](https://github.com/inflated-goboscript/catch/actions/workflows/gobuild.yml/badge.svg)](https://github.com/inflated-goboscript/catch/actions/workflows/gobuild.yml)
[![Run /test/](https://github.com/inflated-goboscript/catch/actions/workflows/gstest.yml/badge.svg)](https://github.com/inflated-goboscript/catch/actions/workflows/gstest.yml)

> Use catch.gs to catch your errors and stuff

This is the baseline error handling library which is built for [goboscript](https://github.com/aspizu/goboscript).
It is designed to be used with [inflator](https://github.com/inflated-goboscript/inflator).

> [!WARNING]
> Because of the nature of goboscript, catch cannot function the exact same way as in other programming languages.
> i.e. The end of a try{} block WILL run before any uncaught errors are raised.
> If goboscript adds a 'break' feature, this could be implemented.

> [!NOTE]
> There is a chance that the 'context handler' macros could break in future goboscript versions.
> if they do, you can still use the more barebones method - using `try;` and `if catch()` directly

## Credits

...

## Installation

Make sure you have inflator installed. It's installable from the gtp.

`inflate install catch`

add catch to your `inflator.toml` config:
```toml
[dependencies]
# ...
catch = "catch"
```

## Development

use `inflate install -e .`:

1. clone the respository: `git clone https://github.com/inflated-goboscript/catch`
2. `cd catch`
3. `inflate install -e .`
4. `cd test`
5. `inflate`
6. `goboscript build`
7. open `test.sb3`
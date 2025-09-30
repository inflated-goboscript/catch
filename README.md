# catch.gs

[![test](https://img.shields.io/badge/open-test-blue)](https://turbowarp.org?project_url=raw.githubusercontent.com/inflated-goboscript/catch/main/test/test.sb3)
[![demo](https://img.shields.io/badge/open-demo-purple)](https://turbowarp.org?project_url=raw.githubusercontent.com/inflated-goboscript/catch/main/demo/demo.sb3)
[![Build](https://github.com/inflated-goboscript/catch/actions/workflows/gobuild.yml/badge.svg)](https://github.com/inflated-goboscript/catch/actions/workflows/gobuild.yml)
[![Run /test/](https://github.com/inflated-goboscript/catch/actions/workflows/gstest.yml/badge.svg)](https://github.com/inflated-goboscript/catch/actions/workflows/gstest.yml)

> Use catch.gs to catch your errors and stuff

This is the baseline error handling library which is built for [goboscript](https://github.com/aspizu/goboscript).
It is designed to be used with [inflator](https://github.com/inflated-goboscript/inflator).

No dependencies.

## Usage

1. Use the `try;` procedure to enter a try block. This will prevent any errors from immediately raising.
2. Catch any errors by error name using `if catch("error name")`
3. End the try/catch block using `validate_errors;`. This will raise any uncaught exceptions.

```goboscript
try;
    say div(3, 0), 0.25;
if catch("ZeroDivisionError") {
    log caught_exception.message;
} validate_errors;
```

> [!NOTE]
> All code within the try block *WILL* be executed, even if errors ocurr, unless it is raised by `force_raise`!
>
> This will immediately cause a `breakpoint` and `stop_all`, so there is no chance for any error catching. It is recommended to avoid this where possible.

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
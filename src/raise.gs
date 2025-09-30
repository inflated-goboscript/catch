# procs/funcs for try/catch
proc _force_raise Debug info {
    local msg = "Uncaught " & $info.title;
    if length $info.message > 0 {
        msg &= ": " & $info.message;
    }
    error msg;
    breakpoint;
    stop_all;
}

proc raise Debug info, force=false {
    add $info to debug_stack;

    if $info.type == _catch_DebugTypes._error and ($force or _catch_status.try_level < 1) {
        _force_raise $info;
    }
}

proc try {
    _catch_status.try_level++;
}

list Debug caught_exceptions;
func catch(exception_name) {
    delete caught_exceptions;

    local i = 1;
    repeat length debug_stack {
        if debug_stack[i].title == $exception_name and debug_stack[i].try_level <= _catch_status.try_level {
            add debug_stack[i] to caught_exceptions;
            delete debug_stack[i];
        } else {
            i++; # dont increment when you just deleted an item
        }
    }
    return length caught_exceptions > 0;
}

proc validate_errors {
    local i = 1;
    repeat length debug_stack {
        if debug_stack[i].try_level == _catch_status.try_level and debug_stack[i].type == _catch_DebugTypes._error {
            _force_raise debug_stack[i];
        }
    }

    _catch_status.try_level--;
}
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

var Debug caught_exception;
func catch(exception_name) {    
    if debug_stack["last"].title == $exception_name {
        caught_exception = debug_stack["last"];
        delete debug_stack["last"];
        return true;
    }
    return false;
}

proc validate_errors {
    _catch_status.try_level--;
    local i = 1;
    repeat length debug_stack {
        local Debug info = debug_stack[i];
        if info.type == _catch_DebugTypes._error {
            _force_raise info;
        }
    }
}
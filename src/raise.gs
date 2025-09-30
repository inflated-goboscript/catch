# procs/funcs for try/catch
proc _force_raise Info info {
    error "Uncaught " & $info.type & ": " & $info.message;
    breakpoint;
    stop_all;
}

proc raise Info info, force=false {
    add $info to info_stack;

    if $info.is_error and ($force or _catch_status.trying < 1) {
        _force_raise $info;
    }
}

proc try {
    _catch_status.trying++;
}

var Info caught_exception;
func catch(exception_name) {    
    if info_stack["last"].type == $exception_name {
        caught_exception = info_stack["last"];
        delete info_stack["last"];
        return true;
    }
    return false;
}

proc validate_errors {
    _catch_status.trying--;
    local i = 1;
    repeat length info_stack {
        local Info info = info_stack[i];
        if info.is_error {
            _force_raise info;
        }
    }
}
struct Info {
    type = "Info",
    is_error = false,
    message = "",
    timestamp
}

struct _CatchConfig {
    trying = 0
}

var _CatchConfig _catch_status;


%define Info(_type, _message, _is_error) (Info{type:_type, message:_message, is_error:_is_error, timestamp:(days_since_2000() + 10957) * 86400})
%define Error(_type, _message) (Info(_type, _message, true))
%define Event(_type, _message) (Info(_type, _message, false))

list Info info_stack = [];
onflag {
    delete info_stack;
}

proc _force_raise Info info {
    error "Uncaught " & $info.type & ": " & $info.message;
    breakpoint;
    stop_all;
}

proc raise Info info {
    add $info to info_stack;

    if $info.is_error and _catch_status.trying < 1 {
        _force_raise $info;
    }
}

proc try {
    _catch_status.trying++;
}

var Info caught_exception;
func except(exception_name) {
    _catch_status.trying--;
    
    if info_stack["last"].type == $exception_name {
        caught_exception = info_stack["last"];
        delete info_stack["last"];
        return true;
    }
    return false;
}

proc validate_errors {
    local i = 1;
    repeat length info_stack {
        local Info info = info_stack[i];
        if info.is_error {
            _force_raise info;
        }
    }
}
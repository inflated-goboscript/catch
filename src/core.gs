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
%define ErrorMsg(_type, _message) (Info(_type, _message, true))
%define Error(_type) (Info(_type, "", true))
%define Event(_type, _message) (Info(_type, _message, false))

list Info info_stack = [];
onflag {
    delete info_stack;
    _catch_status = _CatchConfig{};
}

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
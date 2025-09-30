struct Info {
    type = "Info",
    is_error = false,
    message = "",
    timestamp
}

%define Info(_type, _message, _is_error) (Info{type:_type, message:_message, is_error:_is_error, timestamp:(days_since_2000() + 10957) * 86400})
%define Error(_type, _message) (Info(_type, _message, true))
%define Event(_type, _message) (Info(_type, _message, false))

list Info info_stack = [];

proc raise Info info {
    add $info to info_stack;

    if $info.is_error {
        error "Uncaught " & $info.type & ": " & $info.message;
        breakpoint;
        stop_all;
    }
}

onflag {
    raise Error("onflag", "green flag clicked");
}

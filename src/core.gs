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

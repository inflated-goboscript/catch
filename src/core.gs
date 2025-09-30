enum _catch_DebugTypes {
    _error = "ERROR", # error will cause breakpoint
    _warn = "WARN",
    _log = "LOG",
}

# represents a TW debugger message.
struct Debug {
    type = _catch_DebugTypes._log,
    title = "",
    message = "",
    timestamp,
    try_level
}

struct _CatchConfig {
    try_level = 0
}

var _CatchConfig _catch_status;

%define Debug(_type, _title, _message) (Debug{type:_type, title: _title, message:_message, timestamp:(days_since_2000() + 10957) * 86400, try_level: _catch_status.try_level})
%define ErrorMsg(_title, _message) Debug(_catch_DebugTypes._error, _title, _message)
%define Error(_title) ErrorMsg(_title, "")
%define LogMsg(_title, _message) Debug(_catch_DebugTypes._log, _title, _message)
%define Log(_title) LogMsg(_title, "")
%define WarnMsg(_title, _message) Debug(_catch_DebugTypes._warn, _title, _message)
%define Warn(_title) WarnMsg(_title, "")

list Debug debug_stack = [];
onflag {
    delete debug_stack;
    _catch_status = _CatchConfig{};
}

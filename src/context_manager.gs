# uses macros like context managers

# Example use:
# TRY({
#     say div(3, 0);
#     EXCEPT("ZeroDivisionError") {
#         log "oops..";
#     }
# });

%define TRY(code) try; if true code; validate_errors
%define EXCEPT(code) if except(code) 

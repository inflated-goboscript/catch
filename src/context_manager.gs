# uses macros like context managers

# Example use:
# TRY({
#     say div(3, 0);
#     CATCH("ZeroDivisionError") {
#         log "oops..";
#     }
# });

%define TRY(code) try; if true code; validate_errors
%define CATCH(error_name) if catch(error_name) 

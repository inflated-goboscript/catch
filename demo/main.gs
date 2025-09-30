costumes "blank.svg";

%include inflator/catch

func div(a, b) {
    if $b == 0 {
        raise ErrorMsg("ZeroDivisionError", "Tried to divide " & $a & " by 0");
    }
    return $a / $b;
}


onflag {main;}
nowarp proc main {
    say "Welcome to the catch demo!", 1;

    say div(1, 2), 0.25;
    say div(2, 3), 0.25;


    try;
        say div(3, 0), 0.25;
        raise Error("BruhException"), force: false;

    if catch("ZeroDivisionError") {
        log caught_exception.message;
    } validate_errors;
}
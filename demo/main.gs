costumes "blank.svg";

%include inflator/catch

func div(a, b) {
    if $b == 0 {
        raise Error("ZeroDivisionError", "Tried to divide " & $a & " by 0");
    }
    return $a / $b;
}

%define TRYC(code) try; if true code; validate_errors;

onflag {main;}
nowarp proc main {
    say "Welcome to the catch demo!", 1;

    say div(1, 2), 0.25;
    say div(2, 3), 0.25;

    try;
        say div(3, 0), 0.25;
    if except("ZeroDivisionError2") {
        log caught_exception.message;
    } else {
        validate_errors;
    }
    TRYC({
        i = div(3, 0);
        say "bruh";
    });
}

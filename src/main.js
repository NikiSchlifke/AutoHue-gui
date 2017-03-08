/**
 * Created by niki on 08.03.17.
 */

var test =     new SetPointConstructor("06:00", 80, 5500,
    { Mon: true, Tue: true, Wed: true, Thu: false, Fri: true, Sat: true, Sun: true })
    ;
$("main.container").append(
    test.getFullSetPoint()
);

/**
 * Created by niki on 08.03.17.
 */
/**
 * Day of the Week Selector Widget
 *
 * @param time
 * @param brightness
 * @param temperature
 * @param days
 * @constructor
 */
function SetPointConstructor(time, brightness, temperature, days) {
    this.time = time;
    this.brightness = brightness;
    this.temperature = temperature;
    if (typeof days === "undefined") {
        this.days = { Mon: true, Tue: true, Wed: true, Thu: true, Fri: true, Sat: true, Sun: true };
    } else {
        this.days = days;
    }
    var self = this;

    var main = $("<div>");

    this.isDaySet = function (dayName) {
        return this.days[dayName];
    };

    this.makeDaySelector = function (hasFullWeek) {
        var dayGroups = {
            workDays: { class: "btn-info", days: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
            freeDays: { class: "btn-primary", days: ["Sat", "Sun"] }
        };
        // initialize Button Group
        var group = $("<div class='btn-group'>");

        if (typeof hasFullWeek === "undefined" || hasFullWeek) {

            for (var dayGroup in dayGroups) {
                // add Days
                dayGroups[dayGroup].days.map(function (dayName) {
                    var label = $("<label class='btn'>").addClass(dayGroups[dayGroup].class);
                        self.isDaySet(dayName) && label.addClass("active");
                    var checkbox = $("<input type='checkbox' autocomplete='off'>")
                        .click(function () {
                            self.toggleDay(dayName);
                        });
                    group.append(label.append(checkbox).text(dayName));
                });

            }
        } else {
            // add dayGroups
            for (var dayGroup in dayGroups) {
                $("<div class='btn'>").addClass(dayGroups[dayGroup].class).text(dayGroup).appendTo(group)
                    .click(function () {
                        self.toggleGroup(dayGroup);
                    });
            }
        }


        main.append(group);
        return self;
    };

    this.toggleDay = function (dayName) {
        this.days[dayName] = !this.days[dayName];
    };

    this.makeToogleButton = function () {
        var button = $("<div class='btn btn-info'>").text("<span class='glyphicon glyphicon-off'></span>");
    };

    this.getFullSetPoint = function () {
        this.makeDaySelector(true);
        return main;
    };

    this.getCompactSetPoint = function () {
        this.makeDaySelector(false);
        return main;
    };
}
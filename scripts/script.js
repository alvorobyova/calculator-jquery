$(document).ready(function () {
    $('.calculator__form').on('submit', function (event) {
        event.preventDefault();
    });
    // все кнопки калькулятора
    let buttons = $(".calculator").find("button");

    // дисплей
    let display = $(".calculator-display");

    // обработчик нажатия на кнопку
    buttons.on("click", function () {
        // значение кнопки
        let value = $(this).attr("value");

        // обработка кнопки "АС"
        if (value === "AC") {
            display.val("");
        }

        // обработка кнопки "+/-"
        if (value === "+/-") {
            let currentNum = parseFloat(display.val());
            if (!isNaN(currentNum)) {
                if (currentNum === 0) {
                    display.val("0");
                } else {
                    display.val(-currentNum);
                }
            }
        }

        // обработка кнопки "%"
        if (value === "%") {
            let currentValue = parseFloat(display.val());
            display.val(currentValue / 100);
        }

        // обработка кнопки "="
        if (value === "=") {
            // получаем значение на дисплее и вычисляем результат
            let expression = display.val();
            let result = eval(expression);

            // сохраняем результат на дисплее
            display.val(result);
        }

        // обработка остальных кнопок
        if (value !== "AC" && value !== "+/-" && value !== "%" && value !== "=") {
            display.val(display.val() + value);
        }
    });


});


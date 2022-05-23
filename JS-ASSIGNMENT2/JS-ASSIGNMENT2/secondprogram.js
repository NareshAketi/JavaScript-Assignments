        const value=4;
        var result = composedValue(value);
        console.log("The value : " + result);

        // Composed Function
        function composedValue(number) {
            return (cube(trible(number)));
        }

        // Square Function
        function cube(number) {
            return (number * number * number);
        }

        // Double Function
        function trible(number) {
            return (number * 3);
        }

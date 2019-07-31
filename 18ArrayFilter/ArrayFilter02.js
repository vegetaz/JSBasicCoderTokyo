<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>array.filter</title>
</head>

<body>
    <script>
        // Given an array of numbers, return a new array that only includes the even numbers.
        function evensOnly(arr) {
            return arr.filter(function (x) {
                return x % 2 == 0;
            });
        }
        console.log(evensOnly([3, 6, 8, 2]));
        console.log(evensOnly([1, 5, 5]));
    </script>
</body>

</html>
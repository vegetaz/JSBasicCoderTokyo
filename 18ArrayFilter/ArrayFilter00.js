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
        let numbers = [1, 2, 3, 4];
        let eventNumbers = numbers.filter(function(x) {
            return x % 2 === 0;
        });
        //eventNumbers;
        console.log(eventNumbers);
    </script>
</body>
</html>
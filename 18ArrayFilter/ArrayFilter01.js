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
        function fiveAndGreaterOnly(arr) {
	        return arr.filter(function(x) {
  	            return x >= 5;
            });
        }
        console.log(fiveAndGreaterOnly([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    </script>
</body>
</html>
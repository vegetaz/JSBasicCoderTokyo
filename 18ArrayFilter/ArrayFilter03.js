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
        function filterOutFemales(members) {
            return members.filter(function (x) {
                return (x.gender !== 'female');
            });
        }
        let members = [
            { name: 'Lan', gender: 'female' },
            { name: 'Linh', gender: 'female' },
            { name: 'Trung', gender: 'male' },
            { name: 'Peter', gender: 'gay' }
        ];
        console.log(filterOutFemales(members));
    </script>
</body>

</html>
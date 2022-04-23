Реализуйте функцию parseUrl(string), которая будет парсить URL строку и возвращать объект с распарсенными данными. 
Пример:
```
let a = parseUrl('http://example.com:8080/do/any.php?a=1&b[]=a&b[]=b#foo')

// Вернет объект, в котором будут следующие свойства:
console.log( a.href == "http://example.com:8080/do/any.php?a=1&b[]=a&b[]=b#foo" )
console.log( a.hash == "#foo" )
console.log( a.port == "8080" )
console.log( a.host == "example.com:8080" )
console.log( a.protocol == "http:" )
console.log( a.hostname == "example.com" )
console.log( a.pathname == "/do/any.php" )
console.log( a.origin == "http://example.com:8080" )
```

Желательно задачу решить как можно меньшим числом строк кода и затратив на реализацию минимум времени.
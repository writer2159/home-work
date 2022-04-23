const parseUrl = require('../index');
const expect = require('chai').expect;


describe('parseUrl', () => {
  describe('функция parseUrl', () => {
    [
      [
		'http://user:password@example.com:8080/do/any.php?a=1&b[]=a&b[]=b#foo', 
		{
			hash: "#foo",
			host: "example.com:8080",
			hostname: "example.com",
			href: "http://user:password@example.com:8080/do/any.php?a=1&b[]=a&b[]=b#foo",
			origin: "http://example.com:8080",
			pathname: "/do/any.php",
			port: "8080",
			protocol: "http:"
		}
	  ],
	  [
		'http://user@example.com:8080/do/any.php?a=1&b[]=a&b[]=b#foo', 
		{
			hash: "#foo",
			host: "example.com:8080",
			hostname: "example.com",
			href: "http://user@example.com:8080/do/any.php?a=1&b[]=a&b[]=b#foo",
			origin: "http://example.com:8080",
			pathname: "/do/any.php",
			port: "8080",
			protocol: "http:"
		}
	  ],
	  [
		'http://@example.com:8080/do/any.php?a=1&b[]=a&b[]=b#foo?q=1', 
		{
			hash: "#foo?q=1",
			host: "example.com:8080",
			hostname: "example.com",
			href: "http://@example.com:8080/do/any.php?a=1&b[]=a&b[]=b#foo?q=1",
			origin: "http://example.com:8080",
			pathname: "/do/any.php",
			port: "8080",
			protocol: "http:"
		}
	  ],
	  [
		'https://example.com:8080/do/any.php?a=1&b[]=a&b[]=b', 
		{
			hash: "",
			host: "example.com:8080",
			hostname: "example.com",
			href: "https://example.com:8080/do/any.php?a=1&b[]=a&b[]=b",
			origin: "https://example.com:8080",
			pathname: "/do/any.php",
			port: "8080",
			protocol: "https:"
		}
	  ],
	  [
		'https://example.com/do/any.php', 
		{
			hash: "",
			host: "example.com",
			hostname: "example.com",
			href: "https://example.com/do/any.php",
			origin: "https://example.com",
			pathname: "/do/any.php",
			port: "",
			protocol: "https:"
		}
	  ],
     
    ].forEach(([url, result]) => {
      it(`${url}`, () => {
		const resultParseUrl = parseUrl(url);
		expect(resultParseUrl.hash).to.equal(result.hash);
		expect(resultParseUrl.port).to.equal(result.port);
		expect(resultParseUrl.host).to.equal(result.host);
		expect(resultParseUrl.protocol).to.equal(result.protocol);
		expect(resultParseUrl.hostname).to.equal(result.hostname);
		expect(resultParseUrl.pathname).to.equal(result.pathname);
		expect(resultParseUrl.origin).to.equal(result.origin);
    });
    })
  });
});
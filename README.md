# DW

Ruivaldo Santana - 3009351
Denilson Ucuahamba - 30009025
Walgidio Santos - 30009596
Delcio Costa - 30011826

Boa noite professor, venho por este meio informar que infelizmente o trabalho não foi concluido 100% devido a falhas que surgiram antes da sua ultima revisão para faxer a submissão, tentamos ao maximo mitigar mas não deu em nada, irei colocar por baixo o que dizia o erro:

BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.

If you want to include a polyfill, you need to:
	- add a fallback 'resolve.fallback: { "path": require.resolve("path-browserify") }'
	- install 'path-browserify'
If you don't want to include a polyfill, you can use an empty module like this:
	resolve.fallback: { "path": false }

O nosso servidor se encontra na pasta server, e o ficheiro chamasse rotas.js, o professor pode correr com o comando npm run server

Espero muito carecidamente que o professor compreenda
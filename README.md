## TS
```sh
npx antlr4ts-cli Scanner.g4
npx antlr4ts-cli Parser.g4
npx antlr4ts-cli Parser.g4 -visitor
```

```sh
npx tsx CallParser.ts
```

## JS
```sh
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript Scanner.g4
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript Parser.g4
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -visitor Parser.g4
```
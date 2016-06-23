# Topics

* ES2015 features
* Syntax, code flow analysis and type inference
* Namespaces and ES2015 modules
* Type merging
* Generics
* External type declarations

**Where to find the answers to the training questions?**: checkout the [answers](https://github.com/ccrowhurstram/ram-typescript-training/tree/answers) branch

## ES2015 features

As Typescript is a superset of ES2015 by learning ES2015 we also learn typescript

### Learning materials

* [Rapid ES6 Training - New ES6 Syntax](https://app.pluralsight.com/player?course=rapid-es6-training&author=mark-zamoyta&name=rapid-es6-training-m2&clip=0&mode=live)
* [Rapid ES6 Training - Classes](https://app.pluralsight.com/player?course=rapid-es6-training&author=mark-zamoyta&name=rapid-es6-training-m3&clip=3&mode=live)

## Syntax, code flow analysis and type inference

### Learning material

* [Syntax](src/syntax)
* [Typescript in-depth - Function overloads](https://app.pluralsight.com/player?course=typescript-in-depth&author=brice-wilson&name=typescript-in-depth-m4&clip=11&mode=live)
* [Type inference](src/type-inference)
* [New features 1.8+](https://www.youtube.com/watch?v=6wEVu_mkJjM#t=44m25s)


## Namespaces and ES2015 modules

### Learning material

* [Typescript in-depth - Modules](https://app.pluralsight.com/player?course=typescript-in-depth&author=brice-wilson&name=typescript-in-depth-m7&clip=0&mode=live)

### Demo

* Demo in VSC:
    * Show the different module formats in the generated JS
    * Step through code in debugger (note: must be targeting `commonjs`)
* Demo in Chrome dev tools:
    * Show the different module formats in the generated JS
    * Step through code in debugger
	    * *tip*: setting breakpoint in compiled JS will set the breakpoint in the typescript file

### Exercies

**Q:** How to turn a standard script file into a ES2015 module?

**Answer**

Include at least one top-level `import` or `export` statement

**Q:** How to make a class, function, or variable private within a module?

**Answer**

Don't use the `export` keyword

**Q:** When would you use namespaces instead of modules

**Answer**
* simple projects
	* *tip:*: use `--outFile` to create a single concatenated file rather than have to include a script tag for each in index.html
* online code bins  that don't support multiple files (codepen, jsbin, jsfiddle, etc)
	* *tip*: use destructuring to simulate `import` keyword
	* **Q:** show me the code

**Q:** When compiling typescript what *target* module format would you choose?

**Answer**

* `commonjs`
	* when you know your code must run in both the browser node (SystemJs can load all module formates, node cannot)
	* when you do NOT have circular references between modules
* `system` registry format when you know you're code will only run inside of the browser
* `es2015` - wait until 2017/2018 when hopefully it will be supported by browsers and node


## Generics

### Learning materials

* [Typescript in-depth - Generics](https://app.pluralsight.com/player?course=typescript-in-depth&author=brice-wilson&name=typescript-in-depth-m8&clip=4&mode=live)
	* Note: Skip straight to topic "Demo: Creating and Using Generic Functions"
* [Introduction to Generics in Typescript ](https://egghead.io/lessons/typescript-introduction-to-generics-in-typescript)
* [egghead.io - Understanding Generics with RxJS](https://egghead.io/lessons/typescript-understanding-generics-with-rxjs)
* [Generics](src/generics/readme.md)


## Type merging

Typescript can merge two type declarations (eg a two interface declarations) into a single unified type.

The closest counter part to this in c# is partial classes: multiple class files with the same class name are merged together compiler
into a single class definition.

Unlike c#, typescript is not limited to merging together class files. For example, an interface and a class can be merged.

### Learning material

* [Typescript handbook - Declaration Merging](http://www.typescriptlang.org/docs/handbook/declaration-merging.html)
* [Type Merging](src/type-merging/readme.md)


## External type definitions

### Learning material

* [Type Definitions](https://app.pluralsight.com/player?course=typescript-in-depth&author=brice-wilson&name=typescript-in-depth-m10&clip=0&mode=live)
* [training-guide-type-definitions.md](training-guide-type-definitions.md)
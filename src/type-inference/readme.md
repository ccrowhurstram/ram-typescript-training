# Type inference

... type inference describes typescripts ability to automatically infer the "shape" (types) of inputs and outputs in code

## When to add explicit type annotations?

Generally recommendation is let typescript infer the type for you whenever possible. Exceptions:

* When typescript can't infer the type itself
    * requires that you set tsconfig.json set `noImplicitAny` to `true`
* Consider adding types when assigning an object literal to a variable or constant when there is an `interface` or `type` declaration defining the shape of that object literal. For example:

```ts
    var pet: IAnimal = {
        name: "george",
        weight: 15
    };
```

## Exercises

Look at [type-inference.ts](type-inference.ts) and for each annotation say whether it should have been added
   

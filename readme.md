## Clean Code:

-   `Readability`
-   `Maintainability`
-   `Testability`
-   `Scalability`

### Exploring the Limits:

-   **Performance VS Readability**
-   **Over-Engineering**
-   **Premature Optimization**

#### Reference: [Clean Code Examples](https://github.com/tarekmonjur/javascript/Clean_Code_principals.pdf)

---

<br/>

## JavaScript Nature:

-   `Type Coercion`
-   `Closure`
-   `IIFE - Immediately invoked function expression`
-   `Hoisting`
-   `Execution Context`: Execution context maintain Environment record or Lexical Environment.
    -   Creation Phase/Stage
    -   Execution Phase/Stage
    -   Call Stack
-   `This` Keyword:
    -   By Default `this` = `window` object on the Browser
    -   In function `this` keyword value determaind based on where the function is calling.
-   `Binding`:
    -   `Implicit Binding`:
        -   In the case of implicit binding, this binds to the object adjacent to the dot(.) operator while invoking the method.
    -   `Explicity Binding`:
        -   In the case of explicit binding, we can call a function with an object when the function is outside of the execution context of the object. The methods call(), apply(), and bind() play a big role here.
-   `Synchronous / Asynchronous` JavaScript:
    -   `Callback`: A function that pass as a aggrgument to the another (Higher-Order) function
    -   `Promise` ([Visual](https://promiviz.vercel.app/))
    -   `Async/Await`
-   `Typeof` / `Instanceof`
-   `Template Literals` / `Tagged Template Literals`
-   `Higher-Order Function`: A funciton that take a funciton as a arrgument or return a function.
-   `Pure Function`: A function that retrun as same output for the same input.

#### Reference: [JavaScript Nature Examples](https://github.com/tarekmonjur/javascript/JavaScript_Nature.pdf)

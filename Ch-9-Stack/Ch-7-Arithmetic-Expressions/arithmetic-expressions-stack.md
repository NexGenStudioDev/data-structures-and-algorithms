# 📚 Arithmetic Expressions — Operators, Operands, Infix, Prefix, Postfix & Stack

This is a **complete DSA + exam-oriented chapter** for **Arithmetic Expressions and Expression Conversion using Stack**. I’ll start from the basics and build up to **Infix → Postfix, Infix → Prefix, Postfix evaluation, Prefix evaluation, algorithms, conditions, examples, and JavaScript/Python code**.

---

# 1. What is an Operator?

An **operator** is a symbol that tells the computer to perform an operation.

### Common arithmetic operators

| Operator | Operation           | Example     |
| -------- | ------------------- | ----------- |
| `^`      | Power / Exponent    | `2 ^ 3 = 8` |
| `*`      | Multiplication      | `2 * 3 = 6` |
| `/`      | Division            | `6 / 2 = 3` |
| `%`      | Modulus / Remainder | `7 % 2 = 1` |
| `+`      | Addition            | `2 + 3 = 5` |
| `-`      | Subtraction         | `5 - 3 = 2` |

### Important

In most DSA expression-conversion questions:

```text
^  → Power
*  → Multiplication
/  → Division
%  → Modulus
+  → Addition
-  → Subtraction
```

---

# 2. What is an Operand?

An **operand** is the value or variable on which an operator performs an operation.

Example:

```text
A + B
```

Here:

```text
+ → Operator
A → Operand
B → Operand
```

Another example:

```text
5 * 10
```

```text
*  → Operator
5  → Operand
10 → Operand
```

### Operands can be

* `A-Z`
* `a-z`
* `0-9`
* variables such as `x`, `y`
* numbers such as `10`, `25`, `100`

For basic DSA expression questions, you will commonly see:

```text
A B C D
```

or

```text
1 2 3 4
```

---

# 3. What is an Expression?

An **expression** is a combination of:

> **Operands + Operators**

that represents a computation.

### Example

```text
A + B
```

This is an expression.

```text
A + B * C
```

This is also an expression.

```text
( A + B ) * C
```

This is an expression.

### Example with numbers

```text
5 + 10 * 2
```

Here:

```text
Operands → 5, 10, 2

Operators → +, *
```

---

# 4. Types of Arithmetic Expressions

There are mainly **three ways** to write an arithmetic expression:

1. **Infix**
2. **Prefix**
3. **Postfix**

---

# 5. Infix Expression

In an **infix expression**, the operator is written **between the operands**.

### Example

```text
A + B
```

Operator:

```text
+
```

is between:

```text
A     B
```

Therefore:

```text
A + B
```

is **Infix**.

### More examples

```text
A + B
A - B
A * B
A / B
A + B * C
(A + B) * C
```

### Real-world arithmetic

We normally write:

```text
5 + 6
```

rather than:

```text
+ 5 6
```

Therefore, humans naturally use **infix notation**.

---

# 6. Prefix Expression

In **prefix notation**, the operator comes **before the operands**.

Therefore:

```text
A + B
```

becomes:

```text
+ A B
```

### Examples

```text
A + B
```

Prefix:

```text
+AB
```

---

```text
A - B
```

Prefix:

```text
-AB
```

---

```text
A * B
```

Prefix:

```text
*AB
```

---

### Example

Infix:

```text
A + B * C
```

Prefix:

```text
+ A * B C
```

or without spaces:

```text
+A*BC
```

---

# 7. Postfix Expression

In **postfix notation**, the operator comes **after the operands**.

Therefore:

```text
A + B
```

becomes:

```text
A B +
```

or:

```text
AB+
```

### Examples

```text
A + B  → AB+
A - B  → AB-
A * B  → AB*
A / B  → AB/
```

---

# 8. The Most Important Difference

Remember this table:

| Notation | Operator Position | Example |
| -------- | ----------------- | ------- |
| Infix    | Between operands  | `A + B` |
| Prefix   | Before operands   | `+AB`   |
| Postfix  | After operands    | `AB+`   |

### Easy trick

```text
PREFIX
   ↓
Operator first

+AB
^
Operator
```

```text
INFIX
 ↓
Operator in middle

A+B
 ^
```

```text
POSTFIX
   ↓
Operator last

AB+
  ^
```

---

# 9. Why Do We Need Prefix and Postfix?

The major problem with infix expressions is that we need to worry about:

* Operator precedence
* Associativity
* Parentheses

For example:

```text
A + B * C
```

Which operation should happen first?

```text
A + B
```

or

```text
B * C
```

We need **precedence rules**.

Prefix and postfix expressions remove much of this ambiguity.

For example:

```text
A + B * C
```

Postfix:

```text
ABC*+
```

The order of execution is explicitly represented.

---

# 10. Operator Precedence

**Precedence** means:

> Which operator should be evaluated first?

### Standard priority

```text
^
↓
* / %
↓
+ -
```

So:

### Highest

```text
^
```

### Then

```text
* / %
```

### Lowest

```text
+ -
```

---

# 11. Complete Precedence Table

| Priority | Operator    | Meaning                           | Associativity |
| -------: | ----------- | --------------------------------- | ------------- |
|  Highest | `^`         | Power                             | Right → Left  |
|        2 | `*` `/` `%` | Multiplication, Division, Modulus | Left → Right  |
|   Lowest | `+` `-`     | Addition, Subtraction             | Left → Right  |

Parentheses have special handling because they explicitly control grouping.

---

# 12. Associativity

**Associativity** tells us what to do when operators have the **same precedence**.

There are two common directions:

```text
Left → Right
```

and

```text
Right → Left
```

---

# 13. Left-to-Right Associativity

The operators:

```text
*
/
%
+
-
```

are generally evaluated **left to right**.

Example:

```text
A - B + C
```

Both `-` and `+` have the same precedence.

Therefore:

```text
(A - B) + C
```

not:

```text
A - (B + C)
```

---

### Another example

```text
20 / 5 * 2
```

Since `/` and `*` have the same precedence:

```text
(20 / 5) * 2
```

First:

```text
20 / 5 = 4
```

Then:

```text
4 * 2 = 8
```

---

# 14. Right-to-Left Associativity

The power operator:

```text
^
```

is generally **right associative**.

Example:

```text
A ^ B ^ C
```

means:

```text
A ^ (B ^ C)
```

not:

```text
(A ^ B) ^ C
```

This is extremely important in **infix → postfix/prefix conversion**.

---

# 15. BODMAS / PEMDAS

You mentioned **BODMAS**.

It is another way of remembering arithmetic priority.

### BODMAS

```text
B → Brackets
O → Orders / Powers
D → Division
M → Multiplication
A → Addition
S → Subtraction
```

But in programming/DSA, don't blindly apply the English mnemonic. Use the actual operator-precedence table.

For our expression-conversion problems:

```text
Brackets
   ↓
^
   ↓
* / %
   ↓
+ -
```

---

# 16. Parentheses

Parentheses have very high importance in expressions.

Example:

```text
A + B * C
```

Because multiplication has higher precedence:

```text
A + (B * C)
```

But:

```text
(A + B) * C
```

forces addition first.

Therefore:

```text
A + B * C
```

and

```text
(A + B) * C
```

are different expressions.

---

# 17. How to Identify Infix, Prefix and Postfix

This is very easy.

### Infix

Look at the operator.

If it is **between operands**:

```text
A + B
```

→ Infix

---

### Prefix

If the operator appears **before operands**:

```text
+AB
```

→ Prefix

---

### Postfix

If the operator appears **after operands**:

```text
AB+
```

→ Postfix

---

# 18. Example: `(A+B)`

The expression:

```text
(A+B)
```

is **infix**.

Why?

Because:

```text
+
```

is between:

```text
A
B
```

### Prefix

```text
+AB
```

### Postfix

```text
AB+
```

---

# 19. Expression Conversion

The major DSA questions are:

```text
Infix → Postfix
Infix → Prefix
Postfix → Infix
Prefix → Infix
Postfix → Prefix
Prefix → Postfix
```

The most important are:

```text
Infix → Postfix
Infix → Prefix
```

because they use a **Stack**.

---

# 20. Why Stack is Used?

Consider:

```text
A + B * C
```

We encounter:

```text
+
```

but we cannot immediately output it because:

```text
*
```

has higher precedence.

So we temporarily store operators.

That temporary storage is naturally handled using a:

# Stack

Because a stack follows:

```text
LIFO
Last In First Out
```

---

# 21. Infix → Postfix

Let's convert:

```text
A + B * C
```

### Step 1

Read:

```text
A
```

Operand → directly output.

```text
Output = A
Stack = empty
```

---

### Step 2

Read:

```text
+
```

Operator → push into stack.

```text
Output = A
Stack = +
```

---

### Step 3

Read:

```text
B
```

Operand → output.

```text
Output = AB
Stack = +
```

---

### Step 4

Read:

```text
*
```

Compare:

```text
* precedence > + precedence
```

Push `*`.

```text
Output = AB
Stack = + *
```

---

### Step 5

Read:

```text
C
```

Operand → output.

```text
Output = ABC
Stack = + *
```

---

### Step 6

Input finished.

Pop everything from stack.

First:

```text
*
```

Then:

```text
+
```

Final:

```text
ABC*+
```

Therefore:

```text
A+B*C
```

becomes:

```text
ABC*+
```

---

# 22. Infix → Postfix Algorithm

### Rules

Scan the expression from **left to right**.

### Rule 1 — Operand

If current character is an operand:

```text
Output it
```

Example:

```text
A
```

---

### Rule 2 — `(`

Push it into the stack.

```text
(
```

---

### Rule 3 — `)`

Pop from the stack until `(` is found.

The parentheses themselves are **not added to postfix**.

---

### Rule 4 — Operator

If current character is an operator:

Compare its precedence with the operator on the top of the stack.

Pop higher/equal-precedence operators according to associativity, then push the current operator.

---

### Rule 5 — End of expression

After scanning the complete expression:

```text
Pop all remaining operators.
```

---

# 23. The Important Operator Condition

This is the part you must understand carefully.

For most operators:

```text
current operator is left associative
```

we pop while:

```text
precedence(top) >= precedence(current)
```

For `^`, because it is right associative, we generally use:

```text
precedence(top) > precedence(current)
```

instead of `>=`.

So conceptually:

```text
while stack top has higher precedence
OR
same precedence AND current operator is left associative
```

pop.

Then push the current operator.

---

# 24. Why Is `^` Different?

Consider:

```text
A ^ B ^ C
```

Correct interpretation:

```text
A ^ (B ^ C)
```

Correct postfix:

```text
ABC^^
```

If you incorrectly treat `^` as left associative, you may get:

```text
AB^C^
```

which represents:

```text
(A ^ B) ^ C
```

That is different.

---

# 25. Infix → Postfix Example 2

Convert:

```text
A + B * C
```

| Scan | Action           | Stack | Output  |
| ---- | ---------------- | ----- | ------- |
| `A`  | Operand → output | empty | `A`     |
| `+`  | Push             | `+`   | `A`     |
| `B`  | Operand → output | `+`   | `AB`    |
| `*`  | Push             | `+ *` | `AB`    |
| `C`  | Operand → output | `+ *` | `ABC`   |
| End  | Pop all          | empty | `ABC*+` |

Answer:

```text
ABC*+
```

---

# 26. Infix → Postfix with Parentheses

Convert:

```text
(A+B)*C
```

### Scan

```text
(
```

Push.

```text
A
```

Output.

```text
+
```

Push.

```text
B
```

Output.

```text
)
```

Pop until `(`.

So:

```text
AB+
```

Then:

```text
*
```

Push.

Then:

```text
C
```

Output.

Finally pop `*`.

Answer:

```text
AB+C*
```

---

# 27. Another Important Example

Convert:

```text
A+B*(C-D)
```

### Expected postfix

```text
ABCD-*+
```

Let's understand:

```text
(C-D)
```

becomes:

```text
CD-
```

Then:

```text
B * (C-D)
```

becomes:

```text
BCD-*
```

Then:

```text
A + ...
```

becomes:

```text
ABCD-*+
```

---

# 28. Complex Example

Convert:

```text
A+B*(C^D-E)^(F+G*H)-I
```

The final postfix is:

```text
ABCD^E-FGH*+^*+I-
```

This type of question is excellent for exams because it tests:

* precedence
* associativity
* parentheses
* stack
* `^`
* multiple operators

---

# 29. Infix → Prefix

Now we want:

```text
Infix → Prefix
```

There is a very common technique.

### Method

1. Reverse the infix expression.
2. Swap `(` with `)`.
3. Convert the resulting expression to postfix.
4. Reverse the postfix result.

---

# 30. Example: Infix → Prefix

Given:

```text
A+B*C
```

### Step 1 — Reverse

```text
C*B+A
```

### Step 2

There are no parentheses.

### Step 3 — Convert to postfix

```text
CB*A+
```

### Step 4 — Reverse

```text
+A*BC
```

Therefore:

```text
A+B*C
```

Prefix:

```text
+A*BC
```

---

# 31. Parentheses During Infix → Prefix

Suppose:

```text
(A+B)*C
```

Reverse:

```text
C*)B+A(
```

Swap parentheses:

```text
C*(B+A)
```

Then convert to postfix:

```text
CBA+*
```

Reverse:

```text
*+ABC
```

Therefore:

```text
(A+B)*C
```

Prefix:

```text
*+ABC
```

---

# 32. Postfix Evaluation

Now we move from **conversion** to **solving/evaluating** an expression.

You gave:

```text
5,6,2,+,*,12,4,/ ,-
```

This is a **postfix expression**.

Without commas:

```text
562+*124/-
```

---

# 33. How to Evaluate Postfix?

Use a **Stack**.

### Rule

Scan from:

```text
Left → Right
```

### If operand:

```text
Push it
```

### If operator:

Pop two operands.

Important:

```text
first pop  = right operand
second pop = left operand
```

Then:

```text
left operator right
```

Push the result back.

---

# 34. Solve Your Example

Expression:

```text
5 6 2 + * 12 4 / -
```

### Step 1

Read:

```text
5
```

Push:

```text
[5]
```

---

### Step 2

Read:

```text
6
```

Push:

```text
[5, 6]
```

---

### Step 3

Read:

```text
2
```

Push:

```text
[5, 6, 2]
```

---

### Step 4

Read:

```text
+
```

Pop:

```text
2 → right
6 → left
```

Calculate:

```text
6 + 2 = 8
```

Push:

```text
[5, 8]
```

---

### Step 5

Read:

```text
*
```

Pop:

```text
8 → right
5 → left
```

Calculate:

```text
5 * 8 = 40
```

Stack:

```text
[40]
```

---

### Step 6

Read:

```text
12
```

Stack:

```text
[40, 12]
```

---

### Step 7

Read:

```text
4
```

Stack:

```text
[40, 12, 4]
```

---

### Step 8

Read:

```text
/
```

Pop:

```text
4 → right
12 → left
```

Calculate:

```text
12 / 4 = 3
```

Stack:

```text
[40, 3]
```

---

### Step 9

Read:

```text
-
```

Pop:

```text
3 → right
40 → left
```

Calculate:

```text
40 - 3 = 37
```

Final:

```text
[37]
```

# Answer

```text
37
```

---

# 35. The Most Important Postfix Mistake

Suppose:

```text
8 3 -
```

Don't calculate:

```text
3 - 8
```

The stack works like this:

```text
right = pop()
left  = pop()
```

Therefore:

```text
left - right
```

So:

```text
8 - 3 = 5
```

### Memorize

```text
b = pop()
a = pop()

result = a operator b
```

This is especially important for:

```text
-
/
^
```

---

# 36. Postfix Evaluation Example

Expression:

```text
5 2 3 * + 
```

Start:

```text
5
```

Stack:

```text
[5]
```

Then:

```text
2
```

```text
[5,2]
```

Then:

```text
3
```

```text
[5,2,3]
```

`*`:

```text
2 * 3 = 6
```

Stack:

```text
[5,6]
```

`+`:

```text
5 + 6 = 11
```

Answer:

```text
11
```

---

# 37. Prefix Evaluation

Prefix is evaluated from:

```text
Right → Left
```

This is the opposite of postfix.

### Example

```text
- * 5 6 / 12 4
```

Scan from right to left.

### Rule

If operand:

```text
Push
```

If operator:

```text
operand1 = pop()
operand2 = pop()
result = operand1 operator operand2
```

But be careful with ordering.

For prefix scanning right-to-left:

```text
a = pop()
b = pop()

result = a operator b
```

---

# 38. Prefix vs Postfix Evaluation

| Expression | Direction    |
| ---------- | ------------ |
| Postfix    | Left → Right |
| Prefix     | Right → Left |

Both use:

```text
Stack
```

---

# 39. Infix → Postfix Complete Algorithm

### Pseudocode

```text
Create empty stack
Create empty output

For every token in expression:

    If token is operand:
        Add token to output

    Else if token == '(':
        Push token

    Else if token == ')':
        While top != '(':
            Pop stack and add to output

        Pop '('

    Else if token is operator:

        While stack is not empty
        AND top is not '('
        AND top has higher precedence
             OR same precedence with left associativity:

            Pop stack and add to output

        Push current operator

After scanning:

    While stack is not empty:
        Pop and add to output

Return output
```

---

# 40. Operator Precedence Function

You can define:

```text
^ → 3
* / % → 2
+ - → 1
```

Example:

```text
precedence("^") = 3
precedence("*") = 2
precedence("+") = 1
```

---

# 41. JavaScript — Infix to Postfix

```javascript
function precedence(operator) {
    if (operator === "^") return 3;

    if (
        operator === "*" ||
        operator === "/" ||
        operator === "%"
    ) {
        return 2;
    }

    if (
        operator === "+" ||
        operator === "-"
    ) {
        return 1;
    }

    return 0;
}

function isOperator(char) {
    return ["+", "-", "*", "/", "%", "^"].includes(char);
}

function isRightAssociative(operator) {
    return operator === "^";
}

function infixToPostfix(expression) {
    const stack = [];
    const output = [];

    for (const token of expression.replace(/\s+/g, "")) {

        // Operand
        if (!isOperator(token) && token !== "(" && token !== ")") {
            output.push(token);
        }

        // Opening parenthesis
        else if (token === "(") {
            stack.push(token);
        }

        // Closing parenthesis
        else if (token === ")") {

            while (
                stack.length > 0 &&
                stack[stack.length - 1] !== "("
            ) {
                output.push(stack.pop());
            }

            // Remove '('
            stack.pop();
        }

        // Operator
        else {

            while (
                stack.length > 0 &&
                stack[stack.length - 1] !== "(" &&
                (
                    precedence(stack[stack.length - 1]) >
                    precedence(token)
                    ||
                    (
                        precedence(stack[stack.length - 1]) ===
                        precedence(token)
                        &&
                        !isRightAssociative(token)
                    )
                )
            ) {
                output.push(stack.pop());
            }

            stack.push(token);
        }
    }

    // Empty remaining stack
    while (stack.length > 0) {
        output.push(stack.pop());
    }

    return output.join("");
}

console.log(infixToPostfix("A+B*C"));
// ABC*+

console.log(infixToPostfix("(A+B)*C"));
// AB+C*

console.log(infixToPostfix("A+B*(C-D)"));
// ABCD-*+

console.log(infixToPostfix("A^B^C"));
// ABC^^
```

---

# 42. Important JavaScript Condition

The most important part is:

```javascript
precedence(top) > precedence(current)
```

OR:

```javascript
precedence(top) === precedence(current)
&&
!isRightAssociative(current)
```

Meaning:

### Pop when:

```text
Top has higher priority
```

OR

```text
Same priority + current operator is left associative
```

But don't pop the equal-precedence `^` when processing another `^`.

---

# 43. Python — Infix to Postfix

```python
def precedence(operator):
    if operator == "^":
        return 3

    if operator in "*/%":
        return 2

    if operator in "+-":
        return 1

    return 0


def is_operator(token):
    return token in "+-*/%^"


def is_right_associative(operator):
    return operator == "^"


def infix_to_postfix(expression):
    stack = []
    output = []

    for token in expression.replace(" ", ""):

        # Operand
        if not is_operator(token) and token not in "()":
            output.append(token)

        # Opening parenthesis
        elif token == "(":
            stack.append(token)

        # Closing parenthesis
        elif token == ")":

            while stack and stack[-1] != "(":
                output.append(stack.pop())

            # Remove '('
            stack.pop()

        # Operator
        else:

            while (
                stack
                and stack[-1] != "("
                and (
                    precedence(stack[-1]) > precedence(token)
                    or
                    (
                        precedence(stack[-1]) == precedence(token)
                        and not is_right_associative(token)
                    )
                )
            ):
                output.append(stack.pop())

            stack.append(token)

    # Pop remaining operators
    while stack:
        output.append(stack.pop())

    return "".join(output)


print(infix_to_postfix("A+B*C"))
# ABC*+

print(infix_to_postfix("(A+B)*C"))
# AB+C*

print(infix_to_postfix("A+B*(C-D)"))
# ABCD-*+

print(infix_to_postfix("A^B^C"))
# ABC^^
```

---

# 44. Postfix Evaluation — JavaScript

```javascript
function evaluatePostfix(expression) {
    const stack = [];

    for (const token of expression.trim().split(/\s+/)) {

        // Operand
        if (!isNaN(token)) {
            stack.push(Number(token));
        }

        // Operator
        else {
            const right = stack.pop();
            const left = stack.pop();

            let result;

            switch (token) {
                case "+":
                    result = left + right;
                    break;

                case "-":
                    result = left - right;
                    break;

                case "*":
                    result = left * right;
                    break;

                case "/":
                    result = left / right;
                    break;

                case "%":
                    result = left % right;
                    break;

                case "^":
                    result = left ** right;
                    break;
            }

            stack.push(result);
        }
    }

    return stack.pop();
}

console.log(
    evaluatePostfix("5 6 2 + * 12 4 / -")
);

// 37
```

---

# 45. Postfix Evaluation — Python

```python
def evaluate_postfix(expression):
    stack = []

    for token in expression.split():

        # Operand
        if token.isdigit():
            stack.append(int(token))

        # Operator
        else:
            right = stack.pop()
            left = stack.pop()

            if token == "+":
                result = left + right

            elif token == "-":
                result = left - right

            elif token == "*":
                result = left * right

            elif token == "/":
                result = left / right

            elif token == "%":
                result = left % right

            elif token == "^":
                result = left ** right

            stack.append(result)

    return stack.pop()


print(evaluate_postfix("5 6 2 + * 12 4 / -"))

# 37.0
```

---

# 46. Why Spaces Matter for Multi-Digit Numbers

For basic expressions:

```text
A+B*C
```

we can process character by character.

But consider:

```text
25 10 + 3 *
```

If you remove spaces:

```text
25103*
```

you can no longer easily determine whether:

```text
25
10
3
```

were separate operands.

Therefore, for numerical postfix expressions, use **tokens**:

```text
"25 10 + 3 *"
```

and split by spaces.

---

# 47. Stack Operations Used

Expression conversion relies mainly on:

### Push

Insert an item:

```text
stack.push(x)
```

### Pop

Remove the top item:

```text
stack.pop()
```

### Peek / Top

Look at the top without removing it.

JavaScript:

```javascript
stack[stack.length - 1]
```

Python:

```python
stack[-1]
```

---

# 48. Conversion vs Evaluation

Don't confuse these two.

### Conversion

Example:

```text
Infix:
A+B*C
```

Convert to:

```text
Postfix:
ABC*+
```

Here we are changing the **notation**.

---

### Evaluation

Example:

```text
5 6 2 + *
```

We calculate its actual value:

```text
48
```

Here we are **solving** the expression.

---

# 49. Complete Conversion Map

You should know these for DSA:

```text
             Expression
                  |
       ┌──────────┼──────────┐
       ↓          ↓          ↓
     Infix      Prefix     Postfix
       |
       ├──────→ Prefix
       |
       └──────→ Postfix
```

Common conversions:

```text
Infix → Postfix
Infix → Prefix
Prefix → Infix
Postfix → Infix
Prefix → Postfix
Postfix → Prefix
```

---

# 50. Postfix → Infix

Example:

```text
AB+
```

Scan left to right.

### `A`

Push:

```text
A
```

### `B`

Push:

```text
A B
```

### `+`

Pop:

```text
B
A
```

Create:

```text
(A+B)
```

Push it back.

Final:

```text
(A+B)
```

---

# 51. Postfix → Infix Algorithm

```text
Scan left → right

If operand:
    Push it

If operator:
    right = pop()
    left = pop()

    expression = "(" + left
                       + operator
                       + right + ")"

    Push expression
```

At the end:

```text
pop()
```

is the answer.

---

# 52. Prefix → Infix

Prefix:

```text
+A*BC
```

Scan:

```text
Right → Left
```

### `C`

Push.

### `B`

Push.

### `*`

Pop:

```text
B
C
```

Create:

```text
(B*C)
```

### `A`

Push.

### `+`

Create:

```text
(A+(B*C))
```

Answer:

```text
(A+(B*C))
```

---

# 53. Prefix → Infix Algorithm

```text
Scan right → left

If operand:
    Push

If operator:
    left = pop()
    right = pop()

    expression =
        "(" + left + operator + right + ")"

    Push expression

At end:
    pop()
```

---

# 54. Postfix → Prefix

Postfix:

```text
AB+
```

Scan left → right.

```text
A → push
B → push
+ → pop B, pop A
```

Create:

```text
+AB
```

---

# 55. Prefix → Postfix

Prefix:

```text
+AB
```

Scan right → left.

```text
B → push
A → push
+ → pop A, pop B
```

Create:

```text
AB+
```

---

# 56. Important Exam Table

| Operation          | Scan Direction  | Data Structure |
| ------------------ | --------------- | -------------- |
| Infix → Postfix    | Left → Right    | Stack          |
| Infix → Prefix     | Reverse / Stack | Stack          |
| Postfix Evaluation | Left → Right    | Stack          |
| Prefix Evaluation  | Right → Left    | Stack          |
| Postfix → Infix    | Left → Right    | Stack          |
| Prefix → Infix     | Right → Left    | Stack          |
| Postfix → Prefix   | Left → Right    | Stack          |
| Prefix → Postfix   | Right → Left    | Stack          |

---

# 57. Valid Expression Conditions

An expression should follow correct syntax.

For example:

```text
A+B
```

Valid.

```text
A+B*C
```

Valid.

But:

```text
A+*B
```

Invalid.

Why?

Because two operators appear incorrectly:

```text
+ *
```

---

### Another invalid expression

```text
A+B+
```

There is an operator with no operand after it.

---

### Another

```text
+A+B
```

In basic binary arithmetic notation this is not the same as standard binary infix usage; unary operators are a separate consideration.

---

# 58. Binary Operators

Most operators we are discussing are **binary operators**.

A binary operator requires:

```text
2 operands
```

Example:

```text
A + B
```

`+` needs:

```text
A
B
```

---

# 59. Unary Operators

There are also unary operators that work on **one operand**.

Example:

```text
-A
```

Here:

```text
- 
```

is a unary minus.

This is important because basic infix-to-postfix algorithms often assume all operators are **binary**.

For beginner DSA/exam questions, unless the question explicitly includes unary operators, usually assume:

```text
+ - * / % ^
```

are binary operators.

---

# 60. Parentheses Matching

During conversion, parentheses must be correctly matched.

Valid:

```text
(A+B)
```

Valid:

```text
((A+B)*C)
```

Invalid:

```text
(A+B
```

Invalid:

```text
A+B)
```

Invalid:

```text
((A+B)
```

The stack helps detect unmatched parentheses.

---

# 61. What Happens if `(` Remains?

Suppose after scanning:

```text
A+B
```

the stack contains:

```text
+
```

That's normal.

But if:

```text
(A+B
```

leaves:

```text
(
```

in the stack, then the expression has an unmatched opening parenthesis.

A robust implementation should detect this rather than silently treating `(` as an operator.

---

# 62. Time Complexity

For expression conversion:

```text
Infix → Postfix
```

Every token is processed a constant number of times.

Therefore:

### Time

```text
O(n)
```

### Space

```text
O(n)
```

because the stack can contain up to `n` elements.

---

# 63. Postfix Evaluation Complexity

For:

```text
5 6 2 + * 12 4 / -
```

each token is processed once.

### Time

```text
O(n)
```

### Space

```text
O(n)
```

---

# 64. Why Isn't It O(n²)?

Because although we have a `while` loop inside the main loop:

```text
while stack...
```

each operator is:

```text
pushed once
```

and:

```text
popped at most once
```

Therefore the total number of stack operations is still proportional to `n`.

Hence:

```text
O(n)
```

---

# 65. Important DSA Interview Question

### Why is postfix easier for a computer to evaluate?

Because postfix doesn't require:

* precedence calculation
* associativity calculation
* parentheses

For example:

```text
A+B*C
```

needs precedence rules.

But:

```text
ABC*+
```

already tells us exactly what to do:

```text
B*C
```

then:

```text
A + result
```

---

# 66. Why Stack is Perfect for Expression Evaluation

Suppose postfix is:

```text
5 6 2 + *
```

When we encounter:

```text
+
```

we need the **most recently encountered operands**.

Stack gives us:

```text
LIFO
```

Therefore:

```text
2 → pop
6 → pop
```

Calculate:

```text
6 + 2
```

Then push the result.

This is exactly what a stack is designed for.

---

# 67. BODMAS vs Expression Conversion

One common confusion:

### BODMAS tells us:

```text
Which operation has priority?
```

### Stack algorithm tells us:

```text
How to rearrange operators so the priority is represented.
```

For example:

```text
A+B*C
```

BODMAS/precedence says:

```text
B*C
```

first.

So postfix becomes:

```text
ABC*+
```

The postfix expression itself now represents that order.

---

# 68. Quick Mental Rules

Memorize these:

### Precedence

```text
^
↓
* / %
↓
+ -
```

### Associativity

```text
^      → Right → Left

* / %  → Left → Right

+ -    → Left → Right
```

### Postfix evaluation

```text
Left → Right
```

### Prefix evaluation

```text
Right → Left
```

### Stack

```text
LIFO
```

### Operand

```text
Output directly during Infix → Postfix
```

### Operator

```text
Use stack
```

### `(`

```text
Push
```

### `)`

```text
Pop until '('
```

### End

```text
Pop remaining operators
```

---

# 69. One Complete Dry Run

Convert:

```text
A+B*(C-D)
```

to postfix.

| Token | Type        | Stack     | Output    |
| ----- | ----------- | --------- | --------- |
| `A`   | Operand     | ` `       | `A`       |
| `+`   | Operator    | `+`       | `A`       |
| `B`   | Operand     | `+`       | `AB`      |
| `*`   | Operator    | `+ *`     | `AB`      |
| `(`   | Parenthesis | `+ * (`   | `AB`      |
| `C`   | Operand     | `+ * (`   | `ABC`     |
| `-`   | Operator    | `+ * ( -` | `ABC`     |
| `D`   | Operand     | `+ * ( -` | `ABCD`    |
| `)`   | Parenthesis | `+ *`     | `ABCD-`   |
| End   | Pop         | empty     | `ABCD-*+` |

Final:

```text
ABCD-*+
```

---

# 70. The Complete Concept in One Example

Take:

```text
(A+B)*C-D/E
```

### Infix

```text
(A+B)*C-D/E
```

### Prefix

```text
-*+ABC/DE
```

### Postfix

```text
AB+C*DE/-
```

Notice how the three representations change the **position of operators** while preserving the same logical calculation.

---

# 71. Exam Questions You Should Practice

### Basic

1. Define operator.
2. Define operand.
3. Define expression.
4. What is an infix expression?
5. What is a prefix expression?
6. What is a postfix expression?
7. Give examples of each.
8. What is operator precedence?
9. What is associativity?
10. What is BODMAS?

### DSA

11. Why is stack used for expression conversion?
12. What is LIFO?
13. Convert infix to postfix.
14. Convert infix to prefix.
15. Evaluate postfix expression.
16. Evaluate prefix expression.
17. Convert postfix to infix.
18. Convert prefix to infix.
19. Convert postfix to prefix.
20. Convert prefix to postfix.

### Complexity

21. Time complexity of infix → postfix?
22. Space complexity?
23. Why is conversion `O(n)`?

---

# 72. Must-Practice Conversions

Try these yourself before looking at the answer.

### Q1

```text
A+B*C
```

Answer:

```text
Postfix → ABC*+
Prefix  → +A*BC
```

---

### Q2

```text
(A+B)*C
```

Answer:

```text
Postfix → AB+C*
Prefix  → *+ABC
```

---

### Q3

```text
A+B*(C-D)
```

Answer:

```text
Postfix → ABCD-*+
Prefix  → +A*B-CD
```

---

### Q4

```text
A*(B+C)/D
```

Postfix:

```text
ABC+*D/
```

Prefix:

```text
/*A+BCD
```

---

### Q5

```text
A^B^C
```

Remember:

```text
^ → Right Associative
```

Postfix:

```text
ABC^^
```

Prefix:

```text
^A^BC
```

---

# 73. Final Cheat Sheet 🧠

```text
================================================
        ARITHMETIC EXPRESSIONS — DSA
================================================

OPERAND
→ Value / variable on which operation is performed

OPERATOR
→ Symbol that performs operation

+  → Addition
-  → Subtraction
*  → Multiplication
/  → Division
%  → Modulus
^  → Power


EXPRESSION
→ Combination of operands and operators


INFIX
→ Operator between operands

A+B


PREFIX
→ Operator before operands

+AB


POSTFIX
→ Operator after operands

AB+


PRECEDENCE

Highest
   ^
   |
 * / %
   |
 + -
Lowest


ASSOCIATIVITY

^      → Right to Left
* / %  → Left to Right
+ -    → Left to Right


STACK
→ LIFO
→ Last In First Out


INFIX → POSTFIX

Operand
→ Output

(
→ Push

)
→ Pop until (

Operator
→ Compare precedence
→ Pop required operators
→ Push current operator

End
→ Pop everything


POSTFIX EVALUATION

Direction:
Left → Right

Operand:
Push

Operator:

right = pop()
left  = pop()

result = left operator right

Push result


PREFIX EVALUATION

Direction:
Right → Left

Operand:
Push

Operator:

left  = pop()
right = pop()

result = left operator right

Push result


TIME COMPLEXITY
→ O(n)

SPACE COMPLEXITY
→ O(n)
================================================
```

## The 5 things you absolutely must remember for your DSA exam

1. **Infix:** `A+B`
2. **Prefix:** `+AB`
3. **Postfix:** `AB+`
4. **Precedence:** `^` > `* / %` > `+ -`
5. **Associativity:** `^` is right-to-left; most other arithmetic operators here are left-to-right.

And the most important stack rule during **postfix evaluation**:

```text
right = stack.pop()
left  = stack.pop()

result = left operator right
```

That single ordering prevents a huge number of mistakes with `-` and `/`.

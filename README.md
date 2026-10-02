# SpendWise - JavaScript Foundation

## Project Description
SpendWise is a personal finance assistant designed to track monthly finances. It transforms an interactive interface into an active runtime program that processes data, allowing users to safely calculate their remaining cash balances after tracking overhead costs.

## JavaScript Concepts Implemented
* Variables and dynamic storage assignments.
* Data type conversion using explicit float parsing.
* Interactive text dialog input handling (`prompt()`).
* Arithmetic evaluation operators.
* Encapsulated, reusable function logic.
* Standard system output streaming (`console.log()`).

## Variable Usage
* `monthlyBudget`: Stores total available capital funds.
* `totalExpenses`: Stores accumulated calculated bills.
* `remainingBalance`: Tracks the net available overhead remainder.

## User Input Collection
* Captured via modal input windows using native browser `prompt()` methods.
* Parsed directly via `parseFloat()` to switch text input structures safely into numeric values.

## Calculation Methods
* Evaluated dynamically using a custom functional return module.
* Subtracts total overall expense numbers directly out of raw stored budget levels (`budget - expenses`).

## Architectural Function Organization
* Segregates math equations from display rendering systems.
* Minimizes global namespace pollution.
* Provides clear avenues for scaling features like persistent local browser saves.

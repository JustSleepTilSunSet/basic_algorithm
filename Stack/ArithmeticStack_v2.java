import java.util.*;

public class ArithmeticStack_v2 {
    static class Postfix {
        // RESULT: The variable indicates infix expression, that is not important
        // variable.
        ArrayList<String> expression = new ArrayList<>();
        Stack<String> operation = new Stack<>();
        // Availability convert the type to "String", that should get a same result.
        ArrayList<String> postfix = new ArrayList<>();

        public boolean isNumeric(String element) {
            return !element.equals("+")
                    && !element.equals("-")
                    && !element.equals("*")
                    && !element.equals("/")
                    && !element.equals("(")
                    && !element.equals(")");
        }

        Postfix(ArrayList<String> expression) {
            System.out.print("Postfix: ");
            this.expression = expression;
        }

        public static int getOperationPriority(String operation) {
            if (operation.equals("+") || operation.equals("-")) {
                return 1;
            } else if (operation.equals("*") || operation.equals("/")) {
                return 2;
            } else {
                return 0;
            }
        }

        public Postfix toPostfix() {
            while (!this.expression.isEmpty()) {
                String element = this.expression.remove(0);
                if (isNumeric(element)) {
                    postfix.add(element);
                } else if (element.equals("+") || element.equals("-")) {
                    // FIXME: Refactor.
                    if (operation.isEmpty()) {
                        operation.push(element);
                    } else {
                        String topElement = operation.peek();
                        while (getOperationPriority(topElement) >= getOperationPriority(element)) {
                            if (operation.isEmpty())
                                break;
                            topElement = operation.pop();
                            if (topElement.equals("(")) {
                                operation.push(topElement);
                                break;
                            }
                            postfix.add(topElement);
                        }
                        operation.push(element);
                    }
                } else if (element.equals("*") || element.equals("/")) {
                    // FIXME: Refactor.
                    if (operation.isEmpty()) {
                        operation.push(element);
                    } else {
                        String topElement = operation.peek();
                        while (getOperationPriority(topElement) == getOperationPriority(element)) {
                            if (operation.isEmpty())
                                break;
                            topElement = operation.pop();
                            if (topElement.equals("(")) {
                                operation.push(topElement);
                                break;
                            }
                            postfix.add(topElement);
                        }
                        operation.push(element);

                    }
                } else if (element.equals("(")) {
                    operation.push(element);
                } else if (element.equals(")")) {
                    while (!operation.isEmpty()) {
                        String topElement = operation.pop();
                        if (topElement.equals("("))
                            break;
                        postfix.add(topElement);

                    }
                }
            }
            while (!operation.isEmpty()) {
                postfix.add(operation.pop());
            }
            return this;
        }

        public Postfix toShowPostfix() {
            for (int index = 0; index < postfix.size(); index++) {
                System.out.print(postfix.get(index));
            }
            System.out.println();
            return this;
        }

        public Double toAnswer() {
            double result = 0.00;
            try {
                Stack<Double> operands = new Stack<Double>();
                for (String word : postfix) {
                    if (isNumeric(word)) {
                        operands.push(Double.parseDouble(word));
                    } else {
                        // If the expression is a correct postfix expression, there must be two operands
                        // before an operator.
                        double num1 = operands.pop();
                        double num2 = operands.pop();
                        double total = 0.00;
                        if (word.equals("+")) {
                            total = num2 + num1;
                        } else if (word.equals("-")) {
                            total = num2 - num1;
                        } else if (word.equals("*")) {
                            total = num2 * num1;
                        } else if (word.equals("/")) {
                            total = num2 / num1;
                        }
                        operands.push(total);
                    }
                }

                result = operands.pop();
                System.out.println(result);
            } catch (Exception exception) {
                exception.getStackTrace();
            }
            return result;
        }
    }

    public static void main(String[] args) {
        ArrayList<String> expression = new ArrayList<>();

        // 1. Input infix.
        expression.add("(");
        expression.add("(");
        expression.add("3");
        expression.add("+");
        expression.add("4");
        expression.add(")");
        expression.add("*");
        expression.add("2");
        expression.add(")");
        expression.add("/");
        expression.add("7");

        // expression.add("3");
        // expression.add("+");
        // expression.add("2");
        // expression.add("*");
        // expression.add("5");

        // 2. To Postfix.
        Postfix solution = new ArithmeticStack_v2.Postfix(expression)
                .toPostfix()
                .toShowPostfix();

        // 3. To result.
        solution.toAnswer();
    }
}
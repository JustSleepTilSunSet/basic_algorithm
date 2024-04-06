import java.util.*;

//  Check add done a simple.
// Without "(" and ")".
public class ArithmeticStack_v1 {
    static ArrayList<String> list = new ArrayList<>();
    static boolean isCalculated = false;
    static double result = 0.00f;

    public static void checked(String v) {
        if (isCalculated) {
            System.out.println(v);
            result = toCalculate();
            list.add(result + "");
            isCalculated = false;
        }
        if (v.equals("*") || v.equals("/")) {
            isCalculated = true;
        }

    }

    public static void showStack() {
        for (int index = 0; index < list.size(); index++) {
            System.out.print(list.get(index) + "\t");
        }
        System.out.println();
    }

    public static Double toCalculate() {
        isCalculated = false;
        Double num1 = Double.parseDouble(pop());
        String operation = pop();
        Double num2 = Double.parseDouble(pop());
        System.out.println(num1 + operation + num2);
        if (operation == "*") {
            return num2 * num1;
        }

        if (operation == "/") {
            return num2 / num1;
        }
        if (operation == "+") {
            return num2 + num1;
        }
        if (operation == "-") {
            return num2 - num1;
        }
        return -1.00;
    }

    public static void push(String v) {
        list.add(v);
        checked(v);
    }

    public static String pop() {
        return list.remove(list.size() - 1);
    }

    public static void main(String[] args) {
        // 11*11 +5*2; pass
        // 11*11 +5; pass
        // 11*11/2 +5; pass
        // 3*2; pass
        push("11");
        push("*");
        push("11");
        push("-");
        push("5");
        push("*");
        push("6");
        push("/");
        push("3");
        push("+");
        push("10");
        showStack();
        ArrayList<Double> nums = new ArrayList<>();
        ArrayList<String> operations = new ArrayList<>();
        while (!list.isEmpty()) {
            String remaining = list.remove(0) + "";
            if (!remaining.equals("+") && !remaining.equals("-")) {
                nums.add(Double.parseDouble(remaining));
            } else {
                operations.add(remaining);
            }
            if (nums.size() == 2 && operations.size() == 1) {
                Double num1 = nums.remove(0);
                String operation = operations.remove(0);
                Double num2 = nums.remove(0);
                Double result = 0.00;
                if (operation.equals("*")) {
                    result = num1 * num2;
                }

                if (operation.equals("/")) {
                    result = num1 / num2;
                }
                if (operation.equals("+")) {
                    result = num1 + num2;
                }
                if (operation.equals("-")) {
                    result = num1 - num2;
                }
                nums.add(result);
            }
        }
        System.out.println(nums.remove(0));
    }
}
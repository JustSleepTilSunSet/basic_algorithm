class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        opstack = [];
        result = True;
        answer = {
            '}':'{',
            ']':'[',
            ')':'('
        }
        for character in s:
            if(character =='}' or character ==')'or character ==']'):
                top1 = None;
                if(len(opstack)>0):
                    top1 = opstack.pop();
                result = result and top1 == answer.get(character);
            else:
                opstack.append(character);
        return result and not len(opstack) > 0;

public class Solution {
    public int ladderLength(String beginWord, String endWord, Set < String > wordList) {
        Set < String > set1 = new HashSet < String > ();
        set1.add(beginWord);

        Set < String > set2 = new HashSet < String > ();
        set2.add(endWord);

        wordList.remove(beginWord);
        wordList.remove(endWord);

        return minLengthBidirectionalSearch(set1, set2, wordList, 2);
    }

    public int minLengthBidirectionalSearch(Set < String > set1, Set < String > set2, Set < String > wordList, int length) {
        if (set1.size() == 0) return 0;

        Set < String > newSet = new HashSet < String > ();

        for (String s: set1) {
            char[] str = s.toCharArray();
            for (int j = 0; j < str.length; j++) {
                char og = str[j];
                for (char c = 'a'; c <= 'z'; c++) {
                    str[j] = c;
                    String newStr = String.valueOf(str);
                    if (set2.contains(newStr)) return length;
                    if (wordList.contains(newStr)) {
                        newSet.add(newStr);
                        wordList.remove(newStr);
                    }
                }
                str[j] = og;
            }
        }

        // This part is KEY to bringing your run-time down. Otherwise sets with more neighbours 
        // will skew the benefit that can be obtained from searching outward from two nodes.
        if (newSet.size() < set2.size()) {
            return minLengthBidirectionalSearch(newSet, set2, wordList, length + 1);
        } else {
            return minLengthBidirectionalSearch(set2, newSet, wordList, length + 1);
        }
    }
}
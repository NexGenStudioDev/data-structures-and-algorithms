class Solution {
    NnumbersSum(N) {
         if(N == 1) return 1;

         return N + this.NnumbersSum(N - 1);

    }
}



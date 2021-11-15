#include <stdio.h>

int main(int argc, const char * argv[]) {
    int people[15][14];
    int test = 0;
    int k, n;
    
    for(int i=0;i<15;i++){
        people[0][i] = i + 1;
    }
    for(int i=1;i<15;i++){
        people[i][0] = 1;
        for(int j=1;j<14;j++){
            people[i][j] = people[i-1][j] + people[i][j-1];
        }
    }
    
    scanf("%d", &test);
    for(int i=0;i<test;i++){
        scanf("%d", &k);
        scanf("%d", &n);
        
        printf("%d\n", people[k][n-1]);
    }
    
    return 0;
}

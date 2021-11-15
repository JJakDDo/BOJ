#include <stdio.h>

int main(int argc, const char * argv[]) {
    
    int test;
    int M, N, x, y;
    int year;
    int j = 0;
    scanf("%d", &test);
    for(int i=0;i<test;i++){
        scanf("%d %d %d %d", &M, &N, &x, &y);
        
        while(1){
            year = x + (M * j);
            int yMod = year % N;
            if(yMod == 0)
                yMod = N;
            if(yMod == y){
                printf("%d\n", year);
                break;
            }else if(j > N){    //M이 아니라 N으로 바꿔서 하니깐 됨
                printf("-1\n");
                break;
            }
            j++;
        }
        
        j = 0;
    }
    return 0;
}

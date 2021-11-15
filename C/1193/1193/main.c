#include <stdio.h>

int main(int argc, const char * argv[]) {
    
    int total = 0;
    int inc = 1;
    int num;
    scanf("%d", &num);
    while(total + inc < num){
        total += inc;
        inc++;
    }
    int x = num - total;
    if(inc%2 == 0)
        printf("%d/%d\n", 1 + (x-1), inc-(x-1));
    else
        printf("%d/%d\n", inc-(x-1), 1 + (x-1));
    return 0;
}

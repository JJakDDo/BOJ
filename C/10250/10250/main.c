#include <stdio.h>

int main(int argc, const char * argv[]) {
    int test = 0;
    int H, W, N;
    int roomNumber = 0;
    scanf("%d", &test);
    for(int i=0;i<test;i++){
        scanf("%d %d %d", &H, &W, &N);
        int floor = N%H;
        if(floor == 0){
            floor = H;
            roomNumber = floor*100 + (N/H);
            printf("%d\n", roomNumber);
        }
        else{
            roomNumber = floor*100 + (N/H) + 1;
            printf("%d\n", roomNumber);
        }
    }
    return 0;
}

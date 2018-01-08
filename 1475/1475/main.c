#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(int argc, const char * argv[]) {
    
    int set[10];
    char N;
    int max = 0;
    int number = 0;
    for(int i = 0;i<10;i++)
        set[i] = 0;
    while((N = getc(stdin)) != '\n'){
        number = atoi(&N);
        if(number == 9 || number == 6){
            if(set[9] <= set[6]){
                number = 9;
                set[number]++;
            }
            else {
                number = 6;
                set[number]++;
            }
        }
        else set[number]++;
        if(set[number] > max)
            max = set[number];
    }
    printf("%d\n", max);
    
    
    
    return 0;
}

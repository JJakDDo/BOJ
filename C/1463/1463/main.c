#include <stdio.h>


int makeOne(int n){
    printf("%d   ", n);
    if(n == 1)
        return 0;
    else if(n%3 == 0){
            if(n == 3)
                return 1;
            if((n/3)%3 == 0 || (n/3)%2 == 0)
                return makeOne(n/3) + 1;
            else return makeOne(n-1) + 1;
    }
    else if(n%2 == 0){
            if(n == 2)
                return 1;
            if((n/2)%3 == 0 || (n/2)%2 == 0)
                return makeOne(n/2) + 1;
            else return makeOne(n-1) + 1;
    }
    else return makeOne(n-1) + 1;
}

int main(int argc, const char * argv[]) {
    
    int x;
    scanf("%d", &x);
    printf("\n%d\n", makeOne(x));
    return 0;
}

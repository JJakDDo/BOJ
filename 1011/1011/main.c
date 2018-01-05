#include <stdio.h>

int main(int argc, const char * argv[]) {
    
    unsigned int current, dest;
    int n;
    unsigned int distance;
    int count = 0;
    scanf("%d", &n);
    for(int i=0;i<n;i++){
        scanf("%u %u", &current, &dest);
        distance = dest - current;
        if(distance == 1)
            count = 1;
        else if(distance == 2)
            count = 2;
        else {
            int maxDistance = 0;
            float k = 2;
            while(maxDistance < distance){
                maxDistance = (k + 1) * (k / 2);
                k++;
            }
            if(maxDistance > distance){
                k--;
                maxDistance -= k;
            }
            if(maxDistance + k < distance)
                count = k + 2;
            else count = k + 1;
        }
        printf("%d\n", count);
        count = 0;
        
    }
    return 0;
}

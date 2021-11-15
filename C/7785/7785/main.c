#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXNUM 1000000
#define BUFFER_SIZE 50

int compare(const void* first, const void* second);

int main(int argc, const char * argv[]) {
    
    char* employeeEnter[MAXNUM];
    char* employeeLeave;
    int n = 0;
    char name[BUFFER_SIZE];
    char status[BUFFER_SIZE];
    int numEnter = 0, numLeave = 0;
    
    scanf("%d", &n);
    while(n > 0){
        scanf("%s %s", name, status);
        if(strcmp(status, "enter") == 0){
            employeeEnter[numEnter++] = strdup(name);
        }
        else if(strcmp(status, "leave") == 0){
            employeeLeave = strdup(name);
            int low=0, mid=0, high;
            high = numEnter - 1;
            
            while (low <= high){
                mid = (low + high) / 2;
                if(strcmp(employeeEnter[mid], employeeLeave) == 0){
                    employeeEnter[mid] = " ";
                    break;
                }
                else if(strcmp(employeeEnter[mid], employeeLeave) < 0)
                    low = mid + 1;
                else high = mid - 1;
            }
        }
        n--;
    }
    
    qsort((void*)employeeEnter, numEnter, sizeof(employeeEnter[0]),compare);
    
    for(int i=numEnter-1;i>=0;i--){
        if(strcmp(employeeEnter[i], " ") != 0)
            printf("%s\n", employeeEnter[i]);
    }
    
    return 0;
}

int compare(const void* first, const void* second){
    return strcmp(*(char**)first, *(char**)second);
}


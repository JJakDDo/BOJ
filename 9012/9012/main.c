#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct vps{
    char data;
    struct vps* next;
} VPS;

VPS* top;

void push(char ch){
    VPS* new = (VPS*)malloc(sizeof(VPS));
    
    new->data = ch;
    new->next = top;
    top = new;
}

int pop(){
    VPS* old = (VPS*)malloc(sizeof(VPS));
    
    if(top == NULL)
        return -1;
    old = top;
    top = old->next;
    free(old);
    return 0;
}

int main(int argc, const char * argv[]) {
    
    int test = 0;
    int isVPS = 0;
    char input[51];
    
    top = NULL;
    
    scanf("%d", &test);
    while(test > 0){
        scanf("%s", input);
        int i = 0;
        while(i < strlen(input)){
            if(input[i++] == '('){
                push('(');
            }
            else {
                isVPS = pop();
                if(isVPS == -1){
                    printf("NO\n");
                    break;
                }
            }
        }
        if(top != NULL)
            printf("NO\n");
        else if(isVPS != -1)
            printf("YES\n");
        top = NULL;
        test--;
    }
    return 0;
}

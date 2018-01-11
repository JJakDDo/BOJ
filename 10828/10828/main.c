#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct stack{
    int data;
    struct stack* next;
}StackList;

StackList* top;

void push(int data){
    StackList* new = (StackList*)malloc(sizeof(StackList));
    new->data = data;
    new->next = top;
    top = new;
}

int pop(){
    StackList* old = (StackList*)malloc(sizeof(StackList));
    int num;
    if(top == NULL)
        return -1;
    old = top;
    top = old->next;
    num = old->data;
    free(old);
    return num;
}

int isEmpty(){
    if(top == NULL)
        return 1;
    else return 0;
}

int getTop(){
    if(top == NULL)
        return -1;
    else return top->data;
}

int main(int argc, const char * argv[]) {
    int test;
    char input[7];
    int argument;
    int size = 0;
    
    top = NULL;
    scanf("%d", &test);
    while(test > 0){
        scanf("%s", input);
        if(strcmp(input, "push") == 0){
            scanf("%d",&argument);
            push(argument);
            size++;
        }
        else if(strcmp(input, "pop") == 0){
            int num = pop();
            if(num == -1)
                printf("-1\n");
            else printf("%d\n", num);
            size = size>0?size-1:0;
        }
        else if(strcmp(input, "size") == 0){
            printf("%d\n", size);
        }
        else if(strcmp(input, "empty") == 0){
            printf("%d\n", isEmpty());
        }
        else if(strcmp(input, "top") == 0){
            printf("%d\n", getTop());
        }
        test--;
    }
    
    return 0;
}

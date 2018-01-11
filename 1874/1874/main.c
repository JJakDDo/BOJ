#include <stdio.h>
#include <stdlib.h>

typedef struct stack{
    int data;
    struct stack* next;
}Stack;

Stack* top;

void push(int data){
    Stack* new = (Stack*)malloc(sizeof(Stack));
    
    new->data = data;
    new->next = top;
    top = new;
}

void pop(){
    Stack* old = (Stack*)malloc(sizeof(Stack));
    
    old = top;
    top = old->next;
    free(old);
}

int main(int argc, const char * argv[]) {
    
    int n = 0;
    int currentNumber = 1;
    scanf("%d", &n);
    char output[n*2];
    int input[n];
    int outputIndex = 0;
    top = NULL;
    for(int i = 0;i<n;i++)
        scanf("%d", &input[i]);
    
    for(int i = 0;i<n;i++){
        for(;currentNumber<=input[i];currentNumber++){
            push(currentNumber);
            output[outputIndex++] = '+';
        }
        if(input[i] <= currentNumber && input[i] == top->data){
            pop();
            output[outputIndex++] = '-';
        }
        else break;
    }
    if(top != NULL)
        printf("NO\n");
    else{
        for(int i = 0;i<outputIndex;i++)
            printf("%c\n", output[i]);
    }
    return 0;
}

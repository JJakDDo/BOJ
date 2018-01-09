#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct node{
    char data;
    struct node* next;
} Node;

Node* head = NULL;
Node* cursor = NULL;

Node* addNode(Node* prev, char ch){
    Node* new = (Node*)malloc(sizeof(Node));
    new->data = ch;
    if(head == NULL){
        head = new;
        new->next = NULL;
        cursor = head;
        return head;
    }
    else{
        new->next = prev->next;
        prev->next = new;
        cursor = new;
        return new;
    }
    
}

void moveLeft(){
    if(cursor == head)
        return;
    Node* temp = (Node*)malloc(sizeof(Node));
    temp = head;
    while(temp->next != cursor){
        temp = temp->next;
    }
    cursor = temp;
}
void moveRight(){
    if(cursor->next == NULL)
        return;
    cursor = cursor->next;
}
//다시풀기
void deleteChar(){
    Node* temp = (Node*)malloc(sizeof(Node));
    Node* temp2 = (Node*)malloc(sizeof(Node));
    temp = head;
    while(temp->next != cursor)
        temp = temp->next;
    
    temp2 = temp->next;
    temp->next = temp2->next;
    cursor = temp;
    free(temp2);
}

int main(int argc, const char * argv[]) {
    
    char ch;
    char input[5];
    char *command;
    Node* prev = NULL;
    int test;
    while((ch=getc(stdin)) != '\n'){
        prev = addNode(prev, ch);
    }
    
    scanf("%d", &test);
    ch = getc(stdin);
    int j;
    for(int i=0;i<test;i++){
        j = 0;
        while((ch=getc(stdin)) != '\n'){
            input[j++] = ch;
        }
        input[j]='\0';
        if(strcmp(input, "L") == 0){
            moveLeft();
        }
        else if(strcmp(input, "D") == 0){
            moveRight();
        }
        else if(strcmp(input, "B") == 0){
            deleteChar();
        }
        else {
            command = strtok(input, " ");
            command = strtok(NULL, " ");
            addNode(cursor, command[0]);
        }
    }
    
    prev = head;
    while(prev != NULL){
        printf("%c", prev->data);
        prev = prev->next;
    }
    printf("\n");
    return 0;
}

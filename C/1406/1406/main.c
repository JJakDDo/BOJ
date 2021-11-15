#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct node{
    char data;
    struct node* next;
    struct node* prev;
} Node;

Node* head = NULL;
Node* cursor = NULL;
Node* prev = NULL;

Node* addNode(char ch){
    Node* new = (Node*)malloc(sizeof(Node));
    new->data = ch;
    //문자열이 비었을때 문자 추가
    if(head == NULL){
        head = new;
        new->next = NULL;
        new->prev = NULL;
        return head;
    }
    else{
        //커서가 맨 앞쪽일때 문자 추가
        if(cursor == NULL){
            new->prev = NULL;
            new->next = head;
            if(new->next != NULL)
                new->next->prev = new;
            head = new;
            return new;
        }
        else{
            new->next = cursor->next;
            cursor->next = new;
            new->prev = cursor;
            if(new->next != NULL){
                new->next->prev = new;
            }
            return new;
        }
    }
    
}

void moveLeft(){
    if(cursor == NULL)
        return;
    cursor = cursor->prev;
}
void moveRight(){
    if(cursor == NULL){
        cursor = head;
        return;
    }
    if(cursor->next == NULL)
        return;
    cursor = cursor->next;
}

void deleteChar(){
    if(cursor == NULL)
        return;
    
    Node* temp = (Node*)malloc(sizeof(Node));
    
    temp = cursor;
    //맨 앞 문자 지울때
    if(temp->prev == NULL){
        head = temp->next;
        if(temp->next != NULL)
            temp->next->prev = NULL;
        cursor = temp->prev;
    }
    //맨 뒤 문자 지울때
    else if(temp->next == NULL){
        //문자열에 문자가 하나있을때 지우는지 확인
        if(temp->prev != NULL){
            temp->prev->next = NULL;
            cursor = temp->prev;
        }
        else{
            head = NULL;
            cursor = head;
        }
    }
    else{
        temp->prev->next = temp->next;
        temp->next->prev = temp->prev;
        cursor = temp->prev;
    }
    free(temp);
}

int main(int argc, const char * argv[]) {
    
    char input[5];
    char *command;
    int test;
    char line[100001];
    scanf("%s", line);
    int k = 0;
    //문자열을 하나씩 읽어서 리스트에 추가
    while(line[k] != '\0')
        cursor = addNode(line[k++]);
    scanf("%d", &test);
    int j;
    for(int i=0;i<test;i++){
        j = 0;
        scanf(" %[^\n]", input);
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
            cursor = addNode(command[0]);
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

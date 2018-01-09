#include <stdio.h>
#include <stdlib.h>

typedef struct node{
    int data;
    struct node* next;
} Node;
/* head 가 전역변수일때
Node* addNode(Node* head, Node* prev, int data);
 */
Node* addNode(Node** head, Node* prev, int data){

    Node* new = (Node*)malloc(sizeof(Node));
    new->data = data;
    
    if(*head == NULL){
        *head = new;
        new->next = new;
        return *head;
    }
    else{
        new->next = prev->next;
        prev->next = new;
        return new;
    }
}

void deleteNode(Node* prev){
    Node* old = (Node*)malloc(sizeof(Node));
    
    old = prev->next;
    prev->next = old->next;
    printf("%d, ", old->data);
    free(old);
}

int main(int argc, const char * argv[]) {
    
    Node* head = NULL;
    Node* prev = head;
    int N, M;
    scanf("%d %d", &N, &M);
    for(int i=0;i<N;i++){
        prev = addNode(&head, prev, i+1);
        //addNode(head, prev, i+1);
    }
    printf("<");
    Node* temp = head;
    Node* tempPrev = prev; //마지막 노드위치 (원형리스트이기때문에 head의 이전 node는 마지막 노드
    while(temp->next != temp){
        for(int i=1;i<M;i++){
            tempPrev = temp;
            temp = temp->next;
        }
        deleteNode(tempPrev);
        temp = temp->next;
    }
    printf("%d>\n", temp->data);
    return 0;
}

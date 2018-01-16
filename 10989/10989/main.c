#include <stdio.h>
#include <stdlib.h>

#define RADIX 10

typedef struct queue{
    int data;
    struct queue* next;
}Queue;

typedef struct{
    Queue *front, *rear;
}LinkedQueue;

void enqueue(LinkedQueue* lq, int n){
    Queue* new = (Queue*)malloc(sizeof(Queue));
    new->data = n;
    new->next = NULL;
    if(lq->front == NULL){
        lq->front = new;
        lq->rear = new;
    }
    else {
        lq->rear->next = new;
        lq->rear = new;
    }
}

int dequeue(LinkedQueue* lq){
    Queue* old = lq->front;
    if(lq->front == NULL)
        return 0;
    int n = old->data;
    lq->front = lq->front->next;
    if(lq->front == NULL)
        lq->rear = NULL;
    free(old);
    return n;
}

void radixSort(int* A, int digit, long N){
    LinkedQueue *Q[RADIX];
    int factor = 1;
    long j;
    for(int i=0;i<RADIX;i++){
        LinkedQueue* lq = (LinkedQueue*)malloc(sizeof(LinkedQueue));
        lq->front = NULL;
        lq->rear = NULL;
        Q[i] = lq;
    }
    for(int i=0;i<digit;i++){
        for(j=0;j<N;j++)
            enqueue(Q[(A[j]/factor) % 10], A[j]);
        j = 0;
        for(int k=0;k<RADIX;k++){
            while(Q[k]->front != NULL)
                A[j++] = dequeue(Q[k]);
        }
        factor *= 10;
    }
}

int main(int argc, const char * argv[]) {
    long N;
    int* A;
    scanf("%ld",&N);
    int digit = 1;
    A = (int*)malloc(sizeof(int)*(N));
    for(int i=0;i<N;i++){
        scanf("%d", &A[i]);
        if(A[i] >= 10 && A[i] < 100 && digit < 2)
            digit = 2;
        else if(A[i] >= 100 && A[i] < 1000 && digit < 3)
                digit = 3;
        else if(A[i] >= 1000 && A[i] < 10000 && digit < 4)
                digit = 4;
        else if(A[i] >= 10000 && digit < 5)
                digit = 5;
    }
    radixSort(A, digit, N);
    for(int i=0;i<N;i++)
        printf("%d\n", A[i]);
    
    return 0;
}

#include <stdio.h>

int* bubbleSort(int N, int A[]){
    int temp = 0;
    
    for(int i=0;i<N-1;i++){
        for(int j=0;j<N-1;j++){
            if(A[j] > A[j+1]){
                temp = A[j];
                A[j] = A[j+1];
                A[j+1] = temp;
            }
        }
    }
    return A;
}

int* selectionSort(int N, int A[]){
    int temp = 0;
    int min = 0;
    int minIndex = 0;
    for(int i=0;i<N;i++){
        min = A[i];
        for(int j=i;j<N;j++){
            if(A[j] < min){
                min = A[j];
                minIndex = j;
            }
        }
        if(A[i] > min){
            temp = A[i];
            A[i] = A[minIndex];
            A[minIndex] = temp;
        }
    }
    return A;
}

int* insertionSort(int N, int A[]){
    int temp = 0;
    for(int i=1;i<N;i++){
        temp = A[i];
        for(int j=i;j>0;j--){
            if(temp < A[j-1]){
                A[j] = A[j-1];
                if(j==1){
                    A[j-1] = temp;
                    break;
                }
            }
            else{
                A[j] = temp;
                break;
            }
        }
    }
    
    return A;
}

void mergeSort(int N, int A[]){
    
}

int main(int argc, const char * argv[]) {
    int N;
    int A[1001];
    int* sorted;
    scanf("%d", &N);
    for(int i=0;i<N;i++){
        scanf("%d", &A[i]);
    }
    
    sorted = insertionSort(N, A);
    for(int i=0;i<N;i++)
        printf("%d\n", sorted[i]);
    
    return 0;
}

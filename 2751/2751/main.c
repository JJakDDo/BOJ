#include <stdio.h>

#define MAXNUM 1000001

int sorted[MAXNUM];
int size;

void merge(int A[], int m, int middle, int n){
    
    int i,j,k,t;
    i = m;
    j = middle + 1;
    k = m;
    
    while(i<=middle && j<=n){
        if(A[i] <= A[j]){
            sorted[k] = A[i];
            i++;
        }
        else{
            sorted[k] = A[j];
            j++;
        }
        k++;
    }
    if(i>middle)
        for(t=j;t<=n;t++,k++)
            sorted[k] = A[t];
    else
        for(t=i;t<=middle;t++,k++)
            sorted[k] = A[t];
    for(t=m;t<=n;t++)
        A[t] = sorted[t];
}

void mergeSort(int A[], int m, int n){
    int middle;
    if(m<n){
        middle = (m+n)/2;
        mergeSort(A, m, middle);
        mergeSort(A, middle+1, n);
        merge(A, m, middle, n);
    }
}


int main(int argc, const char * argv[]) {
    int N;
    int A[MAXNUM];
    scanf("%d", &N);
    size = N;
    for(int i=0;i<N;i++){
        scanf("%d", &A[i]);
    }
    
    mergeSort(A, 0, N-1);
    
    for(int i=0;i<N;i++){
        printf("%d\n", A[i]);
    }
    
    return 0;
}

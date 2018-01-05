#include <stdio.h>

int main(int argc, const char * argv[]) {
    int cal[12] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    char* strDay[7] = {"SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"};
    int month, day, total = 0;
    scanf("%d %d", &month, &day);
    for(int i=0;i<month - 1;i++)
        total += cal[i];
    total += day;
    
    printf("%s\n", strDay[(total%7)]);
    return 0;
}

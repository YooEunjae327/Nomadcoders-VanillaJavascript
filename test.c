#include <stdio.h>

int main() {
	int money = 10000;

	int age;



	scanf("%d", &age);



	if (age <= 12 && age >= 7)
	{
		money = money - 500;
	}
	else if (age <= 18 && age >= 13)
	{
		money = money - 1100;
	}
	else if (19 <= age)
	{
		money = money - 1400;
	}

	printf("%d\n", money);
	return 0;
}



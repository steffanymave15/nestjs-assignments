import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('fibonacci/:n')
  getFibonacci(@Param('n') n: number) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return { sequence: fib.slice(0, n) };
  }

  @Get('prime/:number')
checkPrime(@Param('number') number: number) {
  if (number <= 1) return { isPrime: false };
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return { isPrime: false };
  }
  return { isPrime: true };
}

@Get('factorial/:number')
calculateFactorial(@Param('number') number: number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return { factorial };
}
}
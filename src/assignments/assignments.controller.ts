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
}
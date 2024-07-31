import { Injectable, ConsoleLogger } from '@nestjs/common';

@Injectable()
export class NestLogger extends ConsoleLogger {
  info(args) {
    // console.log(args);
  }
}

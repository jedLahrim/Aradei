import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClientService } from './client.service';
import { Client } from './entities/client.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateClientInput } from './dto/update-client.input';

@Resolver()
export class ClientResolver {
  constructor(private readonly clientService: ClientService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => Client)
  getClient() {
    return this.clientService.getClient();
  }

  @UseGuards(JwtAuthGuard)
  @Mutation((returns) => Client)
  updateClient(
    @Args('updateClientInput') updateClientInput: UpdateClientInput,
  ) {
    return this.clientService.updateClient(updateClientInput);
  }
}

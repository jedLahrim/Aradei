import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/user.decorator';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';
import { ContactService } from './contact.service';
import { GetContactsDto } from './dto/get-contacts.dto';
import { ContactList } from './entities/contactList.entity';
import { UpdateLeadRelationsDto } from './dto/update-lead-relations';
import { UserPayload } from '../auth/interface/user-payload';

@Resolver()
export class ContactResolver {
  constructor(private contactService: ContactService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Contact)
  async createContact(
    @Args('data') data: CreateContactDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.contactService.createContact(data, user);
  }

  @Mutation(() => Contact)
  async createPopstoresContact(@Args('data') data: CreateContactDto) {
    return this.contactService.createPopstoresContact(data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Contact)
  async updateContact(
    @Args('data') data: UpdateContactDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.contactService.updateContact(data, user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteContact(@Args('id') id: string) {
    return this.contactService.deleteContact(id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async updateLeadRelations(@Args('data') data: UpdateLeadRelationsDto) {
    return this.contactService.updateLeadRelations(data);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => ContactList)
  async getContacts(
    @Args('data') data: GetContactsDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.contactService.getContacts(user, data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => [Contact])
  async searchContacts(
    @Args('query') query: string,
    @CurrentUser() user: UserPayload,
  ) {
    return this.contactService.searchContacts(query, user);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [Contact])
  async getTenants(@CurrentUser() user: UserPayload) {
    return this.contactService.getTenants(user);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => Contact)
  async getContact(
    @CurrentUser() user: UserPayload,
    @Args('leadId') leadId: string,
  ) {
    return this.contactService.getContact(user, leadId);
  }
}

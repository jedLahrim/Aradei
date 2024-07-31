import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/user.decorator';

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreateDocumentDto } from './dto/create-document.dto';
import { Document } from './entities/document.entity';
import { DocumentService } from './document.service';
import { GetDocumentsDto } from './dto/get-documents.dto';
import { CreateConventionDto } from './dto/create-convention.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { CreateComDoc } from './dto/createComDoc.dto';
import { CommercialDocument } from './entities/commercialDoc.entity';
import { UserPayload } from '../auth/interface/user-payload';

@Resolver()
export class DocumentResolver {
  constructor(private documentService: DocumentService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [Document])
  async getDocuments(@Args('data') data: GetDocumentsDto) {
    return this.documentService.getDocuments(data);
  }

  @Query(() => [CommercialDocument])
  async getCommercialDocs() {
    return this.documentService.getCommercialDocs();
  }

  @Query(() => Boolean)
  async planSvg() {
    return this.documentService.planSvg();
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => Document)
  async getDocument(@Args('id') id: string, @CurrentUser() user: UserPayload) {
    return this.documentService.getDocument(id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Document)
  async createDocument(
    @Args('data') data: CreateDocumentDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.documentService.createDocument(data, user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Document)
  async updateDocument(@Args('data') data: UpdateDocumentDto) {
    return this.documentService.updateDocument(data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteDocument(
    @Args('id') id: string,
    @CurrentUser() user: UserPayload,
  ) {
    return this.documentService.deleteDocument(id, user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async sendRelance(
    @Args('roleId') role: number,
    @Args('bookingId') bookingId: string,
    @CurrentUser() user: UserPayload,
  ) {
    return this.documentService.relanceDoc(role, bookingId, user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Document)
  async validateDocument(
    @Args('id') id: string,
    @Args('documentLink') documentLink: string,
    @CurrentUser() user: UserPayload,
  ) {
    return this.documentService.validateDocument(id, documentLink, user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Document)
  async createQuotePdf(
    @Args('proposalId') proposalId: string,
    @CurrentUser() user: UserPayload,
  ) {
    return this.documentService.createQuotePdf(proposalId, user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Document)
  async createPvLivraison(
    @Args('bookingId') bookingId: string,
    @CurrentUser() user: UserPayload,
  ) {
    return this.documentService.createPvLivraisonPdf(bookingId, user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Document)
  async createContractPdf(
    @Args('quoteId') quoteId: string,
    @CurrentUser() user: UserPayload,
  ) {
    return this.documentService.createContractPdf(quoteId, user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Document)
  async createConvention(
    @Args('data') data: CreateConventionDto,
    @CurrentUser() user: UserPayload,
  ) {
    return this.documentService.createConventionPdf(data, user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => CommercialDocument)
  async createCommercialDoc(@Args('data') data: CreateComDoc) {
    return this.documentService.createCommercialDoc(data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async removeCommercialDoc(@Args('docId') docId: string) {
    return this.documentService.removeCommercialDoc(docId);
  }

  // BAD!
  @Query(() => [Document])
  async getTechDocuments() {
    return this.documentService.getTechDocuments();
  }
}

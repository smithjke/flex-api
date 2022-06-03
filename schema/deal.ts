import { PlaceholderType } from './placeholder-type';

export type Deal = {
  catalogSpecialist: Array<PlaceholderType>;
  catalogSpecialistRequest: Array<PlaceholderType>;
  comment: string;
  creator: Array<PlaceholderType>;
  customerCompany: Array<PlaceholderType>;
  customerDealReview: Array<PlaceholderType>;
  journal: Array<PlaceholderType>;
  outstafferCompany: Array<PlaceholderType>;
  outstafferDealReview: Array<PlaceholderType>;
  participant: Array<PlaceholderType>;
  requestToClose: Array<PlaceholderType>;
  reviewCreator: boolean;
  reviewParticipant: boolean;
  status: number;
  termsOfTransaction: Array<PlaceholderType>;
  termsOfTransactionAccepted: Array<PlaceholderType>;
};

export type DealRaw = {
  catalogSpecialist: Array<PlaceholderType>;
  catalogSpecialistRequest: Array<PlaceholderType>;
  comment: string;
  creator: Array<PlaceholderType>;
  customerCompany: Array<PlaceholderType>;
  customerDealReview: Array<PlaceholderType>;
  journal: Array<PlaceholderType>;
  outstafferCompany: Array<PlaceholderType>;
  outstafferDealReview: Array<PlaceholderType>;
  participant: Array<PlaceholderType>;
  requestToClose: Array<PlaceholderType>;
  reviewCreator: boolean;
  reviewParticipant: boolean;
  status: number;
  termsOfTransaction: Array<PlaceholderType>;
  termsOfTransactionAccepted: Array<PlaceholderType>;
};

export function mapDeal(data: Partial<Deal>): DealRaw {
  return {
    catalogSpecialist: null,
    catalogSpecialistRequest: null,
    comment: data.comment,
    creator: null,
    customerCompany: null,
    customerDealReview: null,
    journal: null,
    outstafferCompany: null,
    outstafferDealReview: null,
    participant:null,
    requestToClose: null,
    reviewCreator: data.reviewCreator,
    reviewParticipant: data.reviewParticipant,
    status: data.status,
    termsOfTransaction: null,
    termsOfTransactionAccepted: null,
  };
}

export function mapDealRaw(dataRaw: DealRaw): Deal {
  return {
    catalogSpecialist: null,
    catalogSpecialistRequest: null,
    comment: dataRaw.comment ? String(dataRaw.comment) : null,
    creator: null,
    customerCompany: null,
    customerDealReview: null,
    journal: null,
    outstafferCompany: null,
    outstafferDealReview: null,
    participant: null,
    requestToClose: null,
    reviewCreator: dataRaw.reviewCreator ? Boolean(dataRaw.reviewCreator) : null,
    reviewParticipant: dataRaw.reviewCreator ? Boolean(dataRaw.reviewCreator) : null,
    status: dataRaw.status ? Number(dataRaw.status) : null,
    termsOfTransaction: null,
    termsOfTransactionAccepted: null,
  };
}


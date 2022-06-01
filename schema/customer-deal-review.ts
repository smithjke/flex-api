export type CustomerDealReview = {
  commentToDeal: string;
  commentToPartner: string;
  deal: string;
  rateDealAdequacy: number;
  rateDealCommunication: number;
  rateDealPunctuality: number;
  rateDealQuality: number;
  rateDealTeamwork: number;
  ratePartnerCommunication: number;
  ratePartnerMeetingExpectations: number;
  ratePartnerPoliteness: number;
  ratePartnerPrice: number;
};

export type CustomerDealReviewRaw = {
  commentToDeal: string;
  commentToPartner: string;
  deal: string;
  rateDealAdequacy: number;
  rateDealCommunication: number;
  rateDealPunctuality: number;
  rateDealQuality: number;
  rateDealTeamwork: number;
  ratePartnerCommunication: number;
  ratePartnerMeetingExpectations: number;
  ratePartnerPoliteness: number;
  ratePartnerPrice: number;
};

export function mapCustomerDealReview(data: Partial<CustomerDealReview>): CustomerDealReviewRaw {
  return {
    commentToDeal: data.commentToDeal,
    commentToPartner: data.commentToPartner,
    deal: data.deal,
    rateDealAdequacy: data.rateDealAdequacy,
    rateDealCommunication: data.rateDealCommunication,
    rateDealPunctuality: data.rateDealPunctuality,
    rateDealQuality: data.rateDealQuality,
    rateDealTeamwork: data.rateDealTeamwork,
    ratePartnerCommunication: data.ratePartnerCommunication,
    ratePartnerMeetingExpectations: data.ratePartnerMeetingExpectations,
    ratePartnerPoliteness: data.ratePartnerPoliteness,
    ratePartnerPrice: data.ratePartnerPrice,
  };
}

export function mapCustomerDealReviewRaw(dataRaw: CustomerDealReviewRaw): CustomerDealReview {
  return {
    commentToDeal: dataRaw.commentToDeal ? String(dataRaw.commentToDeal) : null,
    commentToPartner: dataRaw.commentToPartner ? String(dataRaw.commentToPartner) : null,
    deal: dataRaw.deal ? String(dataRaw.deal) : null,
    rateDealAdequacy: dataRaw.rateDealAdequacy ? Number(dataRaw.rateDealAdequacy) : null,
    rateDealCommunication: dataRaw.rateDealCommunication ? Number(dataRaw.rateDealCommunication) : null,
    rateDealPunctuality: dataRaw.rateDealPunctuality ? Number(dataRaw.rateDealPunctuality) : null,
    rateDealQuality: dataRaw.rateDealQuality ? Number(dataRaw.rateDealQuality) : null,
    rateDealTeamwork: dataRaw.rateDealTeamwork ? Number(dataRaw.rateDealTeamwork) : null,
    ratePartnerCommunication: dataRaw.ratePartnerCommunication ? Number(dataRaw.ratePartnerCommunication) : null,
    ratePartnerMeetingExpectations: dataRaw.ratePartnerMeetingExpectations ? Number(dataRaw.ratePartnerMeetingExpectations) : null,
    ratePartnerPoliteness: dataRaw.ratePartnerPoliteness ? Number(dataRaw.ratePartnerPoliteness) : null,
    ratePartnerPrice: dataRaw.ratePartnerPrice ? Number(dataRaw.ratePartnerPrice) : null,
  };
}

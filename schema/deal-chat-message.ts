export type DealChatMessage = {
  id: string;
  creator: string;
  message: string;
  asset: string;
  isRead: boolean;
  createdAt: Date;
};

export type DealChatMessageRaw = {
  id: string;
  creator: string;
  message: string;
  asset: string;
  isRead: boolean;
  createdAt: string;
};

export function mapDealChatMessage(data: Partial<DealChatMessage>): DealChatMessageRaw {
  return {
    id: data.id,
    creator: data.creator,
    message: data.message,
    asset: data.asset,
    isRead: data.isRead,
    createdAt: data.createdAt ? data.createdAt.toISOString() : undefined,
  };
}

export function mapDealChatMessageRaw(data: DealChatMessageRaw): DealChatMessage {
  return {
    id: data.id ? String(data.id) : null,
    creator: data.creator ? String(data.creator) : null,
    message: data.message ? String(data.message) : null,
    asset: data.asset ? String(data.asset) : null,
    isRead: data.isRead ? Boolean(data.isRead) : null,
    createdAt: data.createdAt ? new Date(data.createdAt) : null,
  };
}

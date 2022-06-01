export type Complaint = {
  target: string;
  type: string;
  description: string;
};

export type ComplaintRaw = {
  target: string;
  type: string;
  description: string;
};

export function mapComplaint(data: Partial<Complaint>): ComplaintRaw {
  return {
    target: data.target,
    type: data.type,
    description: data.description,
  };
}

export function mapComplaintRaw(data: ComplaintRaw): Complaint {
  return {
    target: data.target ? String(data.target) : null,
    type: data.type ? String(data.type) : null,
    description: data.description ? String(data.description) : null,
  };
}

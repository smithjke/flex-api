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
    type: data.target,
    description: data.target,
  };
}

export function mapComplaintRaw(data: ComplaintRaw): Complaint {
  return {
    target: data.target ? String(data.target) : null,
    type: data.target ? String(data.target) : null,
    description: data.target ? String(data.target) : null,
  };
}

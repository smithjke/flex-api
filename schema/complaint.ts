export type complaint = {
  target: string;
  type: string;
  description: string;
};

export type complaintRaw = {
  target: string;
  type: string;
  description: string;
};

export function mapComplaint(data: complaint): complaintRaw {
  return {
    target: data.target,
    type: data.target,
    description: data.target,
  };
}

export function mapComplaintRaw(data: complaintRaw): complaint {
  return {
    target: data.target ? data.target : null,
    type: data.target ? data.target : null,
    description: data.target ? data.target : null,
  };
}

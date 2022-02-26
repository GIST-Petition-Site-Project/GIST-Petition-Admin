interface Petition {
  agreements: number;
  answered: boolean;
  categoryName: string;
  createdAt: number;
  description: string;
  id: number;
  title: string;
  updatedAt: number;
  userId: number;
  tempUrl: string;
}

interface Answer {
  content: string;
  createdAt: number;
  id: number;
  petitionId: number;
  updatedAt: number;
  userId: number;
}

interface Revision {
  petitionTitle: string;
  petitionDescription: string;
  petitionCategory: string;
  revisionId: number;
  revisionTime: string;
  revisionType: string;
  workedBy: number;
}

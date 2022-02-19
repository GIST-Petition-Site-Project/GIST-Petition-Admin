interface Petition {
  agreements: number;
  answered: boolean;
  categoryName: string;
  createdAt: string;
  description: string;
  id: number;
  title: string;
  updatedAt: string;
  userId: number;
  tempUrl: string;
}

interface Answer {
  content: string;
  createdAt: string;
  id: number;
  petitionId: number;
  updatedAt: string;
  userId: number;
}

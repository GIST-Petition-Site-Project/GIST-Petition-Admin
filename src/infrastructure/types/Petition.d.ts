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
  released: true;
}

type PetitionStatus = '승인 대기중' | '청원 진행중' | '답변 대기중' | '답변 완료';

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
  revisionTime: number;
  revisionType: string;
  workedBy: number;
}

interface AnswerRevision {
  revisionId: number;
  revisionTime: number;
  revisionType: number;
  workedBy: number;
  answerContent: string;
}

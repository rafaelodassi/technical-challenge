interface Process {
  completionDate: string;
  dateCreation: string;
  description: string;
  identifier: string;
  name: string;
  priority: number;
  status: string;
  userName: string;
}

interface ResponseProcess {
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  pageable: {
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
  };
  content: Process[];
}

export type { ResponseProcess, Process };

import { gql } from '@apollo/client';

const FIND_JOBS = gql`
  query FindJobs {
    jobs {
      id
      title
    }
  }
`;

export default FIND_JOBS;

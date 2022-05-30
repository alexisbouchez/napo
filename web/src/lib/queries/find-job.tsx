import { gql } from '@apollo/client';

const FIND_JOB = gql`
  query FindJob($id: String!) {
    job(id: $id) {
      id
      title
    }
  }
`;

export default FIND_JOB;

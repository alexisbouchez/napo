import { gql } from '@apollo/client';

const CREATE_JOB = gql`
  mutation CreateJob($title: String!) {
    createJob(createJobInput: { title: $title }) {
      id
      title
    }
  }
`;

export default CREATE_JOB;

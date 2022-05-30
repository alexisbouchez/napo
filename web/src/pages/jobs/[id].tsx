import { GetStaticPaths, GetStaticProps } from 'next';
import client from '~/lib/apollo-client';
import FIND_JOB from '~/lib/queries/find-job';
import FIND_JOBS from '~/lib/queries/find-jobs';
import Job from '~/types/job';

type JobPageProps = {
  job: Job;
};

export default function JobPage({ job }: JobPageProps) {
  return (
    <div>
      <h1>{job.title}</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const {
      data: { job },
    } = await client.query({ query: FIND_JOB, variables: { id: params?.id } });

    return { props: { job } };
  } catch {
    return { notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const {
      data: { jobs },
    } = await client.query({ query: FIND_JOBS });

    const paths = jobs.map((job: Job) => ({ params: { id: job.id } }));

    return { paths, fallback: false };
  } catch {
    return { paths: [], fallback: false };
  }
};

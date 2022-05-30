import Link from 'next/link';
import client from '~/lib/apollo-client';
import FIND_JOBS from '~/lib/queries/find-jobs';
import Job from '~/types/job';

type JobsPageProps = {
  jobs: Job[];
};

export default function JobsPage({ jobs }: JobsPageProps) {
  return (
    <ul>
      {jobs.map((job) => (
        <li key={job.id}>
          <Link href={`/jobs/${job.id}`}>{job.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  try {
    const {
      data: { jobs },
    } = await client.query({ query: FIND_JOBS });

    return { props: { jobs } };
  } catch {
    return { notFound: true };
  }
}

import ClientOnly from '~/components/client-only';
import CreateJobForm from '~/components/create-job-form';

export default function CreateJobPage() {
  return (
    <ClientOnly>
      <CreateJobForm />
    </ClientOnly>
  );
}

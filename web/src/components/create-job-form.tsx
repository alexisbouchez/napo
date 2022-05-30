import { useMutation } from '@apollo/client';
import { useState } from 'react';
import CREATE_JOB from '~/lib/mutations/create-job';

export default function CreateJobForm() {
  const [variables, setVariables] = useState({
    title: '',
  });

  const [createJob, { data, loading, error }] = useMutation(CREATE_JOB);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVariables({
      ...variables,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('variables', variables);
    const result = await createJob({ variables });
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="titlle">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Software Engineer"
          onChange={handleChange}
        />
      </div>

      <div>
        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create'}
        </button>
      </div>
    </form>
  );
}

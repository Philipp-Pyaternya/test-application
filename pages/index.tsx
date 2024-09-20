import { useState } from 'react';
import path from 'path';
import fs from 'fs/promises';

import Layout from 'components/Layout';
import Form from 'components/Form';
import DisplayData from 'components/DisplayData';
import Button from 'components/Button';
import { IField } from '../type';

interface IMain {
  initialData: IField[];
}

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const initialData = JSON.parse(fileContents);

  return {
    props: {
      initialData,
    },
  };
}

function Main({ initialData }: IMain) {
  const [formData, setFormData] = useState(null);
  const submitHandler = (value: any) => setFormData(value);
  const resetHandler = () => setFormData(null);

  return (
    <Layout>
      <div className="w-full mt-10 flex justify-center items-center p-9">
        {!formData && <Form data={initialData} handler={submitHandler} />}
        {formData && (
          <div className="flex flex-col">
            <DisplayData data={formData} />
            <Button onClick={resetHandler}>Reset</Button>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Main;

import * as React from 'react';
import Layout from '@/components/Layout';
import { Card, CardHeader, CardContent } from '@/components/Card';
import FileUpload from '@/components/FileUpload';
import TextArea from '@/components/TextArea';

const App = () => (
  <Layout>
    <Card>
      <CardHeader>
        <FileUpload onFileChange={(file) => console.log(file)} />
      </CardHeader>
      <CardContent>
        <TextArea id="result" label="Result:" rows={10} />
      </CardContent>
    </Card>
  </Layout>
);

export default App;

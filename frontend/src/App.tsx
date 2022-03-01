import * as React from 'react';
import Layout from '@/components/Layout';
import { Card, CardHeader, CardContent } from '@/components/Card';
import FileUpload from '@/components/FileUpload';

const App = () => (
  <Layout>
    <Card>
      <CardHeader>
        <FileUpload onFileChange={(file) => console.log(file)} />
      </CardHeader>
      <CardContent>
        fff
      </CardContent>
    </Card>
  </Layout>
);

export default App;

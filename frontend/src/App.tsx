import * as React from 'react';
import Layout from '@/components/Layout';
import { Card, CardHeader, CardContent } from '@/components/Card';
import FileUpload from '@/components/FileUpload';
import TextArea from '@/components/TextArea';

/**
 * TODO
 * - Parse data and show visualize it instead of using a textarea
 * - Validate response data from the API
 * - Add error handling
 * - Add loading indicator
 */

const App = () => {
  const [result, setResult] = React.useState('');
  
  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch('http://127.0.0.1:8080/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      const formatted = JSON.stringify(data, null, 2);
      setResult(formatted);
    }
  };

  return (
    <Layout>
      <Card>
        <CardHeader>
          <FileUpload onFileChange={handleFileUpload} />
        </CardHeader>
        <CardContent>
          <TextArea id="result" label="Result:" rows={10} value={result} />
        </CardContent>
      </Card>
    </Layout>
  );
}
export default App;

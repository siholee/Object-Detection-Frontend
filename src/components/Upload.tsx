import React, { useState } from 'react';
import { IonCard, IonCardContent, IonButton } from '@ionic/react';

function Upload() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleClick = () => {
    document.getElementById('fileInput')?.click();
  };

  const handleReset = () => {
    setFile(null); // Reset file selection to null
  };

  return (
    <IonCard>
      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          border: '2px dashed #ccc',
          padding: '20px',
          textAlign: 'center',
          cursor: 'pointer',
        }}
      >
        {file ? (
          <p>{file.name}</p>
        ) : (
          <p>파일을 드래그 앤 드롭하여 업로드하거나 클릭하여 파일을 선택하세요.</p>
        )}
      </div>
      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <IonCardContent>
        {file ? `Selected File: ${file.name}` : 'No file selected.'}
        <IonButton expand="block" fill="outline">검출 시작</IonButton>
      <IonButton expand="block" fill="outline" color="danger" onClick={handleReset}>초기화</IonButton>
      </IonCardContent>
      
    </IonCard>
  );
}

export default Upload;
